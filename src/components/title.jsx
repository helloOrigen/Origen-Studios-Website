import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ className, h1, h2, h3, h4, h5, h6, sup, children }) => {
  return (
    <>
      {h1 && (
        <h1 className={`${className} ${h1} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy m-ns-f-s-big ns-f-s-big`}>
          {h1 === true ? children : h1}
          &zwj;
          {sup && <sup style={{ fontSize: '45%', top: '-25px' }}>{sup}</sup>}
        </h1>
      )}

      {h2 && (
        <h2 className={`${className} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy`} style={{ fontSize: '35px' }}>
          {h2 === true ? children : h2}
          &zwj;
          {sup && <sup style={{ fontSize: '60%', top: '-10px' }}>{sup}</sup>}
        </h2>
      )}

      {h3 && (
        <h3 className={`${className} ${h3} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy ns-f-s-medium`}>
          {h3 === true ? children : h3}
          &zwj;
          {sup && <sup style={{ fontSize: '50%', top: '-10px' }}>{sup}</sup>}
        </h3>
      )}

      {h4 && (
        <h4 className={`${className} ${h4} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy`}>{h4 === true ? children : h4}</h4>
      )}

      {h5 && (
        <h5 className={`${className} ${h5} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy`}>{h5 === true ? children : h5}</h5>
      )}

      {h6 && (
        <h6 className={`${className} ${h6} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy`}>{h6 === true ? children : h6}</h6>
      )}
    </>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  h1: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  h2: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  h3: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  h4: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  h5: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  h6: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sup: PropTypes.string,
  children: PropTypes.node
}

export default Title
