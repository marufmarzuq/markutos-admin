import React, { useState } from "react";
import { coupons } from "../../../utils/data";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import AddCouponModal from "./AddCouponModal";
import RippleButton from "../../../common/ui/rippleButton";
import { AiOutlinePlus } from "react-icons/ai";

const Coupon = () => {
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="single-widget">
      <div className="table-top-header">
        <div className="table-title">All Coupons</div>
        <div className="table-filt">
          <RippleButton
            style={{ height: "40px" }}
            onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus style={{ fontSize: "18px" }} />
            <span>Add New Coupon</span>
          </RippleButton>
        </div>
      </div>
      <div className="widget-container">
        <div
          className="table-header"
          style={{ gridTemplateColumns: "50px 50px 1fr 1fr 100px 100px" }}
        >
          <div></div>
          <div>#</div>
          <div>Coupon Code</div>
          <div>Type</div>
          <div>Active</div>
          <div className="text-center">Actions</div>
        </div>
        <div>
          {coupons.map((coupon, index) => (
            <>
              <div
                className="table-row"
                style={{
                  gridTemplateColumns: "50px 50px 1fr 1fr 100px 100px",
                }}
              >
                <div
                  className="action-column"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggle(index)}
                >
                  <HiOutlineChevronRight />
                </div>
                <div>{coupon.id}</div>
                <div>{coupon.name}</div>
                <div>{coupon.coupon_type}</div>
                <label class="confi-switch">
                  <input type="checkbox" defaultChecked={coupon.active} />
                  <span class="slider round"></span>
                </label>
                <div className="action-column">
                  <button className="table-btn tb-edit">
                    <FiEdit />
                  </button>
                  <button title="Delete" className="table-btn tb-delete">
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              {current === index && (
                <div className="row-extra">
                  <div className="row-extra-row">
                    <div>Start Date</div>
                    <div>{coupon.start_date}</div>
                  </div>
                  <div className="row-extra-row">
                    <div>End Date</div>
                    <div>{coupon.end_date}</div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <AddCouponModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Coupon;
