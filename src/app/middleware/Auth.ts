import { fromNodeHeaders } from "better-auth/node";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserRole, UserStatus } from "../../../generated/prisma/browser";
import { auth } from "../../utils/auth";
import ApiError from "../errors/ApiError";

const authMiddleware = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const headers = fromNodeHeaders(req.headers);
      const session = await auth.api.getSession({ headers });
      if (!session || !session.user) {
        throw new ApiError(
          StatusCodes.UNAUTHORIZED,
          "Unauthorized! Please log in to access this resource.",
        );
      }
      req.user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role as UserRole,
        phone: session.user.phone as string,
        status: session.user.status as UserStatus,
        createdAt: session.user.createdAt,
        updatedAt: session.user.updatedAt,
      };
      if (roles.length && !roles.includes(req?.user?.role)) {
        throw new ApiError(
          StatusCodes.FORBIDDEN,
          "Access Forbidden! You don't have permission.",
        );
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default authMiddleware;
