import React from "react";

const RefundsConfig = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}
    >
      <div className="single-widget">
        <div className="widget-header">
          <div className="widget-title">Set Refund Time</div>
        </div>
        <div className="widget-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px auto 50px",
              alignItems: "center",
              gap: "15px",
              padding: "10px 0",
            }}
          >
            <label htmlFor="refund-time">
              Set Time for sending Refund Request
            </label>
            <input type="text" id="refund-time" min={1} />
            <p>days</p>
          </div>
          <div className="btns-container">
            <button className="add-btn">Save</button>
          </div>
        </div>
      </div>
      {/* <div className="single-widget">
        <div className="widget-header">
          <div className="widget-title">Set Refund Sticker</div>
        </div>
        <div className="widget-container">This is refund 1</div>
      </div> */}
    </div>
  );
};

export default RefundsConfig;
