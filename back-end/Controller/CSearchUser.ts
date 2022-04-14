import { NextFunction, Request, Response } from "express";

import UsersList from "../Models/MUsers";

const SearchUserController = (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const Users = new UsersList();
  if (req.params.id == "all") {
    return res.json(Users.GetAllUsers());
  } else {
    return res.json(Users.FetchUser(req.params.id));
  }
};

export default SearchUserController;
