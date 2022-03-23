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
  const Status =
    User.AddUser(req.body) || "Sth went wrong while adding your user";

  return res.send(Status);

  //TODO: If craete user has been successfull, redirect to succeed page
  // res.redirect("/");
};

export { AddUserController };
