import { Request } from "express";
import { prisma } from "../../../utils/prisma";
import { IUser } from "./user.interface";

const getCurrentUser = async (req: Request) => {
  return req.user;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (users as IUser[]) || [];
};

export const UserService = {
  getCurrentUser,
  getAllUsers,
};
