import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../common/header/Header";
import Sidebar from "../../../common/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../../utils/manageLocalStorage";
import "./BaseLayout.css";

const BaseLayout = () => {
  const { pathname } = useLocation();
  const firstPath = pathname.split("/")[1];
  const secondPath = pathname.split("/")[2];
  const thirdPath = pathname.split("/")[3];
  const fourthPath = pathname.split("/")[4];
  const localStorage = loadFromLocalStorage();
  const [active, setActive] = useState(
    localStorage?.["sidebar-active"] !== undefined
      ? localStorage?.["sidebar-active"]
      : false
  );

  const handleSidebarToggle = () => {
    if (!active) {
      setActive(true);
      saveToLocalStorage("sidebar-active", true);
    } else {
      setActive(false);
      saveToLocalStorage("sidebar-active", false);
    }
  };

  useEffect(() => {
    setActive(false);
    saveToLocalStorage("sidebar-active", false);
  }, [firstPath, secondPath, thirdPath, fourthPath]);

  return (
    <div className="base-layout">
      {active && <div className="overlay" onClick={handleSidebarToggle}></div>}
      <aside className={`sidebar ${active}`}>
        <Sidebar />
      </aside>
      <div className="main-content">
        <header className="main-header">
          <Header handleSidebarToggle={handleSidebarToggle} />
        </header>
        <div className="page-container">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
