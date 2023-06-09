import React, { Fragment, useState } from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";
import NavBarBtn from "./navBarBtn";
import "../Styles/home.css";
import BannerMenu from "../assets/images/promo/casos-de-exito-banner-menu.gif";

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
    
    <div className={` menu-container  ${menuOpen ? "d-b" : "d-n"}  p-20px `}  Style="position: fixed; left:0px; right:0px; bottom: 12%;  margin: auto;" >
                
            <div className="w-100  p-20px bg-d h-pr-fl-ma">
              <Link
                to="/team"
                className="h-e selected nav-link"
                onClick={handleLinkClick}
              >
                <div
                  className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
                  Style="border-bottom: 1px solid; border-color: #666666;"
                >
                  <NavBarBtn
                    className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px"
                    text={"Nosotros"}
                  ></NavBarBtn>
                </div>
              </Link>

              <Link
                to="/services"
                className="h-e selected nav-link"
                onClick={handleLinkClick}
              >
                {" "}
                <div
                  className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
                  Style="border-bottom: 1px solid; border-color: #666666;"
                >
                  <NavBarBtn
                    className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px"
                    text={"Servicios"}
                  ></NavBarBtn>
                </div>
              </Link>
              <Link
                to="/plans"
                className="h-e selected nav-link"
                onClick={handleLinkClick}
              >
                {" "}
                <div
                  className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
                  Style="border-bottom: 1px solid; border-color: #666666;"
                >
                  <NavBarBtn
                    className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px"
                    text={"Planes"}
                  ></NavBarBtn>
                </div>
              </Link>
              <Link
                to="/process"
                className="h-e selected  nav-link"
                onClick={handleLinkClick}
              >
                <div
                  className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
                  Style="border-bottom: 1px solid; border-color: #666666;"
                >
                  <NavBarBtn
                    className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px"
                    text={"Procedimiento"}
                  ></NavBarBtn>
                </div>
              </Link>
              <Link
                to="/gallery"
                className="h-e selected nav-link"
                onClick={handleLinkClick}
              >
                <div
                  className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
                  Style="border-bottom: 1px solid; border-color: #666666;"
                >
                  <NavBarBtn
                    news
                    className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px"
                    text={"Galería"}
                  ></NavBarBtn>
                </div>
              </Link>

              <Link
                to="/promo"
                className="h-e selected nav-link"
                onClick={handleLinkClick}
              >
                <div
                  className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
                  Style="border-bottom: 1px solid; border-color: #666666;"
                >
                  <NavBarBtn
                    news
                    className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px b"
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
            </div>
          
      
      </div>
    </Fragment>
  );
};

export default MobileMenu;
