import { StatusCodes } from "http-status-codes";
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

const blogPostGenerator = async (topic: string) => {
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

  const systemPrompt = `You are a creative blog post generator for FoodHub, a food delivery platform. Write an engaging and informative blog post on the topic: "${topic}". The post should be around 500 words, include a catchy title, and be relevant to food, dining, or the restaurant industry. Use a friendly and conversational tone that appeals to food lovers. Avoid promotional language about FoodHub and focus on providing value to readers interested in the topic.`;

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
  return data.choices[0].message.content.trim();
};

export const aiService = {
  chatAI,
  blogPostGenerator,
};
