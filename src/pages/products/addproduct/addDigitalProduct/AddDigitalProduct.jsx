import React from "react";
import DescForm from "./components/DescForm/DescForm";
import ImagesForm from "./components/imagesForm/ImagesForm";
import MetaForm from "./components/metaForm/MetaForm";
import PriceForm from "./components/priceForm/PriceForm";
import ProductInfoForm from "./components/productInfoForm/ProductInfoForm";

const AddDigitalProduct = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <ProductInfoForm />
      <ImagesForm />
      <PriceForm />
      <DescForm />
      <MetaForm />
      <div className="btns-container" style={{ padding: "0 0 20px" }}>
        <button className="draft-btn">Save as Draft</button>
        <button className="add-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default AddDigitalProduct;
