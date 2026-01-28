import express from "express";
import { UserRole } from "../../../../generated/prisma/enums";
import authMiddleware from "../../middleware/Auth";
import validateRequest from "../../middleware/ValidateRequest";
import { OrderController } from "./order.controller";
import { OrderValidation } from "./order.validation";

const router = express.Router();

router.get("/", authMiddleware(UserRole.customer), OrderController.getMyOrders);

router.get(
  "/:id",
  authMiddleware(UserRole.customer),
  OrderController.getOrderById,
);

router.patch(
  "/status/:id",
  authMiddleware(UserRole.provider),
  validateRequest(OrderValidation.updateOrderStatusSchema),
  OrderController.updateOrderStatus,
);

router.post(
  "/",
  authMiddleware(UserRole.customer),
  validateRequest(OrderValidation.createOrderSchema),
  OrderController.createOrder,
);

export const OrderRoutes = router;
