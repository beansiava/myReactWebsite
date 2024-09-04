import React from 'react';
import "./Modal.css"
import modalImageTest from "../assets/MeTakingNotes.jpg"

const Modal = ({ isOpen, onClose, title, summary, img, children}) => {
    if (!isOpen) return null; 

    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="modal-close" onClick={onClose}>
            -
          </button>
          {title && <h2 className="modal-title">{title}</h2>}
          <div className="modal-divider"></div>

          <div className="modal-summary"><p>{summary}</p></div>
          <div className="modal-details">
            <div className="">{children}</div>

            <div 
                className="modal-detail-img"
                style= {{
                    backgroundImage: `url(${img})`,
                    // backgroundImage: `url(${modalImageTest})`,
                }}
            >

            </div>

          </div>
         
        </div>
      </div>
    );
  };
  
  export default Modal;