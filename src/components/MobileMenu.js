import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ChervronLeft from '../assets/icons/chevron_left.svg'
import Close from '../assets/icons/close.svg'
import ChervronUpDouble from '../assets/icons/chevron_up_double.svg'
import Home from '../assets/icons/home.svg'

const MobileMenu = ({ onToggleMenu, isOpen }) => {
  const [open, setOpen] = useState(false)

  const handleUpButtonAnimation = () => {
    setOpen(!open)
    // Call the onToggleMenu function to open/close the MobileMenuContent
    onToggleMenu()
  }

  const UpButtonStyle = {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transform: open ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'transform 0.3s ease-in-out'
  }

  return (
    <div className="pf m-a b-0px bg-d ns-br-r-1 p-5px h-60px d-n m-d-b w-100  b-s-b-b">
      <div className="w-100 h-60px b-0px m-a h-pr-fl-ma r-v-b of-v flexbox">
      <div className="w-33 h-100 h-pr-fl-ma bg-d-t ns-br-r-1 b-s-b-b">
            <div className="w-a h-a h-pr-fl-ma centered flexbox noselect">
              <img src={ChervronLeft} alt="Volver" className="w-and-h-25px p-r-3px m-r-5px" />
              <span className="f-f-Gilroy ns-c-white f-w-bo m-t-2px">Volver</span></div>
            </div>
          <div className="w-33 h-100 h-pr-fl-ma ns-bg-e ns-br-r-1 flexbox b-s-b-b"
            onClick={handleUpButtonAnimation}
            style={UpButtonStyle}
          >
            <div className="w-100 h-pr-fl-ma b-s-b-b">
              <img
                src={open ? Close : ChervronUpDouble}
                className="w-and-h-45px r-h-c"
                alt="Menu"
                style={{ stroke: open ? '#FF0000' : '#666666' }}
              />
            </div>
          </div>
          <div className="w-33 h-100 h-pr-fl-ma bg-d-t ns-br-r-1 b-s-b-b">
          <div className="w-a h-a h-pr-fl-ma centered flexbox noselect">
              <img src={Home} alt="Inicio" className="w-and-h-25px p-r-3px m-r-5px" />
              <span className="f-f-Gilroy ns-c-white f-w-bo m-t-2px">Inicio</span></div>
            </div>
        </div>
    </div>
  )
}
MobileMenu.propTypes = {
  onToggleMenu: PropTypes.string,
  isOpen: PropTypes.string
}
export default MobileMenu
