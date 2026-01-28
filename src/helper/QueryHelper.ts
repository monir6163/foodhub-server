import { MealWhereInput } from "../../generated/prisma/models";
import { MealFilterPayload } from "../app/modules/meal/meal.interface";

export const buildMealQueryCondition = (
  payload: MealFilterPayload,
): MealWhereInput => {
  const andConditions: MealWhereInput[] = [];

  // filter by cuisine
  if (payload.cuisine) {
    andConditions.push({
      cuisine: {
        equals: payload.cuisine,
        mode: "insensitive",
      },
    });
  }

  // filter by dietary (array contains)
  if (payload.dietary) {
    andConditions.push({
      dietary: {
        has: payload.dietary, // ["halal"]
      },
    });
  }

  // filter by mealType
  if (payload.mealType) {
    andConditions.push({
      mealType: {
        equals: payload.mealType,
        mode: "insensitive",
      },
    });
  }

  // filter by spiceLevel
  if (payload.spiceLevel) {
    andConditions.push({
      spiceLevel: {
        equals: payload.spiceLevel,
        mode: "insensitive",
      },
    });
  }

  return andConditions.length > 0 ? { AND: andConditions } : {};
};
