import { NextFunction, Request, Response } from "express";
import path from "path";

export const AddUser = (_: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "../Views/AddUser.html"));
};
