import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import ApiError from "../../errors/ApiError";
import { aiService } from "./ai.service";

const chatAI = catchAsync(async (req: Request, res: Response) => {
  const { message } = req.body;
  const result = await aiService.chatAI(message);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "AI response generated successfully",
    data: result,
  });
});

const blogPostGenerator = catchAsync(async (req: Request, res: Response) => {
  const { topic } = req.body;
  const userId = req.user?.id;

  if (!userId) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized user");
  }

  const result = await aiService.blogPostGenerator(topic, userId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog post generated and saved successfully",
    data: result,
  });
});

const generateMealDescription = catchAsync(
  async (req: Request, res: Response) => {
    const { title, category } = req.body;
    const result = await aiService.generateMealDescription(title, category);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Meal description generated and saved successfully",
      data: result,
    });
  },
);

const aiHealthTipSuggestion = catchAsync(
  async (req: Request, res: Response) => {
    const result = await aiService.aiHealthTipSuggestion();
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Health tip suggestion generated successfully",
      data: result,
    });
  },
);

export const aiController = {
  chatAI,
  blogPostGenerator,
  generateMealDescription,
  aiHealthTipSuggestion,
};
