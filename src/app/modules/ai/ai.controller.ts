import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
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
  const result = await aiService.blogPostGenerator(topic);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog post generated successfully",
    data: result,
  });
});

export const aiController = {
  chatAI,
  blogPostGenerator,
};
