import { StatusCodes } from "http-status-codes";
import slugify from "slugify";
import { prisma } from "../../../utils/prisma";
import ApiError from "../../errors/ApiError";

const chatAI = async (prompt: string, context?: string) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const baseUrl = "https://openrouter.ai/api/v1/chat/completions";

  if (!apiKey || typeof apiKey !== "string") {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "AI API key is not configured properly",
    );
  }

  const meals = await prisma.meal.findMany({
    orderBy: [{ category: { name: "asc" } }, { name: "asc" }],
    select: {
      name: true,
      description: true,
      price: true,
      image: true,
      isAvailable: true,
      calories: true,
      ingredients: true,
      cuisine: true,
      dietary: true,
      mealType: true,
      spiceLevel: true,
      category: {
        select: {
          name: true,
          slug: true,
        },
      },
      provider: {
        select: {
          shopName: true,
          address: true,
          isOpen: true,
        },
      },
    },
  });

  const mealCatalog = meals
    .map((meal) => {
      const ingredients = meal.ingredients.length
        ? meal.ingredients.join(", ")
        : "N/A";
      const dietary = meal.dietary.length ? meal.dietary.join(", ") : "N/A";

      return [
        `Name: ${meal.name}`,
        `Category: ${meal.category?.name ?? "N/A"} (${meal.category?.slug ?? "N/A"})`,
        `Provider: ${meal.provider?.shopName ?? "N/A"}`,
        `Price: ${meal.price}`,
        `Calories: ${meal.calories}`,
        `Cuisine: ${meal.cuisine ?? "N/A"}`,
        `Meal Type: ${meal.mealType ?? "N/A"}`,
        `Spice Level: ${meal.spiceLevel ?? "N/A"}`,
        `Dietary: ${dietary}`,
        `Ingredients: ${ingredients}`,
        `Available: ${meal.isAvailable ? "Yes" : "No"}`,
        `Description: ${meal.description ?? "N/A"}`,
        `Provider Open: ${meal.provider?.isOpen ? "Yes" : "No"}`,
      ].join(" | ");
    })
    .join("\n");

  const systemPrompt = [
    `You are a helpful FoodHub assistant for a food delivery platform.`,
    `Use the provided meal catalog as the source of truth for all meal-related questions.`,
    `If the user asks about a meal, answer using the catalog data and do not invent meals, prices, ingredients, or availability.`,
    `If a meal is not in the catalog, say you could not find it and suggest similar available meals if possible.`,
    `Keep answers concise, friendly, and practical.`,
    context ? `Additional instructions: ${context}` : null,
    `Meal catalog:\n${mealCatalog || "No meals are available right now."}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.FRONTEND_URL as string,
      "X-Title": "FoodHub",
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      `AI API error: ${errorData.error.message || "Unknown error"}`,
    );
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
};

interface ParsedBlogPost {
  title: string;
  description: string | null;
  thumbnail: string | null;
  content: string;
}

const buildFallbackThumbnail = (topic: string) => {
  const encodedTopic = encodeURIComponent(topic.trim() || "food");
  return `https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80&${encodedTopic}`;
};

const fetchUnsplashThumbnail = async (topic: string) => {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return null;
  }

  const searchQuery = encodeURIComponent(`${topic.trim() || "food"} food`);
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        "Accept-Version": "v1",
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const photo = data?.results?.[0];
  return (
    photo?.urls?.regular ?? photo?.urls?.full ?? photo?.urls?.small ?? null
  );
};

const parseBlogPostContent = (rawContent: string, fallbackTopic: string) => {
  const lines = rawContent.split(/\r?\n/).map((line) => line.trim());

  const titleLine = lines.find((line) => /^#\s+/.test(line));
  const title = titleLine?.replace(/^#\s+/, "").trim() || fallbackTopic;

  const thumbnailLine = lines.find((line) => /^thumbnail\s*:/i.test(line));
  const thumbnailMatch = thumbnailLine?.match(/https?:\/\/\S+/i);
  const markdownImageMatch = rawContent.match(
    /!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/i,
  );
  const thumbnail = thumbnailMatch?.[0] ?? markdownImageMatch?.[1] ?? null;

  const descriptionLine = lines.find((line) => /^\*.*\*$/.test(line));
  const description = descriptionLine
    ? descriptionLine.replace(/^\*+|\*+$/g, "").trim()
    : null;

  const content = lines
    .filter((line) => {
      if (!line) return false;
      if (line === titleLine) return false;
      if (line === thumbnailLine) return false;
      if (line === descriptionLine) return false;
      return true;
    })
    .join("\n")
    .trim();

  return {
    title,
    description,
    thumbnail,
    content: content || rawContent.trim(),
  } satisfies ParsedBlogPost;
};

const generateUniqueBlogSlug = async (title: string) => {
  const baseSlug = slugify(title, {
    replacement: "-",
    lower: true,
    trim: true,
    remove: /[*+~.()'"!:@]/g,
    strict: true,
  });

  let slug = baseSlug;
  let suffix = 1;

  while (await prisma.blogs.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return slug;
};

const blogPostGenerator = async (topic: string, userId: string) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const baseUrl = "https://openrouter.ai/api/v1/chat/completions";

  if (!apiKey || typeof apiKey !== "string") {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "AI API key is not configured properly",
    );
  }
  // must be food related topic
  if (!topic || typeof topic !== "string") {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid blog topic provided");
  }
  if (!userId || typeof userId !== "string") {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized user");
  }

  const systemPrompt = `You are a creative food blogger for FoodHub. Write a blog post on the topic "${topic}" that is engaging, informative, and relevant to food lovers.

Return the response in this exact markdown structure:
# Title
*Short description*
Thumbnail: https://images.unsplash.com/... or a relevant food image URL

Blog content with clear headings and paragraphs.

Rules:
- The title must be catchy and include the topic.
- The description should be a concise summary of the blog post.
- The thumbnail must always be included and must be a valid image URL.

Then provide the blog content with clear headings and paragraphs. The content must be at least 300 words long and include useful information, tips, or insights related to the topic.`;

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.FRONTEND_URL as string,
      "X-Title": "FoodHub Blog Post Generator",
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "system", content: systemPrompt }],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      `AI API error: ${errorData.error.message || "Unknown error"}`,
    );
  }

  const data = await response.json();

  const generatedContent = data.choices[0].message.content.trim();
  const parsedBlog = parseBlogPostContent(generatedContent, topic);
  const slug = await generateUniqueBlogSlug(parsedBlog.title);
  const unsplashThumbnail = await fetchUnsplashThumbnail(topic);
  const thumbnail =
    unsplashThumbnail || parsedBlog.thumbnail || buildFallbackThumbnail(topic);
  const savedBlog = await prisma.blogs.create({
    data: {
      title: parsedBlog.title,
      slug,
      content: parsedBlog.content,
      thumbnail,
      userId,
    },
  });

  return {
    blog: savedBlog,
    generatedContent,
    description: parsedBlog.description,
  };
};

const generateMealDescription = async (title: string, category: string) => {
  if (!title || typeof title !== "string") {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid meal title provided");
  }

  if (!category || typeof category !== "string") {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      "Invalid meal category provided",
    );
  }

  const prompt = `Write a short appetizing description for a FoodHub meal named "${title}" in the "${category}" category.

Rules:
- Keep it under 150 characters.
- Make it sound premium, fresh, and persuasive.
- Use FoodHub's actual menu style and avoid generic filler.
- Do not mention that you are an AI.`;
  const context =
    "You are a senior food copywriter for FoodHub. You write concise, mouth-watering meal descriptions that match the restaurant menu style and help users decide quickly.";
  const generatedDescription = await chatAI(prompt, context);

  const meal = await prisma.meal.findFirst({
    where: {
      name: { equals: title, mode: "insensitive" },
      category: {
        OR: [
          { name: { equals: category, mode: "insensitive" } },
          { slug: { equals: category, mode: "insensitive" } },
        ],
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      category: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
  });

  if (!meal) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Meal not found");
  }

  const savedMeal = await prisma.meal.update({
    where: { id: meal.id },
    data: {
      description: generatedDescription,
    },
    select: {
      id: true,
      name: true,
      description: true,
      category: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
      updatedAt: true,
    },
  });

  return {
    meal: savedMeal,
    generatedDescription,
  };
};

const aiHealthTipSuggestion = async () => {
  const userPreferences =
    "User prefers low-carb, high-protein meals and is allergic to nuts.";
  const prompt = `Based on the following user preferences and dietary restrictions: ${userPreferences}, suggest a healthy meal option from the FoodHub menu. Provide a brief description of why this meal would be a good choice for the user.short in 100 characters.`;
  const context =
    "You are a nutritionist assistant for FoodHub, helping users find meals that fit their health goals and dietary needs.";
  return await chatAI(prompt, context);
};

export const aiService = {
  chatAI,
  blogPostGenerator,
  generateMealDescription,
  aiHealthTipSuggestion,
};
