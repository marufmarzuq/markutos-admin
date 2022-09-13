import React from "react";
import Select from "react-select";

const BulkSms = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="single-widget">
        <div className="table-top-header">
          <div className="table-title">Send Newsletter</div>
        </div>
        <div className="widget-container">
          <div className="vartical-inputs">
            <label>Numbers (recipients)</label>
            <Select placeholder="" />
            <label htmlFor="sms-subject">SMS Subject</label>
            <input type="text" id="sms-subject" />
            <label htmlFor="sms-subject">SMS Content</label>
            <textarea type="text" id="sms-contnet" rows={6} />
          </div>
          <div className="btns-container">
            <button className="add-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkSms;
