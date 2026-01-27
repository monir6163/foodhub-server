import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

const getCurrentUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getCurrentUser(req);
  sendResponse<IUser>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Current user retrieved successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();
  sendResponse<IUser[]>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "All users retrieved successfully",
    data: result,
  });
});

export const UserController = {
  getCurrentUser,
  getAllUsers,
};
