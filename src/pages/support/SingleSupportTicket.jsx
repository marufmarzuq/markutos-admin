import React, { useState } from "react";
import { supports } from "../../utils/data";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { AiOutlineUser } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import RippleButton from "../../common/ui/rippleButton";
import Select from "react-select";

const SingleSupportTicket = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [ticket] = useState(supports[0]);
  console.log(ticket);
  return (
    <div
      className="single-widget"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      <div className="widget-title">
        {ticket.subject} (#{ticket.ticket_id})
      </div>
      <div className="widget-container">
        <div className="support-replay-profile">
          <div className="srp-img">
            <AiOutlineUser />
          </div>
          <span>Replay</span>
        </div>
        <div className="prod-desc-container">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(value) => setEditorState(value)}
          />
        </div>
        <div className="btns-container" style={{ height: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Status:</span>
            <Select menuPlacement="top" placeholder="Closed" />
          </div>
          <RippleButton>
            <span>Send Replay</span>
            <IoSend />
          </RippleButton>
        </div>
        <div className="widget-title" style={{ margin: "0 0 20px" }}>
          Conversations
        </div>
        <div className="support-ticket-conversation-container">
          <div className="stc-user-container">
            <div className="support-replay-profile">
              <div className="stc-user-img">
                <AiOutlineUser />
              </div>
              <div className="stc-info">
                <span>Jhon Doe</span>
                <span className="stc-date">Today, 12/09/2022 - 11:45 AM</span>
              </div>
            </div>
          </div>
          <div className="stc-message">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quibusdam illum repellat optio, sit modi suscipit et vel eaque.
            Atque fugiat maiores perferendis? Distinctio culpa et veniam ea
            molestiae odio?
          </div>
          <div className="stc-admin-container">
            <div className="support-replay-profile">
              <div className="stc-info admin">
                <span>You</span>
                <span className="stc-date">Today, 12/09/2022 - 9:45 AM</span>
              </div>
              <div className="stc-user-img">
                <AiOutlineUser />
              </div>
            </div>
          </div>
          <div className="stc-message">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quibusdam illum repellat optio, sit modi suscipit et vel eaque.
            Atque fugiat maiores perferendis? Distinctio culpa et veniam ea
            molestiae odio?
          </div>
        </div>
        <div className="support-ticket-creating-date">
          Ticket #{ticket.ticket_id} has been created at {ticket.creating_date}
        </div>
      </div>
    </div>
  );
};

export default SingleSupportTicket;
