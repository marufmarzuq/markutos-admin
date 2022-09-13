import React, { useState } from "react";
import TablePagination from "../../../common/tablePagination/TablePagination";
import { sellers } from "../../../utils/data";
import { HiOutlineChevronRight } from "react-icons/hi";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AllSellers = () => {
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">All Sellers</div>
          <div className="table-filters">
            <Select options={options} placeholder="Filter by approval" />
            <input
              type="text"
              className="table-search-input"
              placeholder="Search seller by name"
            />
          </div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{
              gridTemplateColumns: "50px 50px auto 100px 150px",
            }}
          >
            <div></div>
            <div>#</div>
            <div>Name</div>
            <div>Verified</div>
            <div className="text-center">Due To Seller</div>
          </div>

          {sellers.map((seller, index) => (
            <>
              <div
                className="table-row"
                style={{
                  gridTemplateColumns: "50px 50px auto 100px 150px",
                }}
              >
                <div
                  className="action-column"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggle(index)}
                >
                  <HiOutlineChevronRight />
                </div>
                <div>{seller.id}</div>
                <div>{seller.name}</div>
                <label class="confi-switch">
                  <input type="checkbox" defaultChecked={seller.verified} />
                  <span class="slider round"></span>
                </label>
                <div className="text-center">$ {seller.due_to_seller}</div>
              </div>
              {current === index && (
                <div className="row-extra">
                  <div className="row-extra-row">
                    <div>Phone</div>
                    <div>{seller.phone}</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Email</div>
                    <div>{seller.email}</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Total Products</div>
                    <div>{seller.total_products}</div>
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

export default AllSellers;
