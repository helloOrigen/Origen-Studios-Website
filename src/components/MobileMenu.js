import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ChervronLeft from '../assets/icons/chevron_left.svg'
import MobileBtnMenu from '../assets/components/SVG/mobile-btn-menu.svg'
import Close from '../assets/icons/close.svg'
import ChervronUpDouble from '../assets/icons/chevron_up_double.svg'
import Home from '../assets/icons/home.svg'

export default function MobileMenu ({ onToggleMenu, open }) {
  const handleOpen = () => {
    onToggleMenu()
  }

  return (
    <div className="pf m-a b-0px h-80px d-n m-d-b w-100  b-s-b-b">
      <div className="w-100  h-70px b-0px m-a h-pr-fl-ma r-v-b">
        <div
          className="t-a-c f-f-Gilroy f-w-bo"
          style={{
            width: '100%',
            height: '30px',
            background: '#000000',
            color: '#666666',
            position: 'absolute',
            margin: 'auto',
            bottom: '0px',
            left: '0px',
            right: '0px'
          }}
        >
          <span className="ns-f-s-small" style={{ bottom: '0px', margin: 'auto', position: 'absolute', left: '0px', right: '0px' }}>
            OrigenStudios<sup>&reg;</sup>{' '}
          </span>
        </div>
        <div className="w-40 h-100 h-pr-fl-ma">
          <Link to="">
            <div className="w-100 h-100 h-pr-fl-ma MobileMenuBtnLeft h-e c-p" style={{ background: '#000000' }}>
              <div className="centered h-a w-a f-f-Gilroy c-white ns-f-s-normal f-w-bo flexbox">
                <img src={ChervronLeft} className="w-and-h-25px h-pr-fl-ma m-l-5px" alt="Inicio" />
                <span className="w-a h-a h-pr-fl-ma t-a-c">Volver</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-20 h-100 h-pr-fl-ma noselect">
          <div className={`w-150px r-h-c h-60px h-pr-fl-ma menu-wrapper ${open ? 'menu-open' : ''}`} onClick={handleOpen}>
            <label htmlFor="menu" className="w-100 r-h-c h-100 h-pr-fl-ma c-p h-e" onClick={handleOpen}>
              <img src={MobileBtnMenu} className="w-150px r-h-c h-60px of-v noselect" style={{ position: 'absolute' }} alt="Menu" />
              <div className="w-150px h-a r-h-c h-pr-fl-ma flexbox">
                <img src={open ? Close : ChervronUpDouble} className="noselect w-and-h-50px h-pr-fl-ma p-t-8px" alt="Menu" style={{ stroke: open ? '#FF0000' : '#666666' }} />
              </div>
            </label>
          </div>
        </div>
        <div className="w-40 h-100 h-pr-fl-ma">
          <div className="w-100 h-100 h-pr-fl-ma MobileMenuBtnRight h-e c-p" style={{ background: '#000000' }}>
            <Link to="/">
              <div className="centered h-a w-a f-f-Gilroy c-white ns-f-s-normal f-w-bo flexbox">
                <img src={Home} className="w-and-h-25px h-pr-fl-ma m-r-5px" alt="Inicio" />
                <span className="w-a h-a h-pr-fl-ma t-a-c">Inicio</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}
MobileMenu.propTypes = {
  onToggleMenu: PropTypes.func,
  open: PropTypes.bool
}
