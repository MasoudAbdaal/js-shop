import { Router } from "express";

import { SearchUserController } from "../Controller/CSearchUser";
import { AddUser } from "../Controller/CShop";

const UserRoute = Router();

UserRoute.get("/", AddUser);

UserRoute.get("/users/:id", SearchUserController);

export default UserRoute;
