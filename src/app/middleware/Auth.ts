import { fromNodeHeaders } from "better-auth/node";
import { NextFunction, Request, Response } from "express";
import { UserRole, UserStatus } from "../../../generated/prisma/browser";
import { auth } from "../../utils/auth";

const authMiddleware = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const headers = fromNodeHeaders(req.headers);
      const session = await auth.api.getSession({ headers });
      if (!session || !session.user) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized!",
        });
      }
      req.user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role as UserRole,
        phone: session.user.phone as string,
        status: session.user.status as UserStatus,
      };
      if (roles.length && !roles.includes(req?.user?.role)) {
        return res.status(403).json({
          success: false,
          message: "Access Forbidden! You don't have permission.",
        });
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default authMiddleware;
