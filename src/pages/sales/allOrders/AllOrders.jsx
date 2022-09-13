import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import Select from "react-select";
import "./AllOrders.css";
import { orders } from "../../../utils/data";

const DateFilterOptions = [
  { value: "Today", label: "Today" },
  { value: "Yesterday", label: "Yesterday" },
  { value: "Last 7 days", label: "Last 7 days" },
  { value: "Last 30 days", label: "Last 30 days" },
  { value: "This Month", label: "This Month" },
  { value: "Last Month", label: "Last Month" },
  { value: "Custom Range", label: "Custom Range" },
];
const deliveryFilterOptions = [
  { value: "Pending", label: "Pending" },
  { value: "Confirmed", label: "Confirmed" },
  { value: "On delivery", label: "On delivery" },
  { value: "Delivered", label: "Delivered" },
  { value: "Canceled", label: "Canceled" },
];

const AllOrders = () => {
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">All Orders</div>
          <div className="table-filters">
            <input
              type="text"
              className="table-search-input"
              placeholder="Type order code"
            />
            <Select options={DateFilterOptions} placeholder="Filter by date" />
            <Select
              options={deliveryFilterOptions}
              placeholder="Delivery Status"
            />
          </div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{
              gridTemplateColumns: "50px 50px auto 100px 150px 150px 150px",
            }}
          >
            <div></div>
            <div>#</div>
            <div>Order Id</div>
            <div>Amount</div>
            <div>Delivery Status</div>
            <div>Payment Status</div>
            <div className="text-center">Options</div>
          </div>
          <div>
            {orders.map((order, index) => (
              <>
                <div
                  className="table-row"
                  style={{
                    gridTemplateColumns:
                      "50px 50px auto 100px 150px 150px 150px",
                  }}
                >
                  <div
                    className="action-column"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggle(index)}
                  >
                    <HiOutlineChevronRight />
                  </div>
                  <div>{order.id}</div>
                  <div>{order.order_id}</div>
                  <div>$ {order.amount}</div>
                  <div>
                    {order.delivery_status === 1
                      ? "Pending"
                      : order.delivery_status === 2
                      ? "Confirmed"
                      : order.delivery_status === 3
                      ? "On delivery"
                      : order.delivery_status === 4
                      ? "Delivered"
                      : "Canceled"}
                  </div>
                  <div>{order.payment_status ? "Paid" : "Unpaid"}</div>
                  <div className="action-column">
                    <button title="Delete" className="table-btn tb-delete">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
                {current === index && (
                  <div className="row-extra">
                    <div className="row-extra-row">
                      <div>Customer</div>
                      <div>{order.customer_name}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Num of Products</div>
                      <div>{order.quantity}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Pay method</div>
                      <div>{order.payment_method}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Refund</div>
                      <div>{order.refund ? order.refund : "No"} refunded</div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
