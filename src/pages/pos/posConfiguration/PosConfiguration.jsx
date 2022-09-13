import React from "react";
import "./PosConfiguration.css";

const PosConfiguration = () => {
  return (
    <div className="pos-configuration">
      <div className="pos-activation-widget">
        <h3 className="confi-widget-title">POS Activation for Seller</h3>
        <div className="confi-widget-body">
          <label class="confi-switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PosConfiguration;
