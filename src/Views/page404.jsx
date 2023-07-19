import React, { Fragment } from 'react'

import Btn from '../components/btn'
import HomeIcon from '../assets/icons/home.svg'

const Page404 = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b">
        <div className="w-100 h-a h-pr-fl-ma r-v-c">
          <div
            className="f-f-Gilroy t-a-c w-100 h-pr-fl-ma"
            style={{ fontSize: '180px', lineHeight: '185px', fontWeight: 'bold' }}
          >
            404
          </div>
          <div
            className="f-f-Gilroy t-a-c w-100 h-pr-fl-ma ns-c-e m-b-20px"
            style={{ fontSize: '40px', lineHeight: '45px', fontWeight: 'bold' }}
          >
            Pagina no encontrada
          </div>
          <div className="w-50 r-h-c h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider"></div>
          <Btn className="m-t-20px" text="Página principal" enlace="/">
            <div className="w-25px h-25px m-5px h-pr-fl-ma">
              <img
                src={HomeIcon}
                className="w-100 h-100 h-pr-fl-ma"
                style={{ stroke: '#ffffff !important' }}
                alt="Página principal"
              />
            </div>
          </Btn>
        </div>
      </div>
    </Fragment>
  )
}

export default Page404
