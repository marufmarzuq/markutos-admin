import React from "react";
import "./Revenue.css";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Order: 590,
    Revenue: 800,
    Refund: 140,
  },
  {
    name: "Feb",
    Order: 868,
    Revenue: 967,
    Refund: 90,
  },
  {
    name: "Mar",
    Order: 1397,
    Revenue: 1498,
    Refund: 150,
  },
  {
    name: "Apr",
    Order: 1480,
    Revenue: 1600,
    Refund: 110,
  },
  {
    name: "May",
    Order: 1520,
    Revenue: 1708,
    Refund: 45,
  },
  {
    name: "Jun",
    Order: 1400,
    Revenue: 1880,
    Refund: 80,
  },
  {
    name: "Jul",
    Order: 1520,
    Revenue: 1708,
    Refund: 210,
  },
  {
    name: "Aug",
    Order: 1400,
    Revenue: 1580,
    Refund: 80,
  },
  {
    name: "Sep",
    Order: 1520,
    Revenue: 1508,
    Refund: 100,
  },
  {
    name: "Oct",
    Order: 1400,
    Revenue: 1600,
    Refund: 150,
  },
  {
    name: "Nov",
    Order: 1400,
    Revenue: 1880,
    Refund: 70,
  },
  {
    name: "Dec",
    Order: 1400,
    Revenue: 2010,
    Refund: 20,
  },
];
// const DataFormater = (number) => {
//   if (number > 1000000000) {
//     return (number / 1000000000).toString() + "B";
//   } else if (number > 1000000) {
//     return (number / 1000000).toString() + "M";
//   } else if (number > 1000) {
//     return (number / 1000).toString() + "K";
//   } else {
//     return number.toString();
//   }
// };
const DateFormater = (date) => {
  return new Date(date).toDateString().slice(4, 11);
};

const Revenue = () => {
  return (
    <div className="single-widget">
      <div className="table-top-header">
        <div className="table-title">Revenue</div>
        <div className="table-filters">This year</div>
      </div>

      <div className="revenue-statistics">
        <div>
          <div className="revenue-sts-value">479</div>
          <div className="revenue-sts-label">Orders</div>
        </div>
        <div>
          <div className="revenue-sts-value">$7,585</div>
          <div className="revenue-sts-label">Earnings</div>
        </div>
        <div>
          <div className="revenue-sts-value">57</div>
          <div className="revenue-sts-label">Refunds</div>
        </div>
        <div>
          <div className="revenue-sts-value">13.92%</div>
          <div className="revenue-sts-label">Conversion Ratio</div>
        </div>
      </div>
      <div className="widget-container" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" barSize={20} fill="#82ca9d" />
            <Line type="monotone" dataKey="Order" stroke="#ff7300" />
            <Line dataKey="Refund" stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Revenue;
