import React from "react";
import { Modal } from "../Modal/Modal";
import "./ErrorPopup.css";
/**
 * @author
 * @function ErrorPopup
 **/

export const ErrorPopup = ({ error, close }) => {
  console.log(error, close);
  return (
    <div className="error-popup">
      <div className="error-header">
        <h4>Error</h4>
        <div className="close-ico" onClick={close}>
          X
        </div>
      </div>
      <div className="error-info">{error}</div>
      <div className="error-action">
        <button onClick={close}>Ok</button>
      </div>
    </div>
  );
};

export default Modal(ErrorPopup);
