import React, { useState } from "react";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ProductInfoForm = () => {
  const [tags, setTags] = useState(["example tag"]);
  console.log(tags);
  return (
    <div className="single-widget">
      <div className="widget-title">Product Information</div>
      <div className="widget-container">
        <div className="product-informaiton-form">
          <label htmlFor="product__name">
            <span>Product Name</span>
            <i>*</i>
          </label>
          <input id="product__name" type="text" />
          <label htmlFor="product__category">
            <span>Category</span>
            <i>*</i>
          </label>
          <Select options={options} placeholder="All Categories" />
          <label htmlFor="product__name">
            <span>Product File</span>
            <i>*</i>
          </label>
          <div className="custom-browse">
            <div>Browse</div>
            <div>Choose File</div>
          </div>
          <label>
            <span>Tags</span>
            <i>*</i>
          </label>
          <ReactTagInput
            tags={tags}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoForm;
