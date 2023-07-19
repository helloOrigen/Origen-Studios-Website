import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavSubItem (props) {
  const { text, className, enlace } = props

  return (
        <>
        <div>
            <Link to={enlace}>
            <div className={` ${className} p-20px c-p noselect h-pr-fl-ma h-e-style hover-underline-animation h-pr-fl-ma w-100 h-a f-f-Gilroy b-s-b-b `}>
            {text && (<div className="c-white">{text}</div>)}
                </div></Link>
                </div>
</>
  )
}
NavSubItem.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  enlace: PropTypes.string.isRequired
}
