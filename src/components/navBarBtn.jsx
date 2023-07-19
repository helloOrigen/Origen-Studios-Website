import React from 'react'
import PropTypes from 'prop-types'

const NavBarBtn = (props) => {
  const { text, className, children, news, disabled, enlace } = props

  return (
    <div
      className={` ${className}  d-v-on-h-container  h-e-style hover-underline-animation w-auto h-pr-fl-ma h-100 c-p  b-s-b-b`}
      style={{ zIndex: 99999 }}
    >
      <div
        className="w-a max-w-250px h-a menu-container  d-v-on-h  m-a of-h b-s-b-b"
        style={{ top: '69px' }}
      >
        {children}
      </div>

      <div className="w-a h-100 p-l-5px p-r-5px noselect h-pr-fl-ma flexbox f-w-n-w j-c-c a-i-c">
        <a href={enlace} className="noselect h-auto">
          <div
            className="w-a h-70px noselect c-white  f-f-Gilroy "
            style={{ fontSize: '15px', lineHeight: '20px' }}
          >
            <div className="w-a h-a h-pr-fl-ma r-v-c p-b-2px ">
              <div className="h-pr-fl-ma w-a h-a">{text}</div>
              {news && (
                <div className="w-a h-15px noselect m-l-5px m-t-4px ns-br-r-1 p-l-5px p-r-5px p-t-3px h-pr-fl-ma f-f-Gilroy c-white  ns-f-s-small ns-bg-e f-w-bo ghost">
                  NUEVO
                </div>
              )}
              {disabled && (
                <div className="w-a h-15px noselect m-l-5px m-t-4px p-l-5px p-r-5px p-t-3px h-pr-fl-ma f-f-Gilroy c-white  ns-f-s-small bg-d f-w-bo ghost">
                  offline
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

NavBarBtn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  news: PropTypes.bool,
  disabled: PropTypes.bool,
  enlace: PropTypes.string,
  Linkedin: PropTypes.bool,
  Facebook: PropTypes.bool,
  Twitter: PropTypes.bool,
  Behance: PropTypes.bool,
  Whatsapp: PropTypes.bool,
  Instagram: PropTypes.bool
}

NavBarBtn.defaultProps = {
  children: null,
  news: false,
  disabled: false
}

export default NavBarBtn
