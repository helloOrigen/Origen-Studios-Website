import { object } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ImageComponent = ({ imageUrl, className, imgcStyle,imgcclassName }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [scale, setScale] = useState(1);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  if (modalOpen) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-content">
          <img
            src={imageUrl}
            alt="Imagen"
            className={`${imgcclassName} w-100 h-100 centered`}
            Style={` object-fit: contain;  ${imgcStyle} `}
          />
          <div className="ZoomControls w-300px bg-d-t flexbox d-n">
            <button className="zoom-button c-p h-e" onClick={handleZoomIn}>
              +
            </button>
            <button className="zoom-button c-p h-e" onClick={handleZoomOut}>
              -
            </button>
            <button className="zoom-button c-p h-e" onClick={handleResetZoom}>
              Restablecer
            </button>
          </div>
          <button onClick={closeModal} className="modal-close-button c-p h-e">
            X
          </button>
        </div>
        <div className="modal-overlay" onClick={closeModal}></div>
      </div>,
      document.getElementById("modal-root") // Aquí debes especificar el ID del elemento en el DOM donde deseas renderizar la modal
    );
  }

  return (
    <div className="img-component">
      <img
        src={imageUrl}
        alt="Imagen"
        onClick={openModal}
        className={` ${className} modal-image w-100 h-100 h-pr-fl-ma b-s-b-b `}
        Style={{ objectFit: 'contain', transform: `scale(${scale})` }}
      />
    </div>
  );
};

export default ImageComponent;
