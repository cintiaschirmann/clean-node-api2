import { Request, Response, NextFunction } from "express";
export const cors = (): any => {
  return (req: Request, res: Response, next: NextFunction): void => {
    res.set("access-control-allow-origin", "*");
    res.set("access-control-allow-headers", "*");
    res.set("access-control-allow-methods", "GET, POST, PUT, DELETE, PATCH");

    next();
  };
};
