import React, { useState } from "react";
import { categories } from "../../../../utils/data";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import TablePagination from "../../../../common/tablePagination/TablePagination";

const CategoryTable = () => {
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="single-widget">
      <div className="table-top-header">
        <div className="table-title">All Categories</div>
      </div>
      <div className="widget-container">
        <div
          className="table-header"
          style={{ gridTemplateColumns: "50px 50px auto 100px 120px" }}
        >
          <div></div>
          <div>#</div>
          <div>Name</div>
          <div>Banner</div>
          <div className="text-center">Options</div>
        </div>
        <div>
          {categories.map((category, index) => (
            <>
              <div
                className="table-row"
                style={{ gridTemplateColumns: "50px 50px auto 100px 120px" }}
              >
                <div
                  className="action-column"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggle(index)}
                >
                  <HiOutlineChevronRight />
                </div>
                <div>{category.id}</div>
                <div>{category.name}</div>
                <div className="table-img">
                  <img src={category.banner} alt="" />
                </div>
                <div className="action-column">
                  <button title="Edit" className="table-btn tb-edit">
                    <FiEdit />
                  </button>
                  <button title="Delete" className="table-btn tb-delete">
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              {current === index && (
                <div className="row-extra">
                  <div className="row-extra-row">
                    <div>Parent Category</div>
                    <div>{category.parent} times</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Order Level</div>
                    <div>{category.order_level}</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Level</div>
                    <div>{category.level}</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Commission</div>
                    <div>{category.commission}.00 %</div>
                  </div>
                  <div className="row-extra-row">
                    <div>Featured</div>
                    <label class="confi-switch">
                      <input
                        type="checkbox"
                        defaultChecked={category.featured}
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export default CategoryTable;
