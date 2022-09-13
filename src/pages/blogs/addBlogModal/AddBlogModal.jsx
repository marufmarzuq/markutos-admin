import React, { useState } from "react";
import Select from "react-select";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import Modal from "../../../common/modal";

const AddBlogModal = ({ openModal, setOpenModal }) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <Modal
      open={openModal}
      title={"Add Blog Information"}
      onClose={() => setOpenModal(false)}
      maxWidth={"1050px"}
      buttons={
        <button className="add-btn" onClick={() => setOpenModal(false)}>
          Save Changes
        </button>
      }
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div className="widget-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px auto",
              gap: "15px",
            }}
          >
            <label htmlFor="name">Blog Title</label>
            <input type="text" id="name" />

            <label htmlFor="phone">Category</label>
            <Select options={options} placeholder="" />
            <label htmlFor="email">Slug</label>
            <input type="email" id="email" />
            <p>
              Banner <span className="helper-text">(1300x650)</span>
            </p>
            <div className="custom-browse">
              <div>Browse</div>
              <div>Choose File</div>
            </div>
            <label htmlFor="short_desc">Short Description</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>

            <label htmlFor="desc">Description</label>
            <div className="prod-desc-container">
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(value) => setEditorState(value)}
              />
            </div>
            <label htmlFor="meta-title">Meta Title</label>
            <input type="text" id="meta-title" />

            <label htmlFor="short_desc">Meta description</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <label htmlFor="meta-keywords">Meta Keywords</label>
            <input type="text" id="meta-keywords" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddBlogModal;
