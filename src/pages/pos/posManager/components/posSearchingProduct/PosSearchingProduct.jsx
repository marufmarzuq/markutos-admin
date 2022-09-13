import React from "react";
import "./PosSearchingProduct.css";
import Select from "react-select";
import { products } from "../../../../../utils/data";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const PosSearchingProduct = () => {
  return (
    <div className="pos-searching-prod">
      <div className="pos-searching-header">
        <input
          type="text"
          className="prod-search-input"
          placeholder="Search by product name"
        />
        <div className="pos-searching-filter-container">
          <Select options={options} placeholder="All Categories" />
          <Select options={options} placeholder="All Brands" />
        </div>
      </div>
      <div className="pos-searching-products-container">
        {products.map((prod) => (
          <div className="single-psp">
            <div className="single-psp-img">
              <img src={prod.img} alt="" />
            </div>

            <div className="single-psp-title">{prod.name}</div>
            <span className="single-psp-price">$ {prod.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosSearchingProduct;
