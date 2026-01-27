import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import validateRequest from "../../middleware/ValidateRequest";
import { MealController } from "./meal.controller";
import { MealValidation } from "./meal.validation";

const router = express.Router();

router.post(
  "/",
  authMiddleware(UserRole.provider),
  validateRequest(MealValidation.mealCreateZodSchema),
  MealController.createMeal,
);

export const MealRoutes = router;
