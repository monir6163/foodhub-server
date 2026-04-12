import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import { BlogController } from "./blog.controller";
const router = express.Router();

router.get("/", BlogController.getAllBlogs);
router.get(
  "/admin",
  authMiddleware(UserRole.admin),
  BlogController.getAllForAdmin,
);
router.get("/:slug", BlogController.getBlogBySlug);
router.delete(
  "/:id",
  authMiddleware(UserRole.admin),
  BlogController.deleteBlogById,
);

export const BlogRoute = router;
