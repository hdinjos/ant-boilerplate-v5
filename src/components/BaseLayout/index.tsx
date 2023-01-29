import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "assets/styles/layout.css";

const { Header, Sider, Content, Footer } = Layout;

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 10px",
          }}
        >
          <h2>Brand Name</h2>
          <h2>Log Out</h2>
        </div>
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            style={{
              padding: "10px 5px",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid white",
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
                children: [
                  {
                    key: "21",
                    label: "Option 1",
                  },
                  {
                    key: "22",
                    label: "Option 2",
                  },
                ],
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Content>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100%",
              margin: 0,
            }}
          >
            <div
              style={{
                flex: 1,
                margin: "24px 16px 0px 16px",
              }}
            >
              <Outlet />
            </div>
            <Footer
              style={{
                textAlign: "center",
                background: colorBgContainer,
                marginTop: 20,
              }}
            >
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;