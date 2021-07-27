import React from "react";
import { Layout, Sidebar } from "react-admin";
import AppBar from "./appBar/AppBar";
import Menu from "./sideBar/Menu";

const CustomSidebar = (props) => <Sidebar {...props} size={200} />;

const CustomLayout = (props) => {
  return (
    <Layout
      {...props}
      appBar={AppBar}
      sidebar={CustomSidebar}
      menu={Menu}
      style={{ background: "#fff" }}
    />
  );
};

export default CustomLayout;
