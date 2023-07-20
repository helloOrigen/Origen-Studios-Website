import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NavBarBtn from './navBarBtn'
import BannerMenu from '../assets/images/promo/casos-de-exito-banner-menu.gif'
import Btn from './btn'

const MobileMenuContent = ({ className, open }) => {
  const handleLinkClick = () => {
    // Aquí puedes realizar las acciones necesarias al hacer clic en un enlace del menú
  }

  return (
    <Fragment>
      {open && (
        <div
          className={`menu-container  d-b p-10px ${className}`}
          style={{
            position: 'fixed',
            left: '0px',
            right: '0px',
            bottom: '12%',
            margin: 'auto',
            zIndex: '99999'
          }}
        >
          <div className="w-100 noselect p-10px ns-br-c-e bg-d h-pr-fl-ma ns-br-r-2">
            {/* Contenido del menú móvil */}

                <NavBarBtn
                  enlace="/team"
                  className="ns-bg-e-hover w-100 h-60px bg-d-t  h-p2-fl ns-br-r-2 m-b-4px ma p-15px f-w-bo"
                  text={'Nosotros'}
                />

                <NavBarBtn
                  enlace="/services"
                  className="ns-bg-e-hover w-100 h-60px bg-d-t  h-p2-fl ns-br-r-2 m-b-4px ma p-15px f-w-bo"
                  text={'Servicios'}
                />

              <NavBarBtn
                enlace="/plans"
                news
                className="ns-bg-e-hover w-100 h-60px bg-d-t  h-p2-fl ns-br-r-2 m-b-4px ma p-15px f-w-bo"
                text={'Planes'}
              />

              <NavBarBtn
                enlace="/concepts"
                news
                className="ns-bg-e-hover w-100 h-60px bg-d-t  h-p2-fl ns-br-r-2 m-b-4px ma p-15px f-w-bo"
                text={'Conceptos +66'}
              />

              <NavBarBtn
                enlace="/promo"
                news
                className="ns-bg-e-hover w-100 h-60px bg-d-t  h-p2-fl ns-br-r-2 m-b-4px ma p-15px f-w-bo"
                text={'Promociones'}
              />

          <Link to="/promo" className="h-e selected nav-link" onClick={handleLinkClick}>
            <div className="w-100 h-a h-pr-fl-ma p-b-10px p-t-10px">
              <div className="m-t-20px w-100 h-100px h-pr-fl-ma t-a-c b-s-b-b ">
                <div className="h-pr-fl-ma w-a h-a centered">
                  <img
                    src={BannerMenu}
                    className="w-100 h-100 h-pr-fl-ma ns-br-r-2"
                    style={{ objectFit: 'contain' }}
                    alt="Casos De Exito"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/promo" className="h-e selected nav-link" onClick={handleLinkClick}>
            <div className="w-100 h-a h-pr-fl-ma flexbox f-w-n-w">

              <div className="w-100 p-5px h-a h-pr-fl-ma flexbox f-w-n-w">
                <Btn
                  enlace="https://wa.me/message/3J7NXI5ETDK7F1"
                  className="ns-bg-e-hover w-100 h-100 bg-g-green p-15px f-w-bo h-pr-fl-ma ns-br-r-1"
                  text={'Whatsapp'}
                >

                </Btn>
              </div>
            </div>
          </Link>
          </div>
        </div>
      )}
    </Fragment>
  )
}
MobileMenuContent.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool.isRequired
}
export default MobileMenuContent
