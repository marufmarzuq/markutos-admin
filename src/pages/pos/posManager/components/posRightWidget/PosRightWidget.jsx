import React from "react";
import "./PosRightWidget.css";
import Select from "react-select";
import { GrDeliver } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsChevronUp } from "react-icons/bs";
import { products } from "../../../../../utils/data";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const PosRightWidget = () => {
  return (
    <div className="pos-right-widget">
      <div className="prw-customer-address-container">
        <Select options={options} placeholder="Walk in customer" />
        <button className="prw-customer-address-btn">
          <GrDeliver />
        </button>
      </div>
      <div className="prw-products-table">
        <div className="prw-products-table-header">
          <div>Product</div>
          <div>QTY</div>
          <div>Price</div>
          <div>Subtotal</div>
          <div>Remove</div>
        </div>
        <div className="prw-products-table-body">
          {products.map((prod) => (
            <div className="prw-products-table-single-row">
              <div className="prw-product-table-img-name">
                <div className="prw-product-table-img">
                  <img src={prod.img} alt="" />
                </div>
                <div className="prw-product-table-title">{prod.name}</div>
              </div>
              <div className="prw-table-qty">
                <input type="number" min={1} defaultValue={1} />
              </div>
              <div>$ {prod.price}</div>
              <div>$ {prod.price}</div>
              <div className="prw-table-remove">
                <RiDeleteBin6Line />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="prw-overview-table">
        <div className="prw-overview-head">
          <div>Sub Total</div>
          <div>Total Tax</div>
          <div>Total Shipping </div>
          <div>Discount</div>
          <div>Total</div>
        </div>
        <div className="prw-overveiw-body">
          <div>$350.000</div>
          <div>$0.000</div>
          <div>$0.000</div>
          <div>$0.000</div>
          <div>$350.000</div>
        </div>
      </div>
      <div className="prw-action-btns">
        <div className="prw-action-btns-left">
          <button className="prw-shipping-btn">
            Shipping <BsChevronUp />
          </button>
          <button className="prw-discount-btn">
            Discount <BsChevronUp />
          </button>
        </div>
        <div className="prw-action-btns-right">
          <button className="prw-pay-btn bg-main">Pay With Cash</button>
        </div>
      </div>
    </div>
  );
};

export default PosRightWidget;
