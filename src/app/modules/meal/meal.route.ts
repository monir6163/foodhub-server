import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import validateRequest from "../../middleware/ValidateRequest";
import { MealController } from "./meal.controller";
import { MealValidation } from "./meal.validation";

const router = express.Router();

router.get("/", MealController.getAllMeals);

router.get("/:id", MealController.getMealsById);

router.post(
  "/",
  authMiddleware(UserRole.provider),
  validateRequest(MealValidation.mealCreateZodSchema),
  MealController.createMeal,
);

router.put(
  "/:id",
  authMiddleware(UserRole.provider),
  validateRequest(MealValidation.mealUpdateZodSchema),
  MealController.updateMeal,
);

router.delete(
  "/:id",
  authMiddleware(UserRole.provider),
  MealController.deleteMeal,
);

export const MealRoutes = router;
