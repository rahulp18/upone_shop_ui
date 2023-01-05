import React from "react";
import BottomNavBar from "./BottomNavBar";

const Layout = ({ children, select }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <BottomNavBar select={select} />
    </div>
  );
};

export default Layout;
