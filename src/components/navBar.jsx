import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBarLogo from "../components/navBarLogo";
import NavBarBtn from "../components/navBarBtn";
import "../Styles/home.css";
import BtnModal from "../components/btnModal";


const navBar = () => {
  return (
    <Fragment>
      <div className="w-90 h-100 r-h-c h-pr-fl-ma  of-h">
        <Link to="/">
          <NavBarLogo right />
        </Link>
        <Link to="/team">
          <NavBarBtn className="p-10px m-d-n noselect" text={"Nosotros"}></NavBarBtn>
        </Link>
        
        <Link to="/services">
           
          <NavBarBtn className="p-10px m-d-n noselect" text={"Servicios"}></NavBarBtn>
        </Link>
        <Link to="/plans">
           
          <NavBarBtn className="p-10px m-d-n noselect" text={"Planes"}></NavBarBtn>
        </Link>
        <Link to="/process"><NavBarBtn className="p-10px m-d-n noselect" text={"Procedimiento"}></NavBarBtn></Link>
        <Link to="/gallery"><NavBarBtn className="p-10px m-d-n noselect" text={"Galería"}></NavBarBtn></Link>
    
        <Link to="/promo"><NavBarBtn className="p-10px m-d-n noselect" text={"Promos"} news></NavBarBtn></Link>
        <Link to="/sponsors"><NavBarBtn className="p-10px m-d-n noselect" text={"Sponsors"} news></NavBarBtn></Link>
       
   {/* REDES SOCIALES */}
  
          <NavBarBtn className="m-d-n h-pr-fr-ma noselect" Linkedin enlace="https://www.linkedin.com/company/helloorigen/"></NavBarBtn>
          <NavBarBtn className="m-d-n h-pr-fr-ma noselect" Instagram enlace="https://www.instagram.com/helloorigen"></NavBarBtn>
          <NavBarBtn className="m-d-n h-pr-fr-ma noselect" Facebook enlace="https://www.facebook.com/helloorigen/"></NavBarBtn>
          <NavBarBtn className="m-d-n h-pr-fr-ma noselect" Twitter enlace="https://www.twitter.com/helloorigen/"></NavBarBtn>
          <NavBarBtn className="m-d-n h-pr-fr-ma noselect" Whatsapp enlace=""></NavBarBtn>
         {/*  <BtnModal></BtnModal> */}
      </div>
    </Fragment>
  );
};

export default navBar;
