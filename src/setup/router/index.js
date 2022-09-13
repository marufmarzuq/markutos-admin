import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "../../pages/customers/Customers";
import Dashboard from "../../pages/dashboard/Dashboard";
import PosConfiguration from "../../pages/pos/posConfiguration/PosConfiguration";
import PosManager from "../../pages/pos/posManager/PosManager";
import AddProduct from "../../pages/products/addproduct/AddProduct";
import AllProduct from "../../pages/products/allProduct/AllProduct";
import Attribute from "../../pages/products/attribute/Attribute";
import Band from "../../pages/products/band/Band";
import Category from "../../pages/products/category/Category";
import DigitalProduct from "../../pages/products/digitalProduct/DigitalProduct";
import InHouseProduct from "../../pages/products/inHouseProduct/InHouseProduct";
import Reviews from "../../pages/products/reviews/Reviews";
import SellerProduct from "../../pages/products/sellerProduct/SellerProduct";
import AllOrders from "../../pages/sales/allOrders/AllOrders";
import AllSellers from "../../pages/sellers/allSellers/AllSellers";
import UploadFiles from "../../pages/UploadFiles/UploadFiles";
import BaseLayout from "./layouts/BaseLayout";
import { useLocation } from "react-router-dom";
import InhouseOrders from "../../pages/sales/inHouseOrders/InhouseOrders";
import SellerOrders from "../../pages/sales/sellerOrders/SellerOrders";
import RefundsRequest from "../../pages/refunds/refundsRequest/RefundsRequest";
import ApprovedRefunds from "../../pages/refunds/approvedRefunds/ApprovedRefunds";
import RejectedRefunds from "../../pages/refunds/rejectedRefunds/RejectedRefunds";
import RefundsConfig from "../../pages/refunds/refundsConfig/RefundsConfig";
import Payouts from "../../pages/sellers/payouts/Payouts";
import PayoutRequests from "../../pages/sellers/payoutRequests/PayoutRequests";
import AddSeller from "../../pages/sellers/addSeller/AddSeller";
import AddGeneralProduct from "../../pages/products/addproduct/addGeneralProduct/AddGeneralProduct";
import AddDigitalProduct from "../../pages/products/addproduct/addDigitalProduct/AddDigitalProduct";
import ProdStock from "../../pages/reports/prodStock/ProdStock";
import InHouseProdSale from "../../pages/reports/inHouseProdSale/InHouseProdSale";
import SellerProdSale from "../../pages/reports/sellerProdSale/SellerProdSale";
import ProdWishlist from "../../pages/reports/prodWishlist/ProdWishlist";
import AllBlogs from "../../pages/blogs/allBlogs/AllBlogs";
import BlogCategory from "../../pages/blogs/blogCategory/BlogCategory";
import Subscribers from "../../pages/marketing/subscribers/Subscribers";
import Newsletters from "../../pages/marketing/newsletters/Newsletters";
import BulkSms from "../../pages/marketing/sms/BulkSms";
import Coupon from "../../pages/marketing/coupon/Coupon";
import SupportTickets from "../../pages/support/SupportTickets";
import SingleSupportTicket from "../../pages/support/SingleSupportTicket";

const Router = () => {
  const location = useLocation();
  const path = location.pathname
    .split("/")[1]
    .replace(/^\w/, (c) => c.toUpperCase());
  useEffect(() => {
    let title = "Markutos";
    if (path) {
      title += ` | ${path}`;
    }
    document.title = title;
  }, [path]);

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="upload-files" element={<UploadFiles />} />
        <Route path="support-tickets" element={<SupportTickets />} />
        <Route
          path="support-tickets/:ticketId"
          element={<SingleSupportTicket />}
        />
      </Route>
      <Route path="pos" element={<BaseLayout />}>
        <Route path="manager" element={<PosManager />} />
        <Route path="configuration" element={<PosConfiguration />} />
      </Route>
      <Route path="products" element={<BaseLayout />}>
        <Route path="create" element={<AddProduct />} />
        <Route path="create/general" element={<AddGeneralProduct />} />
        <Route path="create/digital" element={<AddDigitalProduct />} />
        <Route path="all" element={<AllProduct />} />
        <Route path="in-house" element={<InHouseProduct />} />
        <Route path="seller" element={<SellerProduct />} />
        <Route path="digital" element={<DigitalProduct />} />
        <Route path="categories" element={<Category />} />
        <Route path="bands" element={<Band />} />
        <Route path="attributes" element={<Attribute />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="orders" element={<BaseLayout />}>
        <Route path="all-orders" element={<AllOrders />} />
        <Route path="inhouse-orders" element={<InhouseOrders />} />
        <Route path="seller-orders" element={<SellerOrders />} />
      </Route>
      <Route path="refunds" element={<BaseLayout />}>
        <Route path="requests" element={<RefundsRequest />} />
        <Route path="approved" element={<ApprovedRefunds />} />
        <Route path="rejected" element={<RejectedRefunds />} />
        <Route path="config" element={<RefundsConfig />} />
      </Route>
      <Route path="sellers" element={<BaseLayout />}>
        <Route path="add" element={<AddSeller />} />
        <Route path="all-sellers" element={<AllSellers />} />
        <Route path="payouts" element={<Payouts />} />
        <Route path="payout-requests" element={<PayoutRequests />} />
      </Route>
      <Route path="reports" element={<BaseLayout />}>
        <Route path="products-stock" element={<ProdStock />} />
        <Route path="inhouse-product-sale" element={<InHouseProdSale />} />
        <Route path="seller-product-sale" element={<SellerProdSale />} />
        <Route path="products-wishlist" element={<ProdWishlist />} />
      </Route>
      <Route path="blogs" element={<BaseLayout />}>
        <Route path="all" element={<AllBlogs />} />
        <Route path="categories" element={<BlogCategory />} />
      </Route>
      <Route path="marketing" element={<BaseLayout />}>
        <Route path="newsletters" element={<Newsletters />} />
        <Route path="subscribers" element={<Subscribers />} />
        <Route path="sms" element={<BulkSms />} />
        <Route path="coupon" element={<Coupon />} />
      </Route>
    </Routes>
  );
};

export default Router;
