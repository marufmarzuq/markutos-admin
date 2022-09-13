import React from "react";
import "./Sidebar.css";
import assets from "../../assets";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={assets.logo} alt="" />
      </div>
      <div className="scrollable-sidebar-container">
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
