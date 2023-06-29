import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import OSLogotipo from "../assets/logo/OS-logotipo-m-white-transparent_svg.svg";

import Close from "../assets/icons/close.svg";
import ChervronUpDouble from "../assets/icons/chevron_up_double.svg";
import ChervronLeft from "../assets/icons/chevron_left.svg";
import Home from "../assets/icons/home.svg";

import MobileBtnMenu from "../assets/components/SVG/mobile-btn-menu.svg";

const Footer = ({ className }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <div
        className={` ${className} h-pr-fl-ma w-80  h-100 b-s-b-b f-f-Gilroy `}
      >
        {/* Footer */}
        <div
          className="w-100 r-h-c h-100 h-pr-fl-ma b-s-b-b "
          Style="font-size: 10px; color: white; line-height: 15px; "
        >
          {" "}
          {/* Block 1 --------------- */}
          <div className="noselect w-80 m-d-n h-100 flexbox b-s-b-b h-pr-fl-ma ">
            {/* Bloque 1 - 25% height */}
            <div className="w-a h-a h-pr-fl-ma noselect ">
              <b>
                OrigenStudios<sup Style="font-size:75%;  top: -0.28em;">®</sup>
              </b>
              &zwj;&nbsp;Somos&zwj;&nbsp;&zwj;el&zwj;&nbsp;&zwj;origen&zwj;&nbsp;&zwj;de&zwj;&nbsp;&zwj;su&zwj;&nbsp;&zwj;marca.
            </div>

            {/* Bloque 2 - 25% height */}
            <div className="w-a h-a h-pr-fl-ma noselect  hover-underline-animation">
              <Link className="w-a h-a  h-pr-fl-ma" to="/jobs">
                2023&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;©&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;Todos&nbsp;&zwj;los&nbsp;&zwj;derechos&nbsp;&zwj;reservados.
              </Link>
            </div>

            {/* Block 3 --------------- */}

            <div className="w-a h-a h-pr-fl-ma noselect hover-underline-animation">
              <a
                className="h-pr-fl-ma w-a h-a"
                href="mailto:hello@origenstudios.com"
                alt="Comuníquese con nosotros!"
              >
                hello@origenstudios.com{" "}
              </a>
            </div>

            {/* Block 4 --------------- */}
            <div className="w-a h-a h-pr-fl-ma noselect hover-underline-animation">
              <Link className="w-a h-a h-pr-fl-ma" to="/privacy">
                Políticas & Términos.
              </Link>
            </div>
          </div>
          {/* Block 5 DESKTOP ONLY --------------- */}
          <div className="noselect m-d-n  w-20 h-100 b-s-b-b h-pr-fl-ma ">
            <div className="h-pr-fr-ma w-100 h-100 t-1s b-s-b-b">
              <div className="h-pr-fl-ma w-100 h-35px  r-v-c flexbox">
                <img
                  className=" h-80  h-pr-fr-ma  draw "
                  Style="object-fit: cover;  width: 170px;"
                  src={OSLogotipo}
                  alt="OS-LOGOTIPO"
                />
              </div>
            </div>
          </div>
          {/* --------------- Block 5*/}
          {/* MOBILE ONLY */}
          {/* Block 5 --------------- */}
          {/* ---------------  Block 5 */}
          {/* Hamburger Menu Button --------------- */}
          <div className="d-n m-d-b w-100 h-100 h-pr-fl-ma r-h-c  b-s-b-b">
            <div className="w-100 h-70px h-pr-fl-ma r-v-b ">
              <div
                className=" t-a-c f-f-Gilroy f-w-bo"
                Style="width: 100%; height: 30px; background: #000000; color: #666666; position: absolute; margin: auto; bottom: 0px; left: 0px; right: 0px;"
              >
                <span Style="bottom: 0px; margin: auto; position: absolute; left: 0px; right: 0px;">
                  OrigenStudios<sup>&reg;</sup>{" "}
                </span>{" "}
              </div>
              <div className="w-40 h-100 h-pr-fl-ma ">
                <Link to="">
                  <div
                    className="w-100 h-100 h-pr-fl-ma MobileMenuBtnLeft h-e c-p"
                    Style="background: #000000;"
                  >
                    <div className="centered h-a w-a f-f-Gilroy c-white ns-f-s-normal f-w-bo flexbox ">
                      {" "}
                      <img
                        src={ChervronLeft}
                        className="w-and-h-25px  h-pr-fl-ma m-l-5px"
                        alt="Inicio"
                      />
                      <span className="w-a h-a  h-pr-fl-ma t-a-c">Volver</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-20 h-100 h-pr-fl-ma  ">
                <div
                  className={`w-150px r-h-c h-60px h-pr-fl-ma menu-wrapper  ${
                    open ? "menu-open" : ""
                  }`}
                  onClick={handleOpen}
                >
                  <label
                    htmlFor="menu"
                    className="w-100 r-h-c h-100 h-pr-fl-ma c-p h-e "
                    onClick={handleOpen}
                  >
                    <img
                      src={MobileBtnMenu}
                      className="w-150px r-h-c h-60px   of-v"
                      Style=" position: absolute;"
                      alt="Menu"
                    />
                    <div className="w-150px h-a r-h-c h-pr-fl-ma flexbox">
                      <img
                        src={open ? Close : ChervronUpDouble}
                        className="w-and-h-50px h-pr-fl-ma p-t-8px"
                        alt="Menu"
                        Style={{ stroke: open ? "#FF0000" : "#666666" }}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="w-40 h-100 h-pr-fl-ma ">
                <div
                  className="w-100 h-100 h-pr-fl-ma MobileMenuBtnRight h-e c-p"
                  Style="background: #000000;"
                >
                  {" "}
                  <Link to="/">
                    <div className="centered h-a w-a f-f-Gilroy c-white ns-f-s-normal f-w-bo flexbox ">
                      {" "}
                      <img
                        src={Home}
                        className="w-and-h-25px  h-pr-fl-ma m-r-5px"
                        alt="Inicio"
                      />
                      <span className="w-a h-a  h-pr-fl-ma t-a-c">Inicio</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* -------------- Hamburger Menu Button */}
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
