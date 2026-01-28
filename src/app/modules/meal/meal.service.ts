import { StatusCodes } from "http-status-codes";
import { prisma } from "../../../utils/prisma";
import ApiError from "../../errors/ApiError";
import { IMeal, UpdateMealPayload } from "./meal.interface";

const createMeal = async (payload: IMeal & { userId?: string }) => {
  const {
    name,
    calories,
    ingredients,
    description,
    price,
    image,
    isAvailable,
    categoryId,
    dietary,
    cuisine,
    mealType,
    spiceLevel,
    userId,
  } = payload;

  const result = await prisma.$transaction(async (tx) => {
    const providerFind = await tx.providerProfile.findUnique({
      where: { userId: userId },
    });

    if (!providerFind) {
      throw new ApiError(
        StatusCodes.NOT_FOUND,
        "Provider profile not found for this user",
      );
    }

    const data = await tx.meal.create({
      data: {
        name,
        calories,
        ingredients,
        description: description ?? null,
        price,
        image: image ?? null,
        isAvailable,
        categoryId,
        providerId: providerFind.id,
        dietary,
        cuisine,
        mealType,
        spiceLevel,
      },
    });
    return data;
  });

  return result as IMeal;
};

const getAllMeals = async (): Promise<IMeal[]> => {
  const meals = await prisma.meal.findMany({
    orderBy: { createdAt: "desc" },
  });
  if (!meals || meals.length === 0) {
    throw new ApiError(StatusCodes.NOT_FOUND, "No meals found");
  }
  return meals as IMeal[];
};

const getMealsById = async (mealId: string) => {
  const data = await prisma.meal.findUnique({
    where: { id: mealId },
  });
  if (!data) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Meal not found");
  }
  return data as IMeal;
};

const updateMeal = async (
  mealId: string,
  userId: string,
  payload: UpdateMealPayload,
) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId },
  });

  if (!providerProfile) {
    throw new ApiError(StatusCodes.FORBIDDEN, "Provider profile not found");
  }

  const existingMeal = await prisma.meal.findFirst({
    where: {
      id: mealId,
      providerId: providerProfile.id,
    },
  });

  if (!existingMeal) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Meal not found");
  }

  const updatedMeal = await prisma.meal.update({
    where: { id: mealId },
    data: {
      ...payload,
      updatedAt: new Date(),
    },
  });

  return updatedMeal as IMeal;
};

const deleteMeal = async (mealId: string, userId: string) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId },
  });

  if (!providerProfile) {
    throw new ApiError(StatusCodes.FORBIDDEN, "Provider profile not found");
  }

  const existingMeal = await prisma.meal.findFirst({
    where: {
      id: mealId,
      providerId: providerProfile.id,
    },
  });

  if (!existingMeal) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Meal not found");
  }

  const deletedMeal = await prisma.meal.delete({
    where: { id: mealId },
  });

  return deletedMeal as IMeal;
};

export const MealService = {
  createMeal,
  getAllMeals,
  getMealsById,
  updateMeal,
  deleteMeal,
};
