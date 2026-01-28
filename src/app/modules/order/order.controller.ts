import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

const createOrder = catchAsync(async (req: Request, res: Response) => {});

export const OrderController = {
  createOrder,
};
