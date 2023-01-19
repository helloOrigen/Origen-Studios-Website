import React, { Fragment } from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";
import NavBarBtn from "./navBarBtn";

export default function mobileMenu(props) {
  const { className } = props;

  return (
    <Fragment>
      <div
        className={` ${className}  d-n m-d-b of-auto bg-linear-b-t `}
        Style="position: fixed; left:0px; right:0px; top: 0px; bottom: 0px; z-index: 99998;"
      >
        <div className="w-100 h-a r-v-b  h-pr-fl-ma">
          <Link to="/team" className="h-e D">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation bg-linear-b-t "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Nosotros"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/team" className="h-e">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation bg-linear-b-t "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px"  text={"Estructura"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/services" className="h-e">
             
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation bg-linear-b-t "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Servicios"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/plans" className="h-e">
             
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation bg-linear-b-t "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Planes"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/plans" className="h-e">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation bg-linear-b-t "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Metodología"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/plans" className="h-e">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation bg-linear-b-t "
              Style="border-bottom: 1px solid; border-color: white;"
            >
              <NavBarBtn className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Parámetros"}></NavBarBtn>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
