import React from "react";
import "./Band.css";
import AddBand from "./components/AddBand";
import BandTable from "./components/BandTable";

const Band = () => {
  return (
    <div className="prod-grid-container">
      <BandTable />
      <AddBand />
    </div>
  );
};

export default Band;
