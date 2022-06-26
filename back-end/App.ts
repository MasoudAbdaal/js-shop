import express, { Application } from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import { Simple404 } from "./Controller/CNotFound";

import AdminRoutes from "./Routes/Admin";
import UserRoute from "./Routes/Shop";

const App: Application = express();
const ServerPort = (process.env.PORT as unknown as number) || 3000;

App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.json());

//All route which added, starts with "/admin" like "/admin/add-user"
App.use("/admin", AdminRoutes);
App.use(UserRoute);
App.use(Simple404);

App.listen(ServerPort);

console.debug("JS-Shop listening on %s port", ServerPort);
