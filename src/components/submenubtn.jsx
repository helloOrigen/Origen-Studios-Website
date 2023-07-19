import React from 'react'
import PropTypes from 'prop-types'

export default function SubMenuBtn (props) {
  const { text, className, enlace, children } = props

  return (
    <>
      <a href={`${enlace} `}>
        <button
          type="button"
          className={` ${className} h-pr-fl-ma w-a blur  ns-g-e br-r-5px hover-underline-animation t-02s m-5px  h-a p-10px d-i-f  c-p  b-s-b-b ns-c-f-1  h-e f-f-Gilroy `}
        >
          <div className="w-a h-a h-pr-fl-ma p-r-5px">Icon</div>
          <div className="w-a h-a h-pr-fl-ma ">{children}</div>
          <div className="w-a h-a h-pr-fl-ma t-a-c c-white d-i-f" style={{ fontSize: '15px', lineHeight: '20px' }}>
            {text}
          </div>
        </button>
      </a>
    </>
  )
}

SubMenuBtn.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  enlace: PropTypes.string.isRequired,
  children: PropTypes.node
}
