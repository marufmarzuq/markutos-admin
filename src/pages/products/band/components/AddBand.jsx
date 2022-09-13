import React from "react";

const AddBand = () => {
  return (
    <div>
      <div className="single-widget">
        <div className="widget-title">Add New Band</div>
        <div className="widget-container">
          <div
            className="vartical-inputs"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div>
              <label for="name">Name</label>
              <input id="name" type="text" />
            </div>
            <div>
              <label>Logo</label>
              <div className="custom-browse">
                <div>Browse</div>
                <div>Choose File</div>
              </div>
            </div>
            <div>
              <label htmlFor="meta-title">Meta Title</label>
              <input id="meta-title" type="text" />
            </div>
            <div>
              <label htmlFor="meta-desc">Meta Description</label>
              <textarea id="meta-desc" rows={4} />
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

export default AddBand;
