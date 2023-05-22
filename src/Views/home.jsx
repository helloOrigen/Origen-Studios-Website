import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../components/btn";
import ContentBox from "../components/contentBox";
import MessageWriting from "../assets/icons/message_writing.svg";
import ClipboardNotes from "../assets/icons/clipboard-notes.svg";
import Wallet from "../assets/icons/wallet.svg";
import CheckCircle from "../assets/icons/check-circle.svg";
import ContactForm from "../components/formtest.jsx";
import OSChat from "../assets/images/views/home/os-chat.webp";

import MultimediaAssets from "../assets/icons/multimedia_assets.svg";
import CardContainer from "../components/cardcontainer";
import Card from "../components/card";

import Promo1 from "../assets/images/promo/promo-1.jpg";
import Promo2 from "../assets/images/promo/promo-2.jpg";
import Behance from "../assets/images/promo/behance.jpg";
import OSJobs from "../assets/images/promo/os-jobs.jpg";
import PromoHome from "../assets/images/compressed/promo-home.jpg";


import "../Styles/seed.css";
import "../Styles/home.css";

export default function Home(props) {
  var app = document.getElementById("app");

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  });

  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b  of-x-auto f-f-Gilroy c-white">

  


      <div className="w-50 m-w-100 h-100 h-pr-fl-ma  b-s-b-b"> 
      <div className="centered  ">
      <span className="ns-f-s-big f-f-Gilroy  h-pr-fl-ma">Creamos todo tu</span>
      <span className="ns-f-s-big f-f-Gilroy f-w-bo h-pr-fl-ma ns-c-e m-b-10px">ecosistema digital</span>

      <div className="w-100 h-pr-fl-ma  b-s-b-b flexbox f-w-w ">
        <span className="m-5px p-5px ns-f-s-normal f-w-bo bg-black">LOGOTIPOS</span>
        <span className="m-5px p-5px ns-f-s-normal f-w-bo bg-black">IDENTIDAD PARA REDES</span>
        <span className="m-5px p-5px ns-f-s-normal f-w-bo bg-black">POST PARA REDES</span>
        <span className="m-5px p-5px ns-f-s-normal f-w-bo bg-black">EMAILS PROMOCIONALES</span>
        <span className="m-5px p-5px ns-f-s-normal f-w-bo bg-black">CONTENIDO PARA VIDEOS</span>
        <span className="m-5px p-5px ns-f-s-normal f-w-bo bg-black">REDACCIÓN</span>
        <span className="m-5px p-5px ns-f-s-normal f-w-bo bg-black">TRADUCCIÓN</span>
      </div>
      <div className="w-a h-pr-fl-ma p-10px m-t-5px flexbox">
      <Btn text="Enviar Email" enlace="mailto:hello@origenstudios.com"className="m-r-10px p-10px  ns-f-s-medium ns-bg-skyblue f-w-bo"></Btn>
      <Btn text="Agendar reunión" enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/" className="m-r-10px p-10px ns-f-s-medium ns-bg-violet f-w-bo"></Btn>
   <Btn text="Contacto Whatsapp" enlace="https://wa.me/message/QEHFJE3NEAVTE1" className="m-r-10px p-10px ns-f-s-medium ns-bg-green f-w-bo"></Btn>

      </div>
      </div>
      </div>






      <div className="w-50 m-w-100 h-100 h-pr-fl-ma  b-s-b-b"> 
      <div className="w-80 m-w-100 centered bg-black b-s-b-b p-20px">
      <span className="w-100 h-pr-fl-ma ns-f-s-medium f-f-Gilroy f-w-bo m-b-20px">Descarga nuestro documento al que actualizamos periodicamente para que veas todo lo que podemos hacer por ti!</span>
      <div className="w-100 h-pr-fl-ma  r-h-c"> <img
                src={PromoHome}
                alt=""
                className="w-100  h-pr-fl-ma "
                Style="object-fit: cover; border: #ffc666 solid 2px;"
              /></div>
              <div className="w-100 h-pr-fl-ma  p-10px m-t-5px">
      <Btn text="Solicitar preview V 1.0.0" enlace="https://wa.me/message/QEHFJE3NEAVTE1" className="p-10px ns-f-s-medium ns-bg-e f-w-bo"></Btn>
      </div>
      </div>
    
      </div>
        
        
        
        
        
       
      </div>
    </Fragment>
  );
}
