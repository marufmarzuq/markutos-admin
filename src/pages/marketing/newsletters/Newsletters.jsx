import React, { useState } from "react";
import Select from "react-select";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const Newsletters = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="single-widget">
        <div className="table-top-header">
          <div className="table-title">Send Newsletter</div>
        </div>
        <div className="widget-container">
          <div className="vartical-inputs">
            <label htmlFor="recipients">Emails (recipients)</label>
            <Select placeholder="" />
            <label htmlFor="newsletter-subject">Newsletter Subject</label>
            <input type="text" id="newsletter-subject" />
            <label htmlFor="newsletter-content">Newsletter content</label>
            <div className="prod-desc-container">
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(value) => setEditorState(value)}
              />
            </div>
          </div>
          <div className="btns-container">
            <button className="add-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
