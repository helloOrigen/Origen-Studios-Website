import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
export default function contentViewer (props) {
  const { className, children } = props

  return (
    <Fragment>
      <div className={` ${className} h-pr-fl-ma r-h-c b-s-b-b `}>
        {children}
      </div>
    </Fragment>
  )
}
contentViewer.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}
