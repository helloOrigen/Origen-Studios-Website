import React, { Fragment } from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";
import CardContainer from "./cardcontainer";
import Card from "./card";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Envelope from "../assets/icons/envelope.svg";
import Calendar from "../assets/icons/calendar.svg";

export default function ContactForm(props) {
  const { text, className, enlace, children } = props;

  return (
    <Fragment>
      <div className="w-100 h-a h-pr-fl-ma bg-black flexbox">
        <div className="w-100 h-a h-pr-fl-ma ">
          <div className="w-33 h-a h-pr-fl-ma p-5px">
           <Link to="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"><Card
              title="Agendar Reunion"
              type="ns-bg-e"
              titleStyle="font-size: 15px; line-height: 20px;"
              iconclassName="w-and-h-75px"
              titleclassName="f-w-bo"
              icon={` ${Calendar} `}
            /></Link>
          </div>
          <div className="w-33 h-a h-pr-fl-ma p-5px">
          <Link to="mailto:hello@origenstudios.com"> <Card
              title="Correo Electrónico"
              type="info"
              titleStyle="font-size: 15px; line-height: 20px;"
              iconclassName="w-and-h-75px"
              titleclassName="f-w-bo"
              icon={` ${Envelope} `}
            /></Link>
          </div>
          <div className="w-33 h-a h-pr-fl-ma p-5px">
          <Link to="https://wa.me/message/QEHFJE3NEAVTE1"><Card
              title="Contacto Whatsapp"
              type="ns-bg-green"
              titleStyle="font-size: 15px; line-height: 20px;"
              iconclassName="w-and-h-75px"
              titleclassName="f-w-bo"
              icon={` ${Whatsapp} `}
            /></Link>
          </div>
        </div>
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
