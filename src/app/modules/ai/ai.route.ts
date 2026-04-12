import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import { aiController } from "./ai.controller";
const router = express.Router();

router.post("/chat", aiController.chatAI);
router.post(
  "/blog-post",
  authMiddleware(UserRole.admin),
  aiController.blogPostGenerator,
);

export const aiRoutes = router;
