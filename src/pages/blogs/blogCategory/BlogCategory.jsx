import React from "react";
import "./BlogCategory.css";
import AddBlogCategory from "./components/AddBlogCategory";
import BlogCategoryTable from "./components/BlogCategoryTable";

const BlogCategory = () => {
  return (
    <div className="prod-grid-container">
      <BlogCategoryTable />
      <AddBlogCategory />
    </div>
  );
};

export default BlogCategory;
