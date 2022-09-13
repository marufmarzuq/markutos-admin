import React from "react";
import Modal from "../../../../common/modal";
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

const EditGeneralProdModal = ({ open, setOpen }) => {
  return (
    <Modal
      title="Edit General Product"
      buttons={<button className="add-btn">Update Product</button>}
      open={open}
      maxWidth="1100px"
      onClose={() => setOpen((pre) => !pre)}
    >
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
      </div>
    </Modal>
  );
};

export default EditGeneralProdModal;
