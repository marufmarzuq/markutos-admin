import React, { useState } from "react";
import TablePagination from "../../../common/tablePagination/TablePagination";
import { refunds } from "../../../utils/data";
import { HiOutlineChevronRight } from "react-icons/hi";

const RefundsRequest = () => {
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">All Requested Refunds</div>
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
            <div>Order Code</div>
            <div>Price</div>
            <div>Seller Approval</div>
            <div>Admin Approval</div>
            <div>Refund Status</div>
          </div>

          {refunds.map((refund, index) => (
            <>
              <div
                className="table-row"
                style={{
                  gridTemplateColumns: "50px 50px auto 100px 150px 150px 150px",
                }}
              >
                <div
                  className="action-column"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggle(index)}
                >
                  <HiOutlineChevronRight />
                </div>
                <div>{refund.id}</div>
                <div>{refund.refund_id}</div>
                <div>${refund.product_price}</div>
                <div>{refund.seller_approval ? "Approved" : "Pending"}</div>
                <div>{refund.admin_approval ? "Approved" : "Pending"}</div>
                <div>{refund.refund_status ? "Paid" : "Unpaid"}</div>
              </div>
              {current === index && (
                <div className="row-extra">
                  <div className="row-extra-row">
                    <div>Product Name</div>
                    <div>{refund.product_name}</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Product Image</div>
                    <div className="table-extra-img">
                      <img src={refund.product_img} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}

          <TablePagination />
        </div>
      </div>
    </div>
  );
};

export default RefundsRequest;
