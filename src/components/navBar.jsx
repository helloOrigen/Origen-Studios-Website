import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NavBarLogo from '../components/navBarLogo'
import NavBarBtn from '../components/navBarBtn'
import Btn from '../components/btn'

const NavBar = () => {
  return (
    <Fragment>
      <div className="w-90 r-h-c m-w-100 h-100 h-pr-fl-ma   flexbox f-w-n-w">
        <div className="tab-w-50 m-w-50 w-a  h-pr-fl-ma">
          <Link to="/">
            <NavBarLogo className="h-pr-fl-ma m-d-b"/>
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
        <div className="m-w-50 tab-w-50 w-20 h-pr-fl-ma h-100 ">
          <div className="w-100 h-a h-pr-fl-ma r-v-c p-r-10px">
            <Btn
              className="w-200px h-pr-fr-ma ns-bg-e-animated p-l-20px p-r-20px p-10px  f-w-bo  br-s-solid  br-r-50px"
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
