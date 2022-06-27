import { FC } from "react";
import { Outlet } from "react-router";

import { IHOCProps } from "../Interfaces/Index";

const HOCRouter: FC<IHOCProps> = (props) => {
  return (
    <>
      {props.element}
      <Outlet />;
    </>
  );
};

export default HOCRouter;
