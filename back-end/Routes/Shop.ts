import { Router } from "express";

import SearchUserController from "../Controller/CSearchUser";
import EditUserController from "../Controller/CEditUser";
import AddUser from "../Controller/CShop";

const UserRoute = Router();

UserRoute.get("/", AddUser);

UserRoute.get("/users/:id", SearchUserController);
UserRoute.post("/users/edit", EditUserController);

export default UserRoute;
