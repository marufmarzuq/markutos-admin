import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddCategory = () => {
  return (
    <div>
      <div className="single-widget">
        <div className="widget-title">Add Category</div>
        <div className="widget-container vartical-inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="parent">Parent Category</label>
            <Select options={options} placeholder="All Categories" />
          </div>
          <div>
            <label htmlFor="ordering-num">Ordering Number</label>
            <input type="text" id="ordering-num" />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <Select options={options} placeholder="" />
          </div>
          <div>
            <label htmlFor="type">Banner (200x200)</label>
            <div className="custom-browse">
              <div>Browse</div>
              <div>Choose File</div>
            </div>
          </div>
          <div>
            <label htmlFor="icon">Icon (32x32)</label>
            <div className="custom-browse">
              <div>Browse</div>
              <div>Choose File</div>
            </div>
          </div>
          <div>
            <label htmlFor="meta-title">Meta Title</label>
            <input type="text" id="meta-title" />
          </div>
          <div>
            <label htmlFor="meta-desc">Meta description</label>
            <textarea rows={4} type="text" id="meta-desc" />
          </div>
          <div className="btns-container">
            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
