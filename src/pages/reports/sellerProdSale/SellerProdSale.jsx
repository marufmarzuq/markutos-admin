import React from "react";
import { prodStock } from "../../../utils/data";
import Select from "react-select";
import TablePagination from "../../../common/tablePagination/TablePagination";
import DateRangeSelector from "../../../common/ui/dateRangeSelector";
import RippleButton from "../../../common/ui/rippleButton";
import { FaFileExport } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

const SellerProdSale = () => {
  const sellerFilter = [
    { value: "Seller 1", label: "Seller 1" },
    { value: "Seller 2", label: "Seller 2" },
    { value: "Seller 3", label: "Seller 3" },
    { value: "Seller 4", label: "Seller 4" },
    { value: "Seller 5", label: "Seller 5" },
  ];
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">Seller Product Sale</div>
          <div className="table-filters">
            <Select options={sellerFilter} placeholder="Filter by Seller" />
            <div style={{ display: "flex" }}>
              <DateRangeSelector />
              <button className="table-filter-btn">
                <FiFilter />
              </button>
            </div>
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
            style={{ gridTemplateColumns: "50px 1fr 100px 1fr 1fr 130px" }}
          >
            <div className="text-center">#</div>
            <div>Name</div>
            <div>Image</div>
            <div>Seller</div>
            <div className="text-center">Total Sale</div>
            <div className="text-center">Total Sale Amount</div>
          </div>
          <div>
            {prodStock.map((stock) => (
              <>
                <div
                  className="table-row"
                  style={{
                    gridTemplateColumns: "50px 1fr 100px 1fr 1fr 130px",
                  }}
                >
                  <div className="text-center">{stock.id}</div>
                  <div>{stock.name}</div>
                  <div className="table-img">
                    <img src={stock.product_img} alt="" />
                  </div>
                  <div>{stock.seller}</div>
                  <div className="text-center">{stock.stock}</div>
                  <div className="text-center">{stock.amount}</div>
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

export default SellerProdSale;
