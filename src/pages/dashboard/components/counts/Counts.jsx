import React from "react";
import "./Counts.css";
import { TbUsers } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbArrowDownRight, TbArrowUpRight } from "react-icons/tb";
const Counts = () => {
  return (
    <div className="count-boxes">
      <div className="single-widget">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="count-box-title">TOTAL EARNINGS</div>
            <div className="count-box-value">$3,755</div>
          </div>
          <div className="count-box-icon">
            <FiDollarSign />
          </div>
        </div>
        <div className="count-box-footer">
          <div className="percentage-show" style={{ color: "red" }}>
            <TbArrowDownRight /> <span>-10.12 %</span>
          </div>
          <p>Compared to July 2022</p>
        </div>
      </div>

      <div className="single-widget">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="count-box-title">Total Orders</div>
            <div className="count-box-value">653</div>
          </div>
          <div className="count-box-icon">
            <HiOutlineShoppingBag />
          </div>
        </div>
        <div className="count-box-footer">
          <div className="percentage-show" style={{ color: "red" }}>
            <TbArrowDownRight /> <span>-16.24 %</span>
          </div>
          <p>Compared to July 2022</p>
        </div>
      </div>
      <div className="single-widget">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="count-box-title">Total sells</div>
            <div className="count-box-value">$10,755</div>
          </div>
          <div className="count-box-icon">
            <FiDollarSign />
          </div>
        </div>
        <div className="count-box-footer">
          <div className="percentage-show" style={{ color: "red" }}>
            <TbArrowDownRight /> <span>-7.21 %</span>
          </div>
          <p>Compared to July 2022</p>
        </div>
      </div>
      <div className="single-widget">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="count-box-title">CUSTOMERS</div>
            <div className="count-box-value">315</div>
          </div>
          <div className="count-box-icon">
            <TbUsers />
          </div>
        </div>
        <div className="count-box-footer">
          <div className="percentage-show" style={{ color: "#00db00" }}>
            <TbArrowUpRight /> <span>+5.44%</span>
          </div>
          <p>Compared to July 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Counts;
