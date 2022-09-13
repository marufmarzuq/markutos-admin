import React from "react";
import "./PosManager.css";
import PosRightWidget from "./components/posRightWidget/PosRightWidget";
import PosSearchingProduct from "./components/posSearchingProduct/PosSearchingProduct";

const PosManager = () => {
  return (
    <div className="pos-manager">
      <PosSearchingProduct />
      <PosRightWidget />
    </div>
  );
};

export default PosManager;
