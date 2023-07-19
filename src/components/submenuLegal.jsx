import React, { Fragment } from 'react'

import Btn from './btn'

export default function SubMenuLegal (props) {
  return (
    <Fragment>
      <div className="w-100 h-a p-10px flexbox f-w-a m-d-b bg-d ns-br-r-1 m-5px h-pr-fl-ma">
        <Btn
          className="p-l-10px f-w-bo p-r-10px bg-d-t p-15px"
          enlace="/terms"
          text="Términos y condiciones"
        ></Btn>{' '}
        <Btn
          className="p-l-10px f-w-bo p-r-10px bg-d-t p-15px"
          enlace="/privacy"
          text="Políticas de Privacidad"
        ></Btn>{' '}
        <Btn
          className="p-l-10px f-w-bo p-r-10px bg-d-t p-15px"
          enlace="/cookies"
          text="Políticas de Cookies"
        ></Btn>
      </div>
    </Fragment>
  )
}
