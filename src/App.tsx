import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "./assets/styles/layout.css";

const { Header, Sider, Content, Footer } = Layout;

const ListComp: React.FC = () => {
  return (
    <>
      {Array.from(Array(100)).map((item, index) => {
        return <div>Tes {index}</div>;
      })}
    </>
  );
};

const App: React.FC = () => {
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
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                background: colorBgContainer,
                height: 100,
                flex: 1,
                margin: "24px 16px 0px 16px",
              }}
            >
              <ListComp />
              {/* This from router children */}
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

export default App;
