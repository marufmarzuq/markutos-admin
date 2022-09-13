import React from "react";

const AddBlogCategory = () => {
  return (
    <div>
      <div className="single-widget">
        <div className="widget-title">Add New Blog Category</div>
        <div className="widget-container vartical-inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="btns-container">
            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogCategory;
