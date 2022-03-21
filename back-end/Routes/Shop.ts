import { Router } from "express";

import { AddUser } from "../Controller/CShop";

const UserRoute = Router();

UserRoute.get("/", AddUser);


export default UserRoute;
