import express, { Application } from "express";
import { Simple404 } from "./Controller/CNotFound";

import AdminRoutes from "./Routes/Admin";
import UserRoute from "./Routes/Shop";

const App: Application = express();
const ServerPort = 3000;

//All route which added, starts with "/admin" like "/admin/add-user"
App.use("/admin", AdminRoutes);

App.use(UserRoute);

App.use(Simple404);

App.listen(ServerPort);

console.debug("JS-Shop listening on %s port", ServerPort);
