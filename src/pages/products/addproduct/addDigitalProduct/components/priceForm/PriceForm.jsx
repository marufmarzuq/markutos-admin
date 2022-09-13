import React from "react";
import Select from "react-select";

const PriceForm = () => {
  const discountOptions = [
    { value: "flat", label: "Flat" },
    { value: "percent", label: "Percent" },
  ];
  return (
    <div className="single-widget">
      <div className="widget-title">Product Price</div>
      <div className="widget-container">
        <div className="ap-single-content">
          <p>Unit price </p>
          <input type="number" min={0} defaultValue={0} />
        </div>
        <div className="ap-single-content">
          <p>Purchase price</p>
          <input type="number" min={0} defaultValue={0} />
        </div>
        <div className="ap-single-content">
          <p>Discount type</p>
          <Select options={discountOptions} />
        </div>
        <div className="ap-single-content">
          <p>Discount</p>
          <input type="number" min={0} defaultValue={0} />
        </div>
      </div>
    </div>
  );
};

export default PriceForm;
