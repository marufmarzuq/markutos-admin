import React from "react";

const AddSeller = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div className="single-widget">
        <div className="widget-header">
          <div className="widget-title">Add Seller Information</div>
        </div>
        <div className="widget-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px auto",
              gap: "15px",
            }}
          >
            <p
              style={{ gridColumn: "1 / 2 span", fontWeight: "500" }}
              className="color-main"
            >
              Basic Information
            </p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="phone">Phone</label>
            <input type="tell" id="phone" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <p
              style={{ gridColumn: "1 / 2 span", fontWeight: "500" }}
              className="color-main"
            >
              Address
            </p>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" />
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
            <label htmlFor="area">Area</label>
            <input type="text" id="area" />
            <label htmlFor="pincode">Pincode</label>
            <input type="text" id="pincode" />
            <p
              style={{ gridColumn: "1 / 2 span", fontWeight: "500" }}
              className="color-main"
            >
              Bank Details
            </p>
            <label htmlFor="acc_no">Account Number</label>
            <input type="text" id="acc_no" />
            <label htmlFor="bank_name">Bank Name</label>
            <input type="text" id="bank_name" />
            <label htmlFor="branch_name">Branch Name</label>
            <input type="text" id="branch_name" />
            <label htmlFor="routing_no">Routing Number</label>
            <input type="text" id="routing_no" />
            <label htmlFor="swift">Swift</label>
            <input type="text" id="swift" />
            <label htmlFor="acc_holder">Account Holder</label>
            <input type="text" id="acc_holder" />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
            <p
              style={{ gridColumn: "1 / 2 span", fontWeight: "500" }}
              className="color-main"
            >
              Configuration
            </p>
            <label htmlFor="seller-commission">Seller Commission</label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 40px",
                gap: "5px",
              }}
            >
              <input type="text" id="seller-commission" />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#efefef",
                }}
              >
                %
              </span>
            </div>
          </div>
          <div className="btns-container">
            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSeller;
