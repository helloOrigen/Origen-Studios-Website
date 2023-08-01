import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import OSLogotipo from '../assets/logo/OS-logotipo-m-white-transparent_svg.svg'

const Footer = ({ className }) => {
  return (
    <Fragment>
      <div
        className={` ${className} h-pr-fl-ma w-80  h-100 b-s-b-b f-f-Gilroy `}
      >
        {/* Footer */}
        <div
          className="w-100 r-h-c h-100 h-pr-fl-ma b-s-b-b "
          style={{ fontSize: '10px', color: 'white', lineHeight: '15px' }}
        >
          {/* Block 1 --------------- */}
          <div className="noselect w-80 m-d-n h-100 flexbox b-s-b-b h-pr-fl-ma ">
            {/* Bloque 1 - 25% height */}
            <div className="w-a h-a h-pr-fl-ma noselect ">
              <b>
                OrigenStudios<sup style={{ fontSize: '75%', top: '-0.28em' }}>®</sup>
              </b>
              &zwj;&nbsp;Somos&zwj;&nbsp;&zwj;el&zwj;&nbsp;&zwj;origen&zwj;&nbsp;&zwj;de&zwj;&nbsp;&zwj;su&zwj;&nbsp;&zwj;marca.
            </div>

            {/* Bloque 2 - 25% height */}
            <div className="w-a h-a h-pr-fl-ma noselect  hover-underline-animation">
              <Link className="w-a h-a  h-pr-fl-ma" to="/jobs">
                2023&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;©&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;Todos&nbsp;&zwj;los&nbsp;&zwj;derechos&nbsp;&zwj;reservados.
              </Link>
            </div>

            {/* Block 3 --------------- */}

            <div className="w-a h-a h-pr-fl-ma noselect hover-underline-animation">
              <span
                className="h-pr-fl-ma w-a h-a"
              >
                Versión 1.0.5 - 1-AGO-2023
              </span>
            </div>

            {/* Block 4 --------------- */}
            <div className="w-a h-a h-pr-fl-ma noselect hover-underline-animation">
              <Link className="w-a h-a h-pr-fl-ma" to="/privacy">
                Políticas & Términos.
              </Link>
            </div>
          </div>
          {/* Block 5 DESKTOP ONLY --------------- */}
          <div className="noselect m-d-n  w-20 h-100 b-s-b-b h-pr-fl-ma ">
            <div className="h-pr-fr-ma w-100 h-100 t-1s b-s-b-b">
              <div className="h-pr-fl-ma w-100 h-35px  r-v-c flexbox">
                <img
                  className=" h-80  h-pr-fr-ma  draw "
                  style={{ objectFit: 'cover', width: '170px' }}
                  src={OSLogotipo}
                  alt="OS-LOGOTIPO"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
