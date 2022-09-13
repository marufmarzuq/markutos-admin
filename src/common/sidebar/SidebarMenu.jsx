import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
import {
  RiDashboardLine,
  RiRefund2Fill,
  RiUserSettingsLine,
} from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { FiUsers, FiUploadCloud } from "react-icons/fi";
import { TbReport, TbWriting } from "react-icons/tb";
import { CgListTree } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaMailBulk } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const SidebarMenu = () => {
  const { pathname } = useLocation();
  const firstPath = pathname.split("/")[1];
  const [activeMenu, setActiveMenu] = useState(firstPath || "");
  console.log(firstPath);
  const handleDropdown = (type) => {
    if (activeMenu === type) {
      setActiveMenu("");
    } else {
      setActiveMenu(type);
    }
  };
  return (
    <div className="sidebar-menu">
      <NavLink to="/" onClick={() => handleDropdown("")}>
        <RiDashboardLine />
        <span>Dashboard</span>
      </NavLink>
      {/* Pos system */}
      <div
        className={`sidebar-dropdown ${activeMenu === "pos"}`}
        onClick={() => handleDropdown("pos")}
      >
        <AiOutlineFundProjectionScreen />
        <div>
          <span>Pos System</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "pos"}`}>
        <NavLink to="/pos/manager">
          <div className="dropdown-indicator"></div>
          <span>Pos Manager</span>
        </NavLink>
        <NavLink to="/pos/configuration">
          <div className="dropdown-indicator"></div>
          <span>Pos Configuration</span>
        </NavLink>
      </div>
      {/* Products */}
      <div
        className={`sidebar-dropdown ${activeMenu === "products"}`}
        onClick={() => handleDropdown("products")}
      >
        <CgListTree />
        <div>
          <span>Products</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "products"}`}>
        <NavLink to="/products/create">
          <div className="dropdown-indicator"></div>
          <span>Add Product</span>
        </NavLink>
        <NavLink to="/products/all">
          <div className="dropdown-indicator"></div>
          <span>All Products</span>
        </NavLink>
        <NavLink to="/products/in-house">
          <div className="dropdown-indicator"></div>
          <span>In House Products</span>
        </NavLink>
        <NavLink to="/products/seller">
          <div className="dropdown-indicator"></div>
          <span>Seller Products</span>
        </NavLink>
        <NavLink to="/products/digital">
          <div className="dropdown-indicator"></div>
          <span>Digital Products</span>
        </NavLink>
        <NavLink to="/products/categories">
          <div className="dropdown-indicator"></div>
          <span>Category</span>
        </NavLink>
        <NavLink to="/products/bands">
          <div className="dropdown-indicator"></div>
          <span>Brand</span>
        </NavLink>
        <NavLink to="/products/attributes">
          <div className="dropdown-indicator"></div>
          <span>Attribute</span>
        </NavLink>
        <NavLink to="/products/reviews">
          <div className="dropdown-indicator"></div>
          <span>Products Reviews</span>
        </NavLink>
      </div>
      {/* sales */}
      <div
        className={`sidebar-dropdown ${activeMenu === "orders"}`}
        onClick={() => handleDropdown("orders")}
      >
        <BsCart2 />
        <div>
          <span>Orders</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "orders"}`}>
        <NavLink to="/orders/all-orders">
          <div className="dropdown-indicator"></div>
          <span>All Orders</span>
        </NavLink>
        <NavLink to="/orders/inhouse-orders">
          <div className="dropdown-indicator"></div>
          <span>Inhouse Orders</span>
        </NavLink>
        <NavLink to="/orders/seller-orders">
          <div className="dropdown-indicator"></div>
          <span>Seller Orders</span>
        </NavLink>
      </div>
      {/* refunds */}
      <div
        className={`sidebar-dropdown ${activeMenu === "refunds"}`}
        onClick={() => handleDropdown("refunds")}
      >
        <RiRefund2Fill />
        <div>
          <span>Refunds</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "refunds"}`}>
        <NavLink to="/refunds/requests">
          <div className="dropdown-indicator"></div>
          <span>Refund Requests</span>
        </NavLink>
        <NavLink to="/refunds/approved">
          <div className="dropdown-indicator"></div>
          <span>Approved Refunds</span>
        </NavLink>
        <NavLink to="/refunds/rejected">
          <div className="dropdown-indicator"></div>
          <span>Rejected Refunds</span>
        </NavLink>
        <NavLink to="/refunds/config">
          <div className="dropdown-indicator"></div>
          <span>Refund Configuration</span>
        </NavLink>
      </div>
      {/* sellers */}
      <div
        className={`sidebar-dropdown ${activeMenu === "sellers"}`}
        onClick={() => handleDropdown("sellers")}
      >
        <RiUserSettingsLine />
        <div>
          <span>Sellers</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "sellers"}`}>
        <NavLink to="/sellers/add">
          <div className="dropdown-indicator"></div>
          <span>Add Seller</span>
        </NavLink>
        <NavLink to="/sellers/all-sellers">
          <div className="dropdown-indicator"></div>
          <span>All Sellers</span>
        </NavLink>
        <NavLink to="/sellers/payouts">
          <div className="dropdown-indicator"></div>
          <span>Payouts</span>
        </NavLink>
        <NavLink to="/sellers/payout-requests">
          <div className="dropdown-indicator"></div>
          <span>Payout Requests</span>
        </NavLink>
      </div>
      {/* Customers */}
      <NavLink to="/customers" onClick={() => handleDropdown("")}>
        <FiUsers />
        <span>Customers</span>
      </NavLink>
      {/* Reports */}
      <div
        className={`sidebar-dropdown ${activeMenu === "reports"}`}
        onClick={() => handleDropdown("reports")}
      >
        <TbReport />
        <div>
          <span>Reports</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "reports"}`}>
        <NavLink to="/reports/products-stock">
          <div className="dropdown-indicator"></div>
          <span>Products Stock</span>
        </NavLink>
        <NavLink to="/reports/inhouse-product-sale">
          <div className="dropdown-indicator"></div>
          <span>In House Product Sale</span>
        </NavLink>
        <NavLink to="/reports/seller-product-sale">
          <div className="dropdown-indicator"></div>
          <span>Seller Product Sale</span>
        </NavLink>
        <NavLink to="/reports/products-wishlist">
          <div className="dropdown-indicator"></div>
          <span>Products Wishlist</span>
        </NavLink>
      </div>
      {/* Blog system */}
      <div
        className={`sidebar-dropdown ${activeMenu === "blogs"}`}
        onClick={() => handleDropdown("blogs")}
      >
        <TbWriting />
        <div>
          <span>Manage Blogs</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "blogs"}`}>
        <NavLink to="/blogs/all">
          <div className="dropdown-indicator"></div>
          <span>All Posts</span>
        </NavLink>
        <NavLink to="/blogs/categories">
          <div className="dropdown-indicator"></div>
          <span>Post Categories</span>
        </NavLink>
      </div>
      {/* Marketing */}
      <div
        className={`sidebar-dropdown ${activeMenu === "marketing"}`}
        onClick={() => handleDropdown("marketing")}
      >
        <FaMailBulk />
        <div>
          <span>Marketing</span>
          <VscChevronRight />
        </div>
      </div>
      <div className={`dropdown-items ${activeMenu === "marketing"}`}>
        <NavLink to="/marketing/newsletters">
          <div className="dropdown-indicator"></div>
          <span>Newsletters</span>
        </NavLink>
        <NavLink to="/marketing/sms">
          <div className="dropdown-indicator"></div>
          <span>Bulk SMS</span>
        </NavLink>
        <NavLink to="/marketing/subscribers">
          <div className="dropdown-indicator"></div>
          <span>Subscribers</span>
        </NavLink>
        <NavLink to="/marketing/coupon">
          <div className="dropdown-indicator"></div>
          <span>Coupon</span>
        </NavLink>
      </div>
      {/* Customers */}
      <NavLink to="/support-tickets" onClick={() => handleDropdown("")}>
        <BiSupport />
        <span>Support Tickets</span>
      </NavLink>
      {/* Upload files */}
      <NavLink to="/upload-files" onClick={() => handleDropdown("")}>
        <FiUploadCloud />
        <span>Upload Files</span>
      </NavLink>
    </div>
  );
};

export default SidebarMenu;
