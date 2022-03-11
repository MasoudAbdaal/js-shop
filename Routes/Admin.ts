import { Request, Router } from "express";
import bodyParser from "body-parser";
import { AddUserController } from "../Controller/CAdmin";

const AdminRoutes = Router();

AdminRoutes.use(bodyParser.urlencoded({ extended: true }));

AdminRoutes.post("/add-user", AddUserController);

export default AdminRoutes;
