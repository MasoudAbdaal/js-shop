import { Router } from "express";

import { AddUserController } from "../Controller/CAdmin";

const AdminRoutes = Router();

AdminRoutes.post("/add-user", AddUserController);

export default AdminRoutes;
