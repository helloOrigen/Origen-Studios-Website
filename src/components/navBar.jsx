import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import NavBarBtn from "./navBarBtn";
import NavBarLogo from "./navBarLogo";


import "../Styles/seed.css";

export default function navBar(props) {
  const {  } = props;

  return (
    <Fragment>
      <div className="w-90 h-100 r-h-c h-pr-fl-ma">
          <Link to="/"><NavBarLogo right/></Link>
            <Link to="/team"><NavBarBtn className="m-d-n" text={"Nosotros"}></NavBarBtn></Link>
            <NavBarBtn className="m-d-n" text={"Estructura"}></NavBarBtn>
           <Link to="/services"> <NavBarBtn className="m-d-n" text={"Servicios"}></NavBarBtn></Link>
           <Link to="/plans"> <NavBarBtn className="m-d-n" text={"Planes"}></NavBarBtn></Link>
            <NavBarBtn className="m-d-n" text={"Metodología"}></NavBarBtn>
            <NavBarBtn className="m-d-n" text={"Parámetros"}></NavBarBtn>

    
          </div>
      
    
    </Fragment>
  );
}
