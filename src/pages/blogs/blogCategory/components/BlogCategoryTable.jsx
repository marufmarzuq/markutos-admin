import React from "react";
import { attributes } from "../../../../utils/data";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const BlogCategoryTable = () => {
  return (
    <div className="single-widget">
      <div className="widget-title">All Blog Categories</div>
      <div className="widget-container">
        <div
          className="table-header"
          style={{ gridTemplateColumns: "50px auto 100px" }}
        >
          <div className="text-center">#</div>
          <div>Name</div>
          <div className="text-center">Actions</div>
        </div>
        <div>
          {attributes.map((attribute, index) => (
            <>
              <div
                className="table-row"
                style={{ gridTemplateColumns: "50px auto 100px" }}
              >
                <div className="text-center">{attribute.id}</div>
                <div>{attribute.name}</div>
                <div className="action-column">
                  <button className="table-btn tb-edit">
                    <FiEdit />
                  </button>
                  <button className="table-btn tb-delete">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryTable;
