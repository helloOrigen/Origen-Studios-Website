import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NavBarLogo from '../components/navBarLogo'
import NavBarBtn from '../components/navBarBtn'
import Btn from '../components/btn'

const NavBar = () => {
  return (
    <Fragment>
      <div className="w-95 h-100 r-h-c h-pr-fl-ma d-i-f">
        <div className={{ width: '100px', maxWidth: '200px', height: 'auto', paddingRight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 30 }}>
          <Link to="/">
            <NavBarLogo />
          </Link>
        </div>
        <div className="w-100  h-pr-fl-ma  r-v-b f-w-n-w h-100  tab-d-n ">
          <NavBarBtn enlace="/team" className="m-d-n noselect h-e-style hover-underline-animation" text={'Nosotros'} />
          <NavBarBtn className="m-d-n noselect h-e-style hover-underline-animation" text={'Servicios'} enlace="/services" />
          <NavBarBtn enlace="/plans" className="m-d-n noselect h-e-style hover-underline-animation" text={'Planes'} />
          <NavBarBtn enlace="/concepts" className="m-d-n noselect h-e-style hover-underline-animation" text={'Conceptos'} news />
          <NavBarBtn className="m-d-n noselect h-e-style hover-underline-animation" enlace="/promo" text={'Promos'} news />
          <NavBarBtn enlace="https://behance.net/origenstudios" className="m-d-n noselect h-e-style hover-underline-animation" text={'Portfolios'} news />
        </div>

        {/* BOTON CONTACTO */}
        <div className="w-30 m-d-n h-pr-fl-ma h-100 tab-d-n ">
          <div className="w-a h-a h-pr-fr-ma r-v-c ">
            <Btn
              className="w-200px h-pr-fr-ma ns-bg-e p-l-20px p-r-20px p-10px  f-w-bo  br-s-solid  br-r-50px"
              enlace="https://wa.me/message/3J7NXI5ETDK7F1"
              text="Contacto"
            />
          </div>
        </div>
        {/*  <BtnModal></BtnModal> */}
      </div>
    </Fragment>
  )
}

export default NavBar
