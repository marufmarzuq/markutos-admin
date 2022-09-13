import React from "react";
import Modal from "../../../../common/modal";
import DescForm from "./components/DescForm/DescForm";
import ImagesForm from "./components/imagesForm/ImagesForm";
import MetaForm from "./components/metaForm/MetaForm";
import PriceForm from "./components/priceForm/PriceForm";
import ProductInfoForm from "./components/productInfoForm/ProductInfoForm";

const EditDigitalProdModal = ({ open, setOpen }) => {
  return (
    <Modal
      title="Edit Digital Product"
      buttons={<button className="add-btn">Update Product</button>}
      open={open}
      onClose={() => setOpen((pre) => !pre)}
      maxWidth="900px"
    >
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
      </div>
    </Modal>
  );
};

export default EditDigitalProdModal;
