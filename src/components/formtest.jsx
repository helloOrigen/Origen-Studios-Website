import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Envelope from "../assets/icons/envelope.svg";
import Calendar from "../assets/icons/calendar.svg";

export default function ContactForm(props) {
  const { text, className, enlace, children } = props;

  return (
    <Fragment>
      <div className="w-100 h-a h-pr-fl-ma bg-black flexbox a-i-c p-20px">
      
       
            <Link to="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/" >
            <div className=" nano ns-br-r-1 of-h default w-100px" Style=" margin: auto;">
              <div className="w-100 h-100 h-pr-fl-ma ns-bg-e ">
                <span className="w-100 h-a h-pr-fl-ma p-t-20px p-10px">
                  <img src={Calendar} className="w-and-h-70px" alt="Calendar" />
                </span>
                <span className="w-100 h-a h-pr-fl-ma t-a-c m-ns-f-s-normal f-f-Gilroy p-10px f-w-bo">
                  Coordinar
                  <br />
                  Reunión
                </span>
              </div></div>
            </Link>
    
          
            <Link to="mailto:hello@origenstudios.com">
              
              <div className=" nano ns-br-r-1 of-h default  w-100px" Style=" margin: auto;">
                <div className="w-100 h-100 h-pr-fl-ma info ">
                  <span className="w-100 h-a h-pr-fl-ma p-t-20px p-10px">
                    <img src={Envelope} className="w-and-h-70px" alt="Envelope" />
                  </span>
                  <span className="w-100 h-a h-pr-fl-ma t-a-c m-ns-f-s-normal f-f-Gilroy p-10px f-w-bo">
                    Correo
                    <br />
                    Electrónico
                  </span>
                </div>
              </div>
            </Link>
         
            <Link to="https://wa.me/message/QEHFJE3NEAVTE1">
              <div className=" nano ns-br-r-1 of-h default  w-100px" Style=" margin: auto;">
                <div className="w-100 h-100 h-pr-fl-ma ns-bg-green ">
                  <span className="w-100 h-a h-pr-fl-ma p-t-20px p-10px">
                    <img src={Whatsapp} className="w-and-h-70px" alt="Whatsapp" />
                  </span>
                  <span className="w-100 h-a h-pr-fl-ma t-a-c m-ns-f-s-normal f-f-Gilroy p-10px f-w-bo">
                    Contacto
                    <br />
                    Whatsapp
                  </span>
                </div>
              </div>
            </Link>
         
        
      </div>
      <div className="w-100 h-a h-pr-fl-ma p-10px ">
        {" "}
        <span className="w-100 r-h-c h-a h-pr-fl-ma bg-black f-w-bo ns-br-r-1 f-f-Gilroy t-a-c ns-c-green p-10px ns-br-1">
          Sin suscripciones, contacto 100% humano.
        </span>
      </div>
    </Fragment>
  );
}
