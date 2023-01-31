import React from "react";
import "./styles.css";

const Modal = ({children, isOpen, toggleModal}) => {

    return (
        <>
            { isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {children}
                        <button className="modal-close" onClick={toggleModal}>Close</button>
                    </div>
                </div>
            ) }
        </>
    )

}

export default Modal;