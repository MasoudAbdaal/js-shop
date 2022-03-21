import { NextFunction, Request, Response } from "express";
import path from "path";

export const Simple404 = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, "../Views/404Page.html"));
};
