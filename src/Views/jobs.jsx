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
      <div className="w-60 m-w-100 m-h-40 h-100 h-pr-fl-ma b-s-b-b">
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

        <div className="w-40 m-w-100 m-h-60 h-100 h-pr-fl-ma b-s-b-b of-auto f-f-Gilroy p-10px  ">
        <div className="w-100 h-a h-pr-fl-ma p-10px r-v-c bg-black-node-o-70 blur ns-br-r-1">
       
   <ContentBox className="p-10px " title="¿Estás disponible?" subtitle="¡Conocé nuestras vacantes disponibles!"></ContentBox>   
   <div className="w-100 h-a h-pr-fl-ma p-l-30px p-r-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px h-pr-fl-ma w-a h-a m-b-20px ">
     
        <li type="disc">Haz click en el sector que más te represente</li>
        <li type="disc">Completa nuestro formulario y postúlate!</li>
      
      </ol>
    </div>
 <span className="w-100 h-a p-10px h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1">  En caso de no tener vacantes, contamos con nuestra lista de oportunidades para que otras empresas puedan saber de ti!</span>


   
   </div>
   </div>
     
   

     


      <div className="w-100  h-a h-pr-fl-ma b-s-b-b p-50px of-n">
          <CardContainer >
            <Link className="h-e-scale" to="" alt=""><Card title="Ventas"  icon={` ${Briefcase} `}/></Link>
            <Link className="h-e-scale"  to="" alt=""><Card title="Marketing"  icon={` ${BellRinging} `}/></Link>
            <Link className="h-e-scale" to="https://forms.office.com/r/HxdyDm49a7" alt=""><Card title="Desarrollo" subtitle="Activo" icon={` ${Code} `}/></Link>
            <Link className="h-e-scale" to="" alt=""><Card title="Diseño" icon={` ${Pen} `}/></Link>
            <Link className="h-e-scale" to="/jobs" alt=""><Card title="Testing" icon={` ${Terminal} `}/></Link>
            <Link className="h-e-scale" to="/jobs" alt=""><Card title="Redacción" icon={` ${DocumentStack} `}/></Link>
                <Link className="h-e-scale"  to="/jobs" alt=""><Card title="Prod. Sonora" icon={` ${VolumeHigh} `}/></Link>
                    <Link className="h-e-scale"  to="/jobs" alt=""><Card title="Traducción" icon={` ${Translate} `}/></Link>
          </CardContainer>
          </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Jobs;
