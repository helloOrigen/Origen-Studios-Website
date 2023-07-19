import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const ImageComponent = ({ imageUrl, className, imgcStyle, imgcclassName }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const [scale, setScale] = useState(1)
  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleZoomIn = () => {
    setScale(scale + 0.1)
  }

  const handleZoomOut = () => {
    setScale(scale - 0.1)
  }

  const handleResetZoom = () => {
    setScale(1)
  }

  if (modalOpen) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-content ">
          <img
            src={imageUrl}
            alt="Imagen"
            className={`${imgcclassName} w-100 h-100 centered `}
            style={` object-fit: contain;  ${imgcStyle} `}
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
      document.getElementById('modal-root')
    )
  }

  return (
    <div className="img-component">
      <img
        src={imageUrl}
        alt="Imagen"
        onClick={openModal}
        className={` ${className} modal-image w-100 h-100 h-pr-fl-ma b-s-b-b `}
        style={{ objectFit: 'contain', transform: `scale(${scale})` }}
      />
    </div>
  )
}
ImageComponent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  imgcStyle: PropTypes.string,
  imgcclassName: PropTypes.string
}
export default ImageComponent
