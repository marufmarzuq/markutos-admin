import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { blogs } from "../../../utils/data";
import TablePagination from "../../../common/tablePagination/TablePagination";
import AddBlogModal from "../addBlogModal/AddBlogModal";
import RippleButton from "../../../common/ui/rippleButton";
import { AiOutlinePlus } from "react-icons/ai";

const AllBlogs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">All Posts</div>
          <div className="table-filters">
            <input
              type="text"
              className="table-search-input"
              placeholder="Search by Post Title"
            />
            <RippleButton
              style={{ height: "40px" }}
              onClick={() => setOpenModal(true)}
            >
              <AiOutlinePlus style={{ fontSize: "18px" }} />
              <span>Add New Post</span>
            </RippleButton>
          </div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{
              gridTemplateColumns: "50px 50px auto 100px 150px",
            }}
          >
            <div></div>
            <div>#</div>
            <div>Title</div>
            <div className="text-center">Published</div>
            <div className="text-center">Options</div>
          </div>
          <div>
            {blogs.map((blog, index) => (
              <>
                <div
                  className="table-row"
                  style={{
                    gridTemplateColumns: "50px 50px auto 100px 150px",
                  }}
                >
                  <div
                    className="action-column"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggle(index)}
                  >
                    <HiOutlineChevronRight />
                  </div>
                  <div>{blog.id}</div>
                  <div>{blog.title}</div>
                  <div className="action-column">
                    <label class="confi-switch">
                      <input type="checkbox" defaultChecked={blog.published} />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div className="action-column">
                    <button
                      title="Edit"
                      className="table-btn tb-edit"
                      onClick={() => setOpenModal(true)}
                    >
                      <FiEdit />
                    </button>
                    <button title="Delete" className="table-btn tb-delete">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
                {current === index && (
                  <div className="row-extra">
                    <div className="row-extra-row">
                      <div>Banner</div>
                      <div className="table-extra-img">
                        <img src={blog.banner} alt="" />
                      </div>
                    </div>
                    <div className="row-extra-row">
                      <div>Category</div>
                      <div>{blog.category}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Short Description</div>
                      <div>{blog.short_desc}</div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <TablePagination />
        <AddBlogModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default AllBlogs;
