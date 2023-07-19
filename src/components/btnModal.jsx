import React, { useState } from 'react'
import PropTypes from 'prop-types'

function BtnModal (props) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const { children, className } = props

  return (
    <div className={` ${className} h-pr-fr-ma  p-10px of-v r-v-c`}>
      <button
        onClick={toggleVisibility}
        className="c-white  f-w-bo p-l-10px p-r-10px  m-r-5px m-l-5px h-pr-fl-ma w-a  ns-bg-e h-e-ghost-e t-03s  h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e d-i-f f-f-Gilroy"
      >
        Ajustes
      </button>

      {isVisible && (
        <div
          style={{
            top: '50px',
            width: '250px',
            height: '300px',
            left: '0px',
            right: '0px',
            margin: 'auto',
            position: 'absolute',
            background: 'red',
            padding: '20px',
            zIndex: '99992'
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

BtnModal.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default BtnModal
