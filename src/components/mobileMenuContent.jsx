import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavBarBtn from "./navBarBtn";
import BannerMenu from "../assets/images/promo/casos-de-exito-banner-menu.gif";
import Btn from "./btn";

import { WhatsappIcon, EnvelopeIcon } from "./icons";

const MobileMenuContent = ({ className, open }) => {
  const handleLinkClick = () => {
    // Aquí puedes realizar las acciones necesarias al hacer clic en un enlace del menú
  };

  return (
    <Fragment>
      {open && (
        <div
          className={`menu-container  d-b p-10px ${className}`}
          style={{
            position: "fixed",
            left: "0px",
            right: "0px",
            bottom: "12%",
            margin: "auto",
            zIndex: "99999",
          }}
        >
          <div className="w-100 noselect p-20px bg-d h-pr-fl-ma ns-br-r-2">
            {/* Contenido del menú móvil */}
            <Link to="/team" className="h-e selected nav-link" onClick={handleLinkClick}>
              <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1">
                <NavBarBtn
                  enlace="/team"
                  className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo"
                  text={"Nosotros"}
                />
              </div>
            </Link>

            <Link to="/services" className="h-e selected nav-link" onClick={handleLinkClick}>
              <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1">
                <NavBarBtn
                  enlace="/services"
                  className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo"
                  text={"Servicios"}
                />
              </div>
            </Link>

          <Link to="/plans" className="h-e selected nav-link" onClick={handleLinkClick}>
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1">
              <NavBarBtn
                enlace="/plans"
                news
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo"
                text={"Planes"}
              />
            </div>
          </Link>

          <Link to="/concepts" className="h-e selected nav-link" onClick={handleLinkClick}>
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1">
              <NavBarBtn
                enlace="/concepts"
                news
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo"
                text={"Conceptos +66"}
              />
            </div>
          </Link>

          <Link to="/promo" className="h-e selected nav-link" onClick={handleLinkClick}>
            <div className="w-100 h-a h-pr-fl-ma bg-d ns-br-r-1">
              <NavBarBtn
                enlace="/promo"
                news
                className="b w-100 h-100 h-pr-fl-ma p-15px f-w-bo"
                text={"Promociones"}
              />
            </div>
          </Link>

          <Link to="/promo" className="h-e selected nav-link" onClick={handleLinkClick}>
            <div className="w-100 h-a h-pr-fl-ma p-b-10px p-t-10px">
              <div className="m-t-20px w-100 h-100px h-pr-fl-ma t-a-c b-s-b-b hover-underline-animation">
                <div className="h-pr-fl-ma w-a h-a centered">
                  <img
                    src={BannerMenu}
                    className="w-100 h-100 h-pr-fl-ma"
                    style={{ objectFit: "contain" }}
                    alt="Casos De Exito"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/promo" className="h-e selected nav-link" onClick={handleLinkClick}>
            <div className="w-100 h-a h-pr-fl-ma flexbox f-w-n-w">
              
              <div className="w-100 p-5px h-a h-pr-fl-ma flexbox f-w-n-w">
                <Btn
                  enlace="https://wa.me/message/3J7NXI5ETDK7F1"
                  className="w-100 h-100 bg-g-green p-15px f-w-bo h-pr-fl-ma ns-br-r-1"
                  text={"Whatsapp"}
                >
                 
                </Btn>
              </div>
            </div>
          </Link>

  
        </div>
        </div>
      )}
    </Fragment>
  );
};

export default MobileMenuContent;