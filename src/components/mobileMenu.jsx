import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavBarBtn from "./navBarBtn";
import BannerMenu from "../assets/images/promo/casos-de-exito-banner-menu.gif";
import Btn from "./btn";

import { WhatsappIcon, Envelope } from "../components/icons";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <Fragment>
      <input
        type="checkbox"
        id="menu"
        checked={menuOpen}
        onChange={toggleMenu}
      />

      <div
        className={` menu-container  ${menuOpen ? "d-b" : "d-n"}  p-10px `}
        Style="position: fixed; left:0px; right:0px; bottom: 12%;  margin: auto;"
      >
        <div className="w-100 noselect   p-20px bg-d h-pr-fl-ma ns-br-r-2">
          <Link
            to="/team"
            className="h-e selected nav-link "
            onClick={handleLinkClick}
          >
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1 ">
              <NavBarBtn
              enlace="/team"
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo "
                text={"Nosotros"}
              ></NavBarBtn>
            </div>
          </Link>

          <Link
            to="/services"
            className="h-e selected nav-link"
            onClick={handleLinkClick}
          >
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1 ">
              <NavBarBtn
              enlace="/services"
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo "
                text={"Servicios"}
              ></NavBarBtn>
            </div>
          </Link>
          <Link
            to="/plans"
            className="h-e selected nav-link"
            onClick={handleLinkClick}
          >
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1 ">
              <NavBarBtn
              enlace="/plans"
                news
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo "
                text={"Planes"}
              ></NavBarBtn>
            </div>
          </Link>
          
          <Link
            to="/concepts"
            className="h-e selected nav-link"
            onClick={handleLinkClick}
          >
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1 ">
              <NavBarBtn
              enlace="/concepts"
                news
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo "
                text={"Conceptos +66"}
              ></NavBarBtn>
            </div>
          </Link>

          <Link
            to="/promo"
            className="h-e selected nav-link"
            onClick={handleLinkClick}
          >
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1 ">
              <NavBarBtn
              enlace="/promo"
                news
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo "
                text={"Promociones"}
              ></NavBarBtn>
            </div>
          </Link>

          <Link
            to="/promo"
            className="h-e selected  nav-link"
            onClick={handleLinkClick}
          >
            <div className="w-100 h-a h-pr-fl-ma p-b-10px p-t-10px ">
              <div className="m-t-20px w-100 h-100px h-pr-fl-ma t-a-c b-s-b-b hover-underline-animation ">
                <div className="h-pr-fl-ma w-a h-a centered ">
                  <img
                    src={BannerMenu}
                    className="w-100 h-100 h-pr-fl-ma"
                    Style="object-fit: contain;"
                    alt="Casos De Exito"
                  />{" "}
                </div>{" "}
              </div>
            </div>{" "}
          </Link>

          <Link
            to="/promo"
            className="h-e selected nav-link"
            onClick={handleLinkClick}
          >
            <div className="w-100 h-a h-pr-fl-ma flexbox f-w-n-w  ">
              <div className="w-50 p-5px h-a h-pr-fl-ma flexbox f-w-n-w  ">
                <Btn
                  enlace="mailto: hello@origenstudios.com"
                  className="w-100 h-100 bg-g-blue p-10px h-pr-fl-ma ns-br-r-1  "
                  text={"Email"}
                >
                  <div className="w-25px h-25px h-pr-fl-ma">
                    <img
                      className="w-100 h-100 h-pr-fl-ma "
                      Style="stroke: #ffffff !important;"
                      src={Envelope}
                      alt="Coordinar"
                    />{" "}
                  </div>
                </Btn>
              </div>
              <div className="w-50 p-5px h-a h-pr-fl-ma flexbox f-w-n-w  ">
                <Btn
                  enlace="https://wa.me/message/3J7NXI5ETDK7F1"
                  className="w-100 h-100 bg-g-green p-10px f-w-bo h-pr-fl-ma ns-br-r-1  "
                  text={"Whatsapp"}
                >
                  <div className="w-25px h-25px h-pr-fl-ma">
                    <img
                      className="w-100 h-100 h-pr-fl-ma "
                      Style="stroke: #ffffff !important;"
                      src={WhatsappIcon}
                      alt="Coordinar"
                    />{" "}
                  </div>
                </Btn>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
