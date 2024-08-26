import { Layout } from "antd";
import { useAuth } from "../../context/AuthContext";
import MobileSideBar from "./MobileSideBar";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { useState } from "react";
import { calc } from "antd/es/theme/internal";

const { Content } = Layout;

const Dashboard = ({ children }) => {
  const { collapsed, colorBgContainer, borderRadiusLG } = useAuth();

  return (
    <Layout>
      <div className="hidden md:block">
        <SideBar />
      </div>

      <div className="block md:hidden">
        <MobileSideBar />
      </div>

      <Layout
      // className={`${!collapsed ? "ml-0" : "ml-0"} ${
      //  !collapsed ? "md:ml-[80px]" : "md:ml-[200px]"
      // } `}
      >
        <TopBar />
        <Content
          style={{
            // margin: "90px 16px 18px 16px",
            margin: "90px 16px 18px 16px",
            minHeight: calc("100vh" + "90px"),
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="shadow-md"
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
