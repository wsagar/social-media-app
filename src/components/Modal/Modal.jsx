import React from "react";
import "./Modal.css";
/**
 * @author
 * @function Modal
 **/

export const Modal = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div className="modal-backdrop">
          <div className="modal-content">
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
};
