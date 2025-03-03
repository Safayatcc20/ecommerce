
import React from "react";
import "./DialogBox.css";

const DialogBox = ({ message, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DialogBox;
