import { StatusCodes } from "http-status-codes";
import { prisma } from "../../../utils/prisma";
import ApiError from "../../errors/ApiError";
import { IMeal } from "./meal.interface";

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
    userId,
  } = payload;

  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId: userId },
  });

  if (!providerProfile) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      "Provider profile not found. Please create a provider profile first.",
    );
  }

  const data = await prisma.meal.create({
    data: {
      name,
      calories,
      ingredients,
      description: description ?? null,
      price,
      image: image ?? null,
      isAvailable,
      categoryId,
      providerId: providerProfile.id,
    },
  });
  return data as IMeal;
};

export const MealService = {
  createMeal,
};
