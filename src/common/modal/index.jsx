import React from "react";
import "./modal.css";
import { GrClose } from "react-icons/gr";

const Modal = ({ maxWidth, children, open, onClose, title, buttons }) => {
  return (
    <div className={`modal-wrapper ${open}`} onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: maxWidth ? maxWidth : "700px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <GrClose className="modal-close" onClick={onClose} />
        </div>
        <div className="modal-scrollable-container">{children}</div>
        {buttons && <div className="modal-footer">{buttons}</div>}
      </div>
    </div>
  );
};

export default Modal;
