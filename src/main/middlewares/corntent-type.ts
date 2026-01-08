import { Request, Response, NextFunction } from "express";
export const contentType = (): any => {
  return (req: Request, res: Response, next: NextFunction): void => {
    res.type("json");

    next();
  };
};
