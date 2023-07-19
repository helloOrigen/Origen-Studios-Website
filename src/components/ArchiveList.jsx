import React from 'react'
import PropTypes from 'prop-types'
import Btn from './btn'
import { PDFIcon } from './icons-component'

export default function ArchiveList (props) {
  const { enlace, format, name } = props

  const getIconComponent = (format) => {
    switch (format) {
      case 'PDF':
        return <PDFIcon />
      default:
        return null
    }
  }

  const iconComponent = getIconComponent(format)

  const handleButtonClick = () => {
    window.open(enlace)
  }

  return (
    <>
      <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1 p-5px flexbox">
        {iconComponent && (
          <div className="w-50px h-a h-pr-fl-ma p-5px">
            <div className="w-and-h-40px bg-d-t ns-br-r-1 h-pr-fl-ma b-s-b-b of-n">
              {iconComponent}
            </div>
          </div>
        )}

        {name && (
          <div
            className="w-80 m-l-10px p-20px f-f-Gilroy"
            style={{ fontSize: '15px', lineHeight: '15px' }}
          >
            <a href={enlace}>
              {name}
            </a>
          </div>
        )}

        {enlace && (
          <div className="w-150px m-w-100px m-r-5px m-d-b h-pr-fl-ma bg-black">
            <Btn
              className="w-100 m-w-100 h-pr-fr-ma p-10px ns-bg-green f-w-bo"
              text="Descargar"
              enlace={enlace}
              onClick={handleButtonClick}
            />
          </div>
        )}
      </div>
    </>
  )
}

ArchiveList.propTypes = {
  enlace: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
