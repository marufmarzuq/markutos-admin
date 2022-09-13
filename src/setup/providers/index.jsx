import React from "react";
import { BrowserRouter } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../style/global.css";

const AppProviders = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProviders;
