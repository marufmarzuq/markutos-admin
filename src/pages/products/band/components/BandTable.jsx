import React from "react";
import { bands } from "../../../../utils/data";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TablePagination from "../../../../common/tablePagination/TablePagination";

const BandTable = () => {
  return (
    <div className="single-widget">
      <div className="widget-title">All Bands</div>
      <div className="widget-container">
        <div
          className="table-header"
          style={{ gridTemplateColumns: "50px 150px auto 100px" }}
        >
          <div className="text-center">#</div>
          <div>Name</div>
          <div>Band Image</div>
          <div className="text-center">Actions</div>
        </div>
        <div>
          {bands.map((attribute, index) => (
            <>
              <div
                className="table-row"
                style={{ gridTemplateColumns: "50px 150px auto 100px" }}
              >
                <div className="action-column">{attribute.id}</div>
                <div>{attribute.name}</div>
                <div className="table-img">
                  <img src={attribute.img} alt="" />
                </div>
                <div className="action-column">
                  <button title="Edit" className="table-btn tb-edit">
                    <FiEdit />
                  </button>
                  <button title="Delete" className="table-btn tb-delete">
                    <RiDeleteBin6Line />
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

export default BandTable;
