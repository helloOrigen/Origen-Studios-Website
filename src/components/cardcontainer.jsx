import React from 'react'
import PropTypes from 'prop-types'
export default function CardContainer (props) {
  const { children } = props

  return (
    <>
      <div className="card-mosaic m-b-20px  ">
        {children}
      </div>
    </>
  )
}
CardContainer.propTypes = {
  children: PropTypes.string.isRequired
}
