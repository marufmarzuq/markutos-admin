import React from "react";
import "./AddGeneralProduct.css";
import CashOnDelivery from "./components/cashOnDelivery/CashOnDelivery";
import Featured from "./components/featured/Featured";
import PdfSpecification from "./components/pdfSpecification/PdfSpecification";
import ProductDescription from "./components/productDescription/ProductDescription";
import ProductImages from "./components/productImages/ProductImages";
import ProductInformation from "./components/productInformation/ProductInformation";
import ProductPriceStock from "./components/productPriceStock/ProductPriceStock";
import ProductSEO from "./components/productSEO/ProductSEO";
import ProductVideos from "./components/productVideos/ProductVideos";
import ShippingTime from "./components/shippingTime/ShippingTime";
import StockVisibility from "./components/stockVisibility/StockVisibility";
import TodaysDeal from "./components/todaysDeal/TodaysDeal";

const AddGeneralProduct = () => {
  return (
    <div className="add-product">
      <div className="add-product-widget-container">
        <div className="apw-left">
          <ProductInformation />
          <ProductImages />
          <ProductVideos />
          <ProductPriceStock />
          <ProductDescription />
          <PdfSpecification />
          <ProductSEO />
        </div>
        <div className="apw-right">
          <StockVisibility />
          <CashOnDelivery />
          <Featured />
          <TodaysDeal />
          <ShippingTime />
        </div>
      </div>
      <div className="btns-container" style={{ padding: "20px 0" }}>
        <button className="draft-btn">Save as Draft</button>
        <button className="add-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default AddGeneralProduct;
