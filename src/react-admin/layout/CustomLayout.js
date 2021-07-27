import React from "react";
import { Layout, Sidebar } from "react-admin";
import AppBar from "./appBar/AppBar";
import Menu from "./sideBar/Menu";

const CustomSidebar = (props) => (
  <Sidebar
    {...props}
    size={200}
    style={{
      background: "#f5f8ff",
      // position: "fixed",
      // overflow: "scroll",
      // top: 0,
      // bottom: -10,
      // zIndex: 111,
    }}
  />
);

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
