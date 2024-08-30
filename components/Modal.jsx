import React from 'react';
import "./modal.css"

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; 
  
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="modal-close" onClick={onClose}>
            -
          </button>
          {title && <h2 className="modal-title">{title}</h2>}
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;