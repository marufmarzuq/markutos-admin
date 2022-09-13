import React from "react";
import "./Header.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SiGoogletranslate } from "react-icons/si";
import { FiUser } from "react-icons/fi";
import { RiFullscreenLine } from "react-icons/ri";
import toggleFullscreen from "../../utils/toggleFullscreen";
import { CgMenu } from "react-icons/cg";

const Header = ({ handleSidebarToggle }) => {
  return (
    <div className="header-cotainer">
      <div className="header-left">
        <div className="mobile-menu">
          <button className="mobile-menu-btn" onClick={handleSidebarToggle}>
            <CgMenu />
          </button>
        </div>
      </div>
      <div className="header-right">
        <div className="header-circle-icon" onClick={toggleFullscreen}>
          <RiFullscreenLine />
        </div>
        <div className="header-circle-icon">
          <IoMdNotificationsOutline />
          <span className="hci-notification-dot bg-main"></span>
        </div>
        <div className="header-circle-icon">
          <SiGoogletranslate />
        </div>
        <div className="header-admin-profile">
          <div className="hap-icon">
            <FiUser />
          </div>
          <div>
            <p className="hap-greeting">Good Morning!</p>
            <p className="hap-title">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
