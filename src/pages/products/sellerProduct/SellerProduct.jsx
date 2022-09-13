import React, { useState } from "react";
import Select from "react-select";
import { allProducts } from "../../../utils/data";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import EditGeneralProdModal from "../addproduct/addGeneralProduct/EditGeneralProdModal";
import TablePagination from "../../../common/tablePagination/TablePagination";

const SellerProduct = () => {
  const [current, setCurrent] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">Seller Products</div>
          <div className="table-filters">
            <Select placeholder="Sort By" />
            <input
              type="text"
              className="table-search-input"
              placeholder="Search product by name"
            />
          </div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{ gridTemplateColumns: "50px 50px 100px auto 120px" }}
          >
            <div></div>
            <div>#</div>
            <div>Image</div>
            <div>Name</div>
            <div className="text-center">Options</div>
          </div>
          <div>
            {allProducts.map((product, index) => (
              <>
                <div
                  className="table-row"
                  style={{ gridTemplateColumns: "50px 50px 100px auto 120px" }}
                >
                  <div
                    className="action-column"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggle(index)}
                  >
                    <HiOutlineChevronRight />
                  </div>
                  <div>{product.id}</div>
                  <div className="table-img">
                    <img src={product.img} alt="" />
                  </div>
                  <div>{product.name}</div>
                  <div className="action-column">
                    <button
                      title="Edit"
                      className="table-btn tb-edit"
                      onClick={() => setEditModal(true)}
                    >
                      <FiEdit />
                    </button>
                    <button title="Copy" className="table-btn tb-copy">
                      <IoCopyOutline />
                    </button>
                    <button title="Delete" className="table-btn tb-delete">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
                {current === index && (
                  <div className="row-extra">
                    <div className="row-extra-row">
                      <div>Added By</div>
                      <div>{product.added_by}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Num of Sale</div>
                      <div>{product.sale_count} times</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Base Price</div>
                      <div>${product.base_price}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Rating</div>
                      <div>{product.rating}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Total Stock</div>
                      <div>
                        {product.stock} {product.stock > 1 ? "pieces" : "piece"}
                      </div>
                    </div>
                    <div className="row-extra-row">
                      <div>Todays Deal</div>
                      <label class="confi-switch">
                        <input
                          type="checkbox"
                          defaultChecked={product.todays_deal}
                        />
                        <span class="slider round"></span>
                      </label>
                    </div>
                    <div className="row-extra-row">
                      <div>Published</div>
                      <label class="confi-switch">
                        <input
                          type="checkbox"
                          defaultChecked={product.published}
                        />
                        <span class="slider round"></span>
                      </label>
                    </div>
                    <div className="row-extra-row">
                      <div>Featured</div>
                      <label class="confi-switch">
                        <input
                          type="checkbox"
                          defaultChecked={product.featured}
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
      <EditGeneralProdModal setOpen={setEditModal} open={editModal} />
    </div>
  );
};

export default SellerProduct;
