import { FC, Suspense } from "react";

import { Layout } from "antd";
import { Outlet } from "react-router";

import { Box } from "@mui/system";
import { Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { SiTrustedshops } from "react-icons/si";

import "../Styles/layout.scss";

const HOCLayout: FC = (props) => {
  const { Header, Sider, Content } = Layout;

  const tempMenuItems = ["Home", "Products", "Admin Dashboard", "My Profile"];

  return (
    <Layout>
      <Header className="layout-header">
        <Toolbar disableGutters>
          <SiTrustedshops className="layout-icon" size="32" />
          <Typography
            noWrap
            component="a"
            variant="h4"
            href="/home"
            sx={{ mx: "8px", textDecoration: "none", color: "white" }}
          >
            JS Shop
          </Typography>

          <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
            {tempMenuItems.map((item) => (
              <Button
                key={`${"layout-menu" + item}`}
                sx={{ mx: "8px", color: "white", display: "block" }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu open>
              {tempMenuItems.map((item) => (
                <MenuItem>
                  <Typography>{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
        </Toolbar>
      </Header>
      <Layout>
        <Content>
          <Suspense fallback={<>Loading</>}>
            <Outlet />
          </Suspense>
        </Content>
        <Sider></Sider>
      </Layout>
    </Layout>
  );
};

export default HOCLayout;
