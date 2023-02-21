import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ContentBox from "../components/contentBox";

import CardContainer from "../components/cardcontainer";
import Card from "../components/card";
import Pen from "../assets/icons/pen.svg";
import Code from "../assets/icons/code.svg";
import Briefcase from "../assets/icons/briefcase.svg";
import Terminal from "../assets/icons/terminal.svg";
import DocumentStack from "../assets/icons/document_stack.svg";
import Translate from "../assets/icons/translate.svg";
import VolumeHigh from "../assets/icons/volume_high.svg";
import BellRinging from "../assets/icons/bell_ringing.svg";




const Jobs = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b of-auto of-x-none">

      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b">
      <div className="w-50  m-w-100 m-h-40 h-100 h-pr-fl-ma b-s-b-b">
        <div className="w-100 h-a h-pr-fl-ma b-s-b-b  p-10px r-v-c">
          <div className="w-100 f-f-Gilroy f-w-bo   ns-f-s-big m-ns-f-s-medium ">
            NUESTRA <br />
            INSPIRACIÓN...
          </div>
          <div className="w-100 f-f-Gilroy f-w-bo  ns-c-e ns-f-s-big m-ns-f-s-medium ">
            TU CONOCIMIENTO
          </div>
        </div>
        </div>

        <div className="w-50 m-w-100 m-h-60 h-100 h-pr-fl-ma b-s-b-b of-auto f-f-Gilroy">
        <div className="w-100 h-a h-pr-fl-ma p-10px r-v-c">
          <div className="w-100 h-a h-pr-fl-ma">
   <ContentBox title="¿Estás disponible?" subtitle="¡Conocé nuestras vacantes disponibles!"></ContentBox>   </div>

   <div className="w-100 h-a h-pr-fl-ma  m-b-5px p-5px">
   <ContentBox text="• Haz click en el sector que más te represente"></ContentBox>   </div>

   <div className="w-100 h-a h-pr-fl-ma m-b-5px p-5px"><ContentBox text="• Completa nuestro formulario y postúlate ahora mismo!"></ContentBox></div>
   <div className="w-100 h-a h-pr-fl-ma  m-b-5px p-5px">
   <ContentBox text="En caso de no tener vacantes, contamos con nuestra lista de oportunidades para que otras empresas puedan saber de ti!"></ContentBox>
   
     
   </div>

  
   </div>
        </div>
      </div>

      <div className="w-100  h-a h-pr-fl-ma b-s-b-b p-50px of-n">
          <CardContainer >
            <Link className="h-e-scale" to="https://forms.gle/seue2ea7YTmRWrEo8" alt=""><Card title="Ventas" subtitle="Activo" icon={` ${Briefcase} `}/></Link>
            <Link className="h-e-scale"  to="https://forms.gle/n2S1AM6nRfqsZpT6A" alt=""><Card title="Marketing" subtitle="Activo" icon={` ${BellRinging} `}/></Link>
            <Link className="h-e-scale" to="https://forms.gle/ip6kQbCt54DsLace9" alt=""><Card title="Desarrollo" subtitle="Activo" icon={` ${Code} `}/></Link>
            <Link className="h-e-scale" to="https://google.com" alt=""><Card title="Diseño" icon={` ${Pen} `}/></Link>
            <Link className="h-e-scale" to="/jobs" alt=""><Card title="Testing" icon={` ${Terminal} `}/></Link>
            <Link className="h-e-scale" to="/jobs" alt=""><Card title="Redacción" icon={` ${DocumentStack} `}/></Link>
                <Link className="h-e-scale"  to="/jobs" alt=""><Card title="Prod. Sonora" icon={` ${VolumeHigh} `}/></Link>
                    <Link className="h-e-scale"  to="/jobs" alt=""><Card title="Traducción" icon={` ${Translate} `}/></Link>
          </CardContainer>
          </div>
      </div>
    </Fragment>
  );
};

export default Jobs;
