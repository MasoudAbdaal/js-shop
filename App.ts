import express, { Application } from "express";
import { Simple404 } from "./Controller/CNotFound";

import AdminRoutes from "./Routes/Admin";
import UserRoute from "./Routes/Shop";

const App: Application = express();

App.use("/admin", AdminRoutes);
App.use(UserRoute);
App.use(Simple404);

App.listen(3000);
