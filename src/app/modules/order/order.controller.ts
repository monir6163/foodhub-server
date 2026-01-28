import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OrderService } from "./order.service";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const orderData = req.body;
  const result = await OrderService.createOrder(orderData, userId);
  res.status(201).json({
    success: true,
    message: "Order created successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
};
