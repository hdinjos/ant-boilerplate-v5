import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openSub, setOpenSub] = useState<any>([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSelectMenu = ({ key }: any) => {
    navigate(key);
  };

  const handleSubMenu = (e: any) => {
    setOpenSub(e);
  };

  const items = [
    {
      key: "/",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "/menu2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
      children: [
        {
          key: "/menu2-1",
          label: "Option 1",
        },
        {
          key: "/menu2-2",
          label: "Option 2",
        },
      ],
    },
    {
      key: "/menu3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];

  useEffect(() => {
    const foundChild = items
      .map((item, index) => ({
        ...item,
        children: item.children,
        index,
      }))
      .filter((item) => item.children);

    const foundSameKey = foundChild
      .map((item) => {
        return {
          index: item.index,
          find: item?.children?.filter((item) => item.key === pathname),
        };
      })
      .find((item) => item?.find?.length !== 0);

    const finalKey = foundSameKey ? items[foundSameKey.index] : { key: "" };
    setOpenSub([finalKey.key]);
  }, []);

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
            openKeys={openSub}
            selectedKeys={[pathname]}
            items={items}
            onOpenChange={handleSubMenu}
            onSelect={handleSelectMenu}
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
