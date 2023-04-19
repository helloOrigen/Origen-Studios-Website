import React, { Fragment } from "react";

import PostExample from "../assets/images/views/plans/posts/os-post-perspectiva.webp";
import MessageWriting from "../assets/icons/message_writing.svg";
import Despegue from "../assets/images/views/home/OS-behance-1080x1080.webp";
import Btn from "../components/btn";

const Identity = () => {
  return (
    <Fragment>
           
          <div className="w-100 h-100 h-pr-fl-mans-br-r-1 p-10px b-s-b-b">
            <div className="w-100 h-a   h-pr-fl-ma d-i-f m-d-b">
            <div className="w-40 m-w-100 h-100 h-pr-fl-ma p-10px bg-black-node-o-50 blur ns-br-r-1 ">
          <div className="w-100 h-100 h-pr-fl-ma of-h">
            <div className="w-100 h-100 h-pr-fl-ma p-20px bg-blur f-f-Gilroy">
            <span className="w-100 h-pr-fl-ma ns-f-s-normal f-w-bo ns-c-green">Creamos & Actualizamos...</span>
              <div className="w-100 h-pr-fl-ma ns-f-s-big " Style="line-height: 65px; "><span className="UnderLineText f-w-bo  text-effect-shadow ">Despegue <br />su marca!</span></div>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal f-w-bo m-b-20px m-t-20px ns-c-e">¡Nos encargamos de todo!</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Logotipo / Isotipo / Imagotipo /Imagologo</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Gestor colorimétrico de 3 bases</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Tipografía gratuita / premium</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Manual de uso funcional / básico / avanzado</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Assets preparados en JPG / PNG / SVG</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Mockups funcionales para publiidad</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Plan de crecimiento de marca</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Generación de imágenes con IA</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Descripcióm de marca profesional</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo ">• Hashtags en tendencia de su sector</span>
              <span className="w-100 h-pr-fl-ma ns-f-s-normal  f-w-bo m-b-20px m-t-20px ns-c-e ">Mucho... mucho más...</span>
            
            </div>
            <div className="w-100 h-a h-pr-fl-ma p-l-10px bg-black ns-br-r-1 flexbox p-20px">
            <span className="w-100 h-pr-fl-ma ns-f-s-normal f-w-bo f-f-Gilroy c-white">¡Animate & agendá tu reunión con nuestro equipo hoy mismo!</span>

                        <Btn
                          className=""
                          text="Coordinar reunión"
                          enlace={
                            "https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                          }
                        >
                          <div className="w-25px h-25px m-5px h-pr-fl-ma">
                            <img
                              src={MessageWriting}
                              className="w-100 h-100 h-pr-fl-ma"
                              Style="stroke: #ffffff !important; "
                              alt="Coordinar"
                            />
                          </div>
                        </Btn>
                        </div>
                      </div>
          </div>

          <div className="w-60 m-w-100 h-100 h-pr-fl-ma  p-10px b-s-b-b p-10px of-h"> 
          <div className="w-100 r-h-c h-a h-pr-fl-ma ">
        
         <img
             src={Despegue}
             className="w-100 h-a"
             Style="object-fit: contain;"
            alt="Ejemplos Posts"
   
           />
           </div>
          </div>

          </div>


            </div>
 
      
    </Fragment>
  );
};

export default Identity;