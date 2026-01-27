import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IMeal } from "./meal.interface";
import { MealService } from "./meal.service";

const createMeal = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const result = await MealService.createMeal({ ...req.body, userId });
  sendResponse<IMeal>(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Meal created successfully",
    data: result,
  });
});

export const MealController = {
  createMeal,
};
