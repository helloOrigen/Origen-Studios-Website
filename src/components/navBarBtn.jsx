import React from "react";
import "../Styles/seed.css";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import BehanceIcon from "../assets/icons/behance-icon.svg";

export default function navBarBtn(props) {
  const { text, className, children, news, enlace, Linkedin, Facebook, Twitter, Behance, Instagram } = props;

  return (
    <>
      <div
        className={` ${className} h-pr-fl-ma w-a h-100  h-e c-p  b-s-b-b `}
      >
        <div className="w-a h-a noselect h-pr-fl-ma flexbox r-v-c f-w-n-w">
       
        <div
          className="t-a-c f-f-Gilroy noselect c-white h-e-style hover-underline-animation"
          Style="font-size: 15px; line-height: 20px;"
        >
          <a href={`${enlace}`} className="h-e c-p">
          { Linkedin && (  <img alt="Linkedin" className="w-40px h-40px h-pr-fl-ma p-5px"
             src={LinkedinIcon} /> )}
              { Instagram && (  <img alt="Instagram" className="w-40px h-40px h-pr-fl-ma p-5px"
             src={InstagramIcon} /> )}
              { Twitter && (  <img alt="Twitter" className="w-40px h-40px h-pr-fl-ma p-5px"
             src={TwitterIcon} /> )}
              { Facebook && (  <img alt="Facebook" className="w-40px h-40px h-pr-fl-ma p-5px"
             src={FacebookIcon} /> )}
              { Behance && (  <img alt="Behance" className="w-40px h-40px h-pr-fl-ma p-5px"
             src={BehanceIcon} /> )}
             {text}
            {children}
            
          </a>
        </div>
        {news && ( <div className="w-a h-15px noselect m-l-5px m-t-4px p-l-5px p-r-5px p-t-3px h-pr-fl-ma f-f-Gilroy c-white  ns-f-s-small ns-bg-e f-w-bo ghost">NUEVO</div> )}
        </div>
      </div>
    </>
  );
}
