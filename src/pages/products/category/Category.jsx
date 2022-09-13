import React from "react";
import "./Category.css";
import AddCategory from "./components/AddCategory";
import CategoryTable from "./components/CategoryTable";

const Category = () => {
  return (
    <div className="prod-grid-container">
      <CategoryTable />
      <AddCategory />
    </div>
  );
};

export default Category;
