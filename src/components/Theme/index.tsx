import { FC, PropsWithChildren } from "react";
import { ConfigProvider } from "antd";

const Theme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Theme;
