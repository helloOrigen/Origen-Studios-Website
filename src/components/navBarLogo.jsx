import React from "react";
import OSLogoSymbolSvg from "../assets/logo/OS-Logo-Symbol-White-Svg.svg";
import OSLogotipo from "../assets/logo/OS-logotipo-m-white-transparent_svg.svg";

export default function navBarLogo(props) {
  return (
    <>
      <div className="w-70px p-10px m-d-n tab-d-n h-100 h-pr-fl-ma noselect t-1s b-s-b-b ">
        <img
          className="w-100 h-50 bg-d h-pr-fl-ma"
          Style="object-fit: contain;"
          src={OSLogoSymbolSvg}
          alt="OS-LOGO"
        />{" "}
      </div>
      <div className="w-a  m-d-b tab-d-b d-n h-100 h-pr-fl-ma noselect t-1s b-s-b-b ">
        <img
          className="w-100 h-50 bg-d h-pr-fl-ma"
          Style="object-fit: contain;"
          src={OSLogotipo}
          alt="OS-LOGO"
        />{" "}
      </div>
    </>
  );
}
