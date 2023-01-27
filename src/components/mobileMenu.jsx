import React, { Fragment,useState} from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";
import NavBarBtn from "./navBarBtn";
import NavBarLogo from "./navBarLogo";
import "../Styles/home.css";

 const mobileMenu=()=> {
  
  

  return (

    <Fragment>
<div className="d-n m-d-b of-auto  " Style="position: fixed; left:0px; right:0px; top: 0px; bottom: 0px; z-index: 99998;">


  <input type="checkbox" id="menu"/>
  <ul>
  <div
        className={`  d-n m-d-b of-auto  m-5px bg-linear-b-t`}
        Style="position: fixed; left:0px; right:0px; top: 0px; bottom: 0px; z-index: 99998;"
      >
        <div className="w-100 h-a r-v-b  h-pr-fl-ma">
          <Link to="/team" className="h-e D">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Nosotros"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/team" className="h-e">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px"  text={"Estructura"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/services" className="h-e">
            {" "}
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Servicios"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/plans" className="h-e">
            {" "}
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Planes"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/plans" className="h-e">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Metodología"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/plans" className="h-e">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px b" text={"Parámetros"}></NavBarBtn>
            </div>
          </Link>
          <div
className="w-100 h-a h-pr-fl-ma p-b-20px p-t-20px "

><div className="m-t-20px m-b-30px w-100 h-100px h-pr-fl-ma t-a-c b-s-b-b hover-underline-animation " Style="border: 1px solid; border-color: white;"><div className="h-pr-fl-ma w-a h-a centered ">Proximamente Banner Promo</div> </div></div>
        </div>
    </div>
    </ul>

</div>
   </Fragment>
  );
}


export default mobileMenu