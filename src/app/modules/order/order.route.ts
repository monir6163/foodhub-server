import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import { OrderController } from "./order.controller";

const router = express.Router();

router.get("/", authMiddleware(UserRole.customer), OrderController.getMyOrders);

router.get(
  "/:id",
  authMiddleware(UserRole.customer),
  OrderController.getOrderById,
);

router.post(
  "/",
  authMiddleware(UserRole.customer),
  OrderController.createOrder,
);

export const OrderRoutes = router;
