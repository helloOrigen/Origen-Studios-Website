import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBarLogo from "../components/navBarLogo";
import NavBarBtn from "../components/navBarBtn";
import "../Styles/home.css";

const navBar = () => {
  return (
    <Fragment>
      <div className="w-90 h-100 r-h-c h-pr-fl-ma">
        <Link to="/">
          <NavBarLogo right />
        </Link>
        <Link to="/team">
          <NavBarBtn className="m-d-n" text={"Nosotros"}></NavBarBtn>
        </Link>
        <Link to="">
        <NavBarBtn className="m-d-n" text={"Estructura"}></NavBarBtn></Link>
        <Link to="/services">
           
          <NavBarBtn className="m-d-n" text={"Servicios"}></NavBarBtn>
        </Link>
        <Link to="/plans">
           
          <NavBarBtn className="m-d-n" text={"Planes"}></NavBarBtn>
        </Link>
        <Link to="/process"><NavBarBtn className="m-d-n" text={"Procedimiento"}></NavBarBtn></Link>
        <Link to="/gallery"><NavBarBtn className="m-d-n" text={"Galería"}></NavBarBtn></Link>
      </div>
    </Fragment>
  );
};

export default navBar;
