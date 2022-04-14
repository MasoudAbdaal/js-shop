import { NextFunction, Request, Response } from "express";
import IUserEntity from "../Interfaces/IUserEntity";

import UsersList from "../Models/MUsers";

const EditUserController = (
  //TODO: fix response body type, it should not be any!
  req: Request<any, any, IUserEntity>,
  res: Response,
  next: NextFunction
) => {
  const Users = new UsersList();
  //TODO: undifenied request body resolve!
  console.debug(req.body);
  const EditedUser = Users.EditUser(req.body);

  if (EditedUser.ID && EditedUser.ID !== "") {
    return res.json({
      Code: 200,
      Message:
        "User with ID: " + req.params.id + " has been edited successfully",
      EditResult: EditedUser,
    });
  } else {
    return res.json({
      Code: "400",
      Message: "Edit operation couldn't be complete!",
    });
  }
};

export default EditUserController;
