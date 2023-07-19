import React, { Fragment, useState } from 'react'

import Title from '../components/title'
import Btn from '../components/btn'

import { PVIdentityUnicos, PVIdentityMensuales } from './index'

const Identity = () => {
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
           <div className="w-95 min-h-90vh r-h-c m-w-100 h-a h-pr-fl-ma noselect  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 h-a h-pr-fl-ma">
        <Title h4="Planes:" className="w-100 t-a-c m-t-100px ns-c-e"></Title>
        <Title
          h1="Construcción de Identidad"
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
              className="w-200px m-w-100 bg-g-identity  p-l-20px p-r-20px p-10px m-5px f-w-bo br-s-solid br-c-white br-r-50px"
              text="Planes al costo"
              click={mostrarPlanesUnicos}
            ></Btn>
            <Btn
              className="w-200px m-w-100  bg-g-identity ns-bg-tone-1 p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              text="Planes a presupuestar"
              click={mostrarPlanesMensuales}
            ></Btn>
          </div>
        </div>

      {/* //! ----------------------------------------- MOSTRANDO PLANES UNICOS */}
      {mostrarUnicos && (
        <div id="planes-unicos" className="w-95 h-pr-fl-ma r-h-c noselect bg-d m-b-20px">
          <PVIdentityUnicos></PVIdentityUnicos>
        </div>
      )}

      {/* //! ----------------------------------------- MOSTRANDO PLANES MENSUALES */}
      {mostrarMensuales && (
        <div id="planes-mensuales" className="w-95 h-pr-fl-ma r-h-c noselect bg-d m-b-20px">
          <PVIdentityMensuales></PVIdentityMensuales>
        </div>
      )}
         </div>  </div>
    </Fragment>
  )
}

export default Identity
