import React from "react";
import "./Dashboard.css";
import DashboardTopProducts from "./components/dasboardTopProducts/DashboardTopProducts";
import Counts from "./components/counts/Counts";
import Revenue from "./components/revenue/Revenue";
import RecentReviews from "./components/recentReviews/RecentReviews";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Counts />

      <div className="dashboard-revenue-review-container">
        <Revenue />
        <RecentReviews />
      </div>

      {/* <div className="dashboard-first-widget">
        <div className="d-count-widget">
          <DashboardCounts />
        </div>
        <div className="d-pie-chart-widget">
          <DashboardProductsGraph />
          <DashboardSellersGraph />
        </div>
      </div> */}
      {/* <div className="dashboard-second-widget">
        <DashboardSaleGraph />
        <DashboardStockGraph />
      </div> */}
      <div className="dashboard-third-widget">
        <DashboardTopProducts />
      </div>
    </div>
  );
};

export default Dashboard;
