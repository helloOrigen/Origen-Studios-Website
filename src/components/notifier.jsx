import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

const Notifier = ({
  isCookieMessage,
  title,
  subtitle,
  text,
  className,
  note,
  action,
  link,
  Style,
  Accept,
  Decline,
  intitle,
  children
}) => {
  const [showNotifier, setShowNotifier] = useState(false)

  // Función para mostrar el mensaje de cookies si es necesario
  useEffect(() => {
    if (isCookieMessage && !Cookies.get('cookieSeen')) {
      setShowNotifier(true)
    }
  }, [isCookieMessage])

  const handleSetCookie = () => {
    Cookies.set('cookieSeen', true, { expires: 7, path: '/', secure: true })
    setShowNotifier(false)
  }

  const handleRemoveCookie = () => {
    Cookies.remove('cookieSeen', { path: '/', domain: 'origenstudios.com' })
    setShowNotifier(false)
  }

  return (
    <Fragment>
      {showNotifier && (
        <div
          className={`m-w-95 ${className} notifier d-i-f ns-bg-e p-5px noselect`}
          style={{ ...Style }}
        >
          <div className="w-100 h-a h-pr-fl-ma bg-d br-r-50px p-20px p-l-30px">
            {title && (
              <div
                className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"
                style={{
                  fontSize: '25px',
                  fontWeight: 'bold',
                  lineHeight: '30px',
                  color: 'white'
                }}
              >
                {title}
              </div>
            )}
            {subtitle && (
              <div
                className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"
                style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  lineHeight: '20px',
                  color: '#666666'
                }}
              >
                {subtitle}
                <br />
                <br />
              </div>
            )}
            {intitle && (
              <div
                className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"
                style={{
                  fontSize: '25px',
                  fontWeight: 'bold',
                  lineHeight: '30px',
                  color: 'white'
                }}
              >
                <div className="h-pr-fl-ma w-a h-a ">{title}</div>
                {intitle && (
                  <div
                    className="h-pr-fl-ma b-s-b-b w-a h-a f-f-Gilroy"
                    style={{
                      fontSize: '15px',
                      lineHeight: '30px',
                      fontStyle: 'italic',
                      color: 'white'
                    }}
                  >
                    &nbsp;{intitle}
                  </div>
                )}
              </div>
            )}
            {text && (
              <div
                className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"
                style={{
                  fontSize: '15px',
                  lineHeight: '20px',
                  color: 'white'
                }}
              >
                {text}
              </div>
            )}
            {note && (
              <div
                className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy m-t-10px"
                style={{
                  fontSize: '10px',
                  lineHeight: '15px',
                  color: 'white',
                  fontStyle: 'italic'
                }}
              >
                {note}
              </div>
            )}
            {children}
            {action && (
              <div
                className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy m-t-10px"
                style={{ fontSize: '15px', lineHeight: '15px' }}
              >
                <a href={`${link}`}>
                  <span className="hover-underline-animation ns-c-e">
                    {action}
                  </span>
                </a>
              </div>
            )}
          </div>

          <div className="w-150px h-a h-pr-fl-ma p-10px b-s-b-b of-h">
            <div className="w-100 m-d-f h-pr-fl-ma -s-b-b">
              {Decline && (
                <div className="d-n m-d-b m-w-50 h-100px h-pr-fl-ma p-5px">
                  <button
                    type="button"
                    className="h-pr-fl-ma b-s-b-b w-a centered p-5px h-a f-f-Gilroy hover-underline-animation"
                    style={{
                      fontSize: '15px',
                      lineHeight: '10px',
                      color: 'white',
                      background: 'none !important'
                    }}
                    onClick={handleRemoveCookie}
                  >
                    Rechazar
                  </button>
                </div>
              )}

              {Accept && (
                <div className="w-100 m-w-50 h-50px h-pr-fl-ma p-5px">
                  <button
                    type="button"
                    className="h-pr-fl-ma bg-white b-s-b-b w-a centered p-20px f-w-bo h-a f-f-Gilroy h-e c-p"
                    style={{
                      fontSize: '15px',
                      borderRadius: '50px',
                      lineHeight: '10px',
                      color: 'black'
                    }}
                    onClick={handleSetCookie}
                  >
                    Aceptar
                  </button>
                </div>
              )}

              {Decline && (
                <div className="m-d-n d-b w-100 h-100px h-pr-fl-ma p-5px">
                  <button
                    type="button"
                    className="h-pr-fl-ma b-s-b-b w-a centered p-5px h-a r-h-c f-f-Gilroy hover-underline-animation"
                    style={{
                      fontSize: '15px',
                      lineHeight: '10px',
                      color: 'white',
                      background: 'none !important'
                    }}
                    onClick={handleRemoveCookie}
                  >
                    Rechazar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

Notifier.propTypes = {
  isCookieMessage: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  note: PropTypes.string,
  action: PropTypes.string,
  link: PropTypes.string,
  Style: PropTypes.object,
  Accept: PropTypes.bool,
  Decline: PropTypes.bool,
  intitle: PropTypes.string,
  children: PropTypes.node
}

export default Notifier
