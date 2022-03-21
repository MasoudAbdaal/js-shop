import { NextFunction, Response } from "express";

import UserList from "../Models/MUsers";

import IUserEntity from "../Interfaces/IUserEntity";
import CustomReq from "../Interfaces/CustomReq";

const AddUserController = (
  req: CustomReq<IUserEntity>,
  res: Response,
  next: NextFunction
) => {
  const User = new UserList();
  User.AddUser(req.body);
  res.redirect("/");
};

export { AddUserController };
