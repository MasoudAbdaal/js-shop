import { FC, useEffect } from "react";
import { useRoutes, Link } from "react-router-dom";

import HOCRouter from "./Containers/HOCRouter";

const App: FC = () => {
  const Home: FC = () => {
    useEffect(() => {
      console.debug("HELLo");
    }, []);
    return <Link to="/z/new">HELLo</Link>;
  };

  const ChildHome: FC = () => {
    useEffect(() => {
      console.debug("Child Hello");
    }, []);
    return <b>HILD=HOME</b>;
  };

  const Routes = useRoutes([
    {
      path: "/",
      element: <HOCRouter element={<Home />} PageTitle="HOME" />,
      children: [
        {
          path: "home",
          element: <HOCRouter element={<ChildHome />} PageTitle="CHILD-HOME" />,
        },
        {
          path: "products",
          element: <HOCRouter element={<ChildHome />} PageTitle="CHILD-HOME" />,
        },
      ],
    },
  ]);

  return Routes;
};

export default App;
