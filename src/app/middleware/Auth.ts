import { NextFunction, Request, Response } from "express";

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction,
  ) => {
    try {
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
