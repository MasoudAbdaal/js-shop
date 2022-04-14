import { NextFunction, Request, Response } from "express";
import path from "path";

const AddUser = (_: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "../Views/AddUser.html"));
};

export default AddUser;
