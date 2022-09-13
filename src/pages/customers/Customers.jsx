import React, { useState } from "react";
import "./Customers.css";
import { customers } from "../../utils/data";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiUserUnfollowLine } from "react-icons/ri";

const Customers = () => {
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">All Customers</div>
          <div className="table-filters">
            <input
              type="text"
              placeholder="Search Customers by Name"
              className="table-search-input"
            />
          </div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{ gridTemplateColumns: "50px 50px 1fr 1fr 100px" }}
          >
            <div></div>
            <div>#</div>
            <div>Name</div>
            <div>Phone</div>
            <div className="text-center">Actions</div>
          </div>
          <div>
            {customers.map((customer, index) => (
              <>
                <div
                  className="table-row"
                  style={{ gridTemplateColumns: "50px 50px 1fr 1fr 100px" }}
                >
                  <div
                    className="action-column"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggle(index)}
                  >
                    <HiOutlineChevronRight />
                  </div>
                  <div>{customer.id}</div>
                  <div>{customer.name}</div>
                  <div>{customer.phone}</div>
                  <div className="action-column">
                    <button className="table-btn tb-delete">
                      <RiUserUnfollowLine />
                    </button>
                  </div>
                </div>
                {current === index && (
                  <div className="row-extra">
                    <div className="row-extra-row">
                      <div>Email</div>
                      <div>{customer.email}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Package</div>
                      <div>{customer.package}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Wallet Balance</div>
                      <div>{customer.wallet_balance}</div>
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

export default Customers;
