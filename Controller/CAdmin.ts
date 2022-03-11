import { NextFunction, Response, Request } from "express";

import UserList from "../Models/MUsers";

interface IUserPassword extends Object {
  UserName: string;
  Password: string;
}

interface CustomReq<T> extends Request {
  body: T;
}

const AddUserController = (
  req: CustomReq<IUserPassword>,
  res: Response,
  next: NextFunction
) => {
  const User = new UserList();
  User.AddUser(req.body);
  res.redirect("/");
};

export { IUserPassword, AddUserController };
