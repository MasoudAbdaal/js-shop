import { FC, ReactElement } from "react";
import { Outlet } from "react-router";

import { IHOCProps } from "../Interfaces/Index";

import HOCLayout from "./HOCLayout";

const HOCRouter: FC<IHOCProps> = (props) => {
  document.title = props.PageTitle;
  return props.element as ReactElement;
};

export default HOCRouter;
