import { FC, lazy } from "react";
import { useRoutes, RouteObject } from "react-router-dom";

import HOCRouter from "./HOC/HOCRouter";
import HOCLayout from "./HOC/HOCLayout";

const Home = lazy(() => import("./Components/Home"));
const Products = lazy(() => import("./Components/Products"));
const Admin = lazy(() => import("./Components/Dashboard/Admin"));
const User = lazy(() => import("./Components/Dashboard/User"));

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <HOCRouter element={<HOCLayout />} PageTitle="Js Shop" />,
    children: [
      {
        path: "home",
        element: <HOCRouter element={<Home />} PageTitle="Home" />,
      },
      {
        path: "products",
        element: <HOCRouter element={<Products />} PageTitle="Products" />,
      },
      {
        path: "user",
        element: <HOCRouter element={<User />} PageTitle="My Profile" />,
      },
      {
        path: "admin",
        element: <HOCRouter element={<Admin />} PageTitle="Admin Dashboard" />,
      },
    ],
  },
];
const App: FC = () => {
  return useRoutes(Routes);
};

export default App;
