import React, { Fragment, useState } from 'react'

import Title from '../components/title'

import Btn from '../components/btn'
import { PVContentsUnicos, PVContentsMensuales } from './index'

const Contents = () => {
  const [mostrarMensuales, setMostrarMensuales] = useState(false)
  const [mostrarUnicos, setMostrarUnicos] = useState(false)

  const mostrarPlanesMensuales = () => {
    setMostrarMensuales(true)
    setMostrarUnicos(false)
  }

  const mostrarPlanesUnicos = () => {
    setMostrarMensuales(false)
    setMostrarUnicos(true)
  }

  return (
    <Fragment>
      <div className="w-95 min-h-90vh r-h-c m-w-100 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 h-a h-pr-fl-ma">
        <Title h4="Planes:" className="w-100 t-a-c m-t-100px ns-c-e"></Title>
        <Title
          h1="Generación de Contenido"
          className="w-100 t-a-c m-b-50px"
        ></Title>
        <div
          className=" m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b  m-t-40px m-b-40px  bg-d"
          style={{ borderRadius: '20px' }}
        >
          <span className="w-100 h-pr-fl-ma t-a-c f-f-Gilroy p-20px f-w-bo">
            Haz click aquí para conocer nuestros planes!
          </span>
          <div className="w-100 h-pr-fl-ma flexbox f-w-n-w j-c-c p-10px p-b-20px">
            <Btn
              className="w-200px m-w-100 bg-g-contents  p-l-20px p-r-20px p-10px m-5px f-w-bo br-s-solid br-c-white br-r-50px"
              text="Planes únicos"
              click={mostrarPlanesUnicos}
            ></Btn>
            <Btn
              className="w-200px m-w-100  bg-g-contents ns-bg-tone-1 p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              text="Planes mensuales"
              click={mostrarPlanesMensuales}
            ></Btn>
          </div>
        </div>

      {/* //! ----------------------------------------- MOSTRANDO PLANES UNICOS */}
      {mostrarUnicos && (
        <div id="planes-unicos" className="w-95 h-pr-fl-ma r-h-c bg-d m-b-20px">
          <PVContentsUnicos></PVContentsUnicos>
        </div>
      )}

      {/* //! ----------------------------------------- MOSTRANDO PLANES MENSUALES */}
      {mostrarMensuales && (
        <div id="planes-mensuales" className="w-95 h-pr-fl-ma r-h-c bg-d m-b-20px">
            <PVContentsMensuales></PVContentsMensuales>
        </div>
      )}
</div>

</div>

    </Fragment>
  )
}

export default Contents
