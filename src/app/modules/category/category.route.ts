import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import validateRequest from "../../middleware/ValidateRequest";
import { CategoryController } from "./category.controller";
import { CategoryValidation } from "./category.validation";

const router = express.Router();

router.post(
  "/",
  authMiddleware(UserRole.admin, UserRole.provider),
  validateRequest(CategoryValidation.categoryZodSchema),
  CategoryController.createCategory,
);
router.get("/", CategoryController.getAllCategories);

export const CategoryRoutes = router;
