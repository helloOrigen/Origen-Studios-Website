import React from "react";

import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import BehanceIcon from "../assets/icons/behance-icon.svg";
import WhatsappIcon from "../assets/icons/whatsapp-icon.svg";





export default function navBarBtn(props) {
  const { text, className, children, news, enlace, Linkedin, Facebook, Twitter, Behance, Whatsapp, Instagram } = props;

  return (
    <>
      <div
        className={` ${className}   d-v-on-h-container  h-e-style hover-underline-animation w-auto h-pr-fl-ma h-100 c-p  b-s-b-b`} 
      >
         
        <div className="w-a h-100  p-l-5px p-r-5px noselect h-pr-fl-ma  flexbox f-w-n-w a-i-c">

        <div
          className="w-a h-a noselect c-white  f-f-Gilroy flexbox r-h-c f-w-n-w "
          Style="font-size: 15px; line-height: 20px;"
        >
          <a href={`${enlace}`} className="noselect h-auto">
          { Linkedin && (  <img alt="Linkedin" className="w-40px h-40px h-pr-fl-ma p-2px"
             src={LinkedinIcon} /> )}
              { Instagram && (  <img alt="Instagram" className="w-40px h-40px h-pr-fl-ma p-2px"
             src={InstagramIcon} /> )}
              { Twitter && (  <img alt="Twitter" className="w-40px h-40px h-pr-fl-ma p-2px"
             src={TwitterIcon} /> )}
              { Facebook && (  <img alt="Facebook" className="w-40px h-40px h-pr-fl-ma p-2px"
             src={FacebookIcon} /> )}
              { Behance && (  <img alt="Behance" className="w-40px h-40px h-pr-fl-ma p-2px"
             src={BehanceIcon} /> )}
             { Whatsapp && (  <img alt="Whatsapp" className="w-40px h-40px h-pr-fl-ma p-2px"
             src={WhatsappIcon} /> )}
             {text}
        
            
          </a>
          {news && ( <div className="w-auto h-15px noselect m-l-5px m-t-4px p-l-5px p-r-5px p-t-3px h-pr-fl-ma f-f-Gilroy c-white  ns-f-s-small ns-bg-e f-w-bo ghost">NUEVO</div> )}
        </div>
     
        
        </div>
        <div className="w-auto max-w-250px bg-d h-auto pf d-v-on-h menu-container m-a  t-70px of-h b-s-b-b">{children}</div>
      </div>

   
    </>
  );
}
