import React from "react";
import "./CashOnDelivery.css";

const CashOnDelivery = () => {
  return (
    <div className="single-widget">
      <div className="widget-title">Cash On Delivery</div>
      <div className="widget-container">
        <div className="add-product-toggles-container">
          <span>Status</span>
          <label class="confi-switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CashOnDelivery;
