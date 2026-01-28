import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post(
  "/",
  authMiddleware(UserRole.customer, UserRole.provider),
  OrderController.createOrder,
);

export const OrderRoutes = router;
