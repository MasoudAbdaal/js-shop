import { FC, Suspense } from "react";

import { Layout } from "antd";
import { Outlet } from "react-router";

import "../Styles/layout.scss";

const HOCLayout: FC = (props) => {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Content>
          <Suspense fallback={<>Loading</>}>
            <Outlet />
          </Suspense>
        </Content>
        <Sider>
          <b>Sider</b>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default HOCLayout;
