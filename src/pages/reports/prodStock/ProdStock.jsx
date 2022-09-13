import React from "react";
import { prodStock } from "../../../utils/data";
import Select from "react-select";
import TablePagination from "../../../common/tablePagination/TablePagination";
import { FaFileExport } from "react-icons/fa";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import RippleButton from "../../../common/ui/rippleButton";

const ProdStock = () => {
  const categoryFilter = [
    { value: "Category 1", label: "Category 1" },
    { value: "Category 2", label: "Category 2" },
    { value: "Category 3", label: "Category 3" },
    { value: "Category 4", label: "Category 4" },
    { value: "Category 5", label: "Category 5" },
  ];
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">Products Stock</div>
          <div className="table-filters">
            <Select options={categoryFilter} placeholder="Sort by Category" />
            <RippleButton className="table-export-btn">
              <FaFileExport />
              <span>Print</span>
            </RippleButton>
            <RippleButton className="table-export-btn">
              <BsFillFileEarmarkPdfFill />
              <span>Export</span>
            </RippleButton>
          </div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{ gridTemplateColumns: "50px 1fr 1fr 100px" }}
          >
            <div className="text-center">#</div>
            <div>Name</div>
            <div>Image</div>
            <div>Stock</div>
          </div>
          <div>
            {prodStock.map((stock, index) => (
              <>
                <div
                  className="table-row"
                  style={{ gridTemplateColumns: "50px 1fr 1fr 100px" }}
                >
                  <div className="text-center">{stock.id}</div>
                  <div>{stock.name}</div>
                  <div className="table-img">
                    <img src={stock.product_img} alt="" />
                  </div>
                  <div>{stock.stock}</div>
                </div>
              </>
            ))}
          </div>
          <TablePagination />
        </div>
      </div>
    </div>
  );
};

export default ProdStock;
