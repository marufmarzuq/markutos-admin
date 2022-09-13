import React from "react";
import Select from "react-select";
import Modal from "../../../common/modal";

const AddCouponModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      open={openModal}
      title={"Add Coupon Information"}
      onClose={() => setOpenModal(false)}
      maxWidth={"1050px"}
      buttons={
        <button className="add-btn" onClick={() => setOpenModal(false)}>
          Add Coupon
        </button>
      }
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
        <div className="widget-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px auto",
              gap: "15px",
            }}
          >
            <label htmlFor="coupon-name">Coupon code</label>
            <input type="text" id="coupon-name" />
            <label>Coupon Type</label>
            <Select placeholder="" />
            <label htmlFor="select-prods">Products</label>
            <input type="text" id="select-prods" />
            <label htmlFor="str-date">Start Date</label>
            <input type="date" id="str-date" />
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCouponModal;
