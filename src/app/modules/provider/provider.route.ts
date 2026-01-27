import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import validateRequest from "../../middleware/ValidateRequest";
import { ProviderController } from "./provider.controller";
import { ProviderValidation } from "./provider.validation";

const router = express.Router();
router.post(
  "/",
  authMiddleware(UserRole.provider),
  validateRequest(ProviderValidation.createProviderProfileZodSchema),
  ProviderController.createProviderProfile,
);
router.get("/", ProviderController.getAllProviders);

export const ProviderRoutes = router;
