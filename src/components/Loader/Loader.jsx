import React from "react";
import { Modal } from "../Modal/Modal";
import "./Loader.css";
/**
 * @author
 * @function Loader
 **/

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loading-container">
        <div className="circles"></div>
      </div>
    </div>
  );
};

export default Modal(Loader);
