import React, { useState } from "react";
import { payouts } from "../../../utils/data";
import { HiOutlineChevronRight } from "react-icons/hi";

const Payouts = () => {
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">Seller Payments</div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{
              gridTemplateColumns: "50px 50px auto 150px 150px",
            }}
          >
            <div></div>
            <div>#</div>
            <div>Name</div>
            <div>Shop Name</div>
            <div className="text-center">Amount</div>
          </div>

          {payouts.map((payout, index) => (
            <>
              <div
                className="table-row"
                style={{
                  gridTemplateColumns: "50px 50px auto 150px 150px",
                }}
              >
                <div
                  className="action-column"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggle(index)}
                >
                  <HiOutlineChevronRight />
                </div>
                <div>{payout.id}</div>
                <div>{payout.name}</div>
                <div>{payout.shop_name}</div>
                <div className="text-center">$ {payout.amount}</div>
              </div>
              {current === index && (
                <div className="row-extra">
                  <div className="row-extra-row">
                    <div>Date</div>
                    <div>{payout.date}</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Payment Details</div>
                    <div>{payout.payment_details}</div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payouts;
