import React from "react";
import { subscribers } from "../../../utils/data";
import { RiDeleteBinLine } from "react-icons/ri";
import TablePagination from "../../../common/tablePagination/TablePagination";

const Subscribers = () => {
  return (
    <div className="single-widget">
      <div className="table-top-header">
        <div className="table-title">All Subscribers</div>
        <div className="table-filters">
          <input
            type="text"
            className="table-search-input"
            placeholder="Search by email"
          />
        </div>
      </div>
      <div className="widget-container">
        <div
          className="table-header"
          style={{ gridTemplateColumns: "50px 1fr 1fr 100px" }}
        >
          <div className="text-center">#</div>
          <div>Email</div>
          <div>Date</div>
          <div className="text-center">Option</div>
        </div>
        <div>
          {subscribers.map((subscriber, index) => (
            <>
              <div
                className="table-row"
                style={{ gridTemplateColumns: "50px 1fr 1fr 100px" }}
              >
                <div className="text-center">{subscriber.id}</div>
                <div>{subscriber.email}</div>
                <div>{subscriber.date}</div>
                <div className="action-column">
                  <button title="Delete" className="table-btn tb-delete">
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export default Subscribers;
