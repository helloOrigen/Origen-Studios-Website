import React from "react";

import "../Styles/seed.css";
import ContentBox from "../components/contentBox";


import ColorsWpp from "../assets/images/compressed/colors.jpg";
import Marketing from "../assets/images/compressed/marketing.jpg";
import Reclutamiento from "../assets/images/compressed/reclutamiento.jpg";
import Asesora from "../assets/images/compressed/asesora.jpg";

export default function Services(props) {
  return (
    <>
      <div className="w-90 r-h-c m-w-100 h-a h-pr-fl-ma flexbox m-d-b p-20px b-s-b-b m-t-20px m-b-20px">
        <div className="w-25 m-w-100 m-h-400px  h-70vh h-pr-fl-ma bg-d   of-h">
          {" "}
          <div className=" w-100 h-100 p-a m-a b-s-b-b of-n p-10px">
            <img
              src={ColorsWpp}
              alt="Diseño"
              className="w-100 h-100  m-a b-s-b-b h-e-scale "
              Style="object-fit: cover;"
            />{" "}
          </div>
          <div className="w-100 h-a p-a f-f-Gilroy ns-f-s-medium p-5px b-0px">
            <div className="w-100 h-100 h-pr-fl-ma bg-d p-5px f-w-bo t-a-c ">
              DISEÑO
              <br />
              GRÁFICO
            </div>
          </div>
        </div>
        <div className="w-25 m-w-100 m-h-400px m-h-a  h-70vh h-pr-fl-ma bg-d   of-h">
          {" "}
          <div className=" w-100 h-100 p-a m-a b-s-b-b of-n p-10px">
            <img
              src={Marketing}
              alt="Marketing"
              className="w-100 h-100  m-a b-s-b-b h-e-scale "
              Style="object-fit: cover;"
            />{" "}
          </div>
          <div className="w-100 h-a p-a f-f-Gilroy ns-f-s-medium p-5px b-0px">
            <div className="w-100 h-100 h-pr-fl-ma bg-d p-5px f-w-bo t-a-c ">
              MARKETING
              <br />
              DIGITAL
            </div>
          </div>
        </div>
        <div className="w-25 m-w-100 m-h-400px m-h-a  h-70vh h-pr-fl-ma bg-d   of-h">
          {" "}
          <div className=" w-100 h-100 p-a m-a b-s-b-b of-n p-10px">
            <img
              src={Reclutamiento}
              alt="Reclutamiento"
              className="w-100 h-100  m-a b-s-b-b h-e-scale "
              Style="object-fit: cover;"
            />{" "}
          </div>
          <div className="w-100 h-a p-a f-f-Gilroy ns-f-s-medium p-5px b-0px">
            <div className="w-100 h-100 h-pr-fl-ma bg-d p-5px f-w-bo t-a-c ">
              RECLUTAMIENTO
              <br />
              GLOBAL
            </div>
          </div>
        </div>
        <div className="w-25 m-w-100 m-h-400px m-h-a  h-70vh h-pr-fl-ma  bg-d  of-h">
          {" "}
          <div className=" w-100 h-100 p-a m-a b-s-b-b of-n p-10px  ">
            <img
              src={Asesora}
              alt="Asesoría"
              className="w-100 h-100  m-a b-s-b-b h-e-scale "
              Style="object-fit: cover;"
            />{" "}
          </div>
          <div className="w-100 h-a p-a f-f-Gilroy ns-f-s-medium p-5px b-0px">
            <div className="w-100 h-100 h-pr-fl-ma bg-d p-5px f-w-bo t-a-c ">
              ASESORÍAS
              <br />
              PERSONALIZADAS
            </div>
          </div>
        </div>
      </div>

      <div className="w-90 r-h-c m-w-100 h-a h-pr-fl-ma flexbox m-d-b p-20px b-s-b-b m-b-20px">
        <div className="w-100 m-w-100 m-h-a  h-70vh h-pr-fl-ma bg-d  of-h flexbox p-20px">
          <div className="w-25 m-w-100 m-d-n  h-500px h-pr-fl-ma bg-d   of-h">
            {" "}
            <div className=" w-100 h-100 p-a m-a b-s-b-b of-n">
              <img
                src={ColorsWpp}
                alt="Diseño"
                className="w-100 h-100  m-a b-s-b-b h-e-scale "
                Style="object-fit: cover;"
              />{" "}
            </div>
            <div className="w-100 h-a p-a f-f-Gilroy ns-f-s-medium p-5px b-0px">
              <div className="w-100 h-100 h-pr-fl-ma bg-d p-5px f-w-bo t-a-c ">
                DISEÑO
                <br />
                GRÁFICO
              </div>
            </div>
          </div>
          <div className="w-75 m-w-100 h-a h-pr-fl-ma bg-d p-20px of-h">
            {" "}
            <ContentBox
              className="p-20px bg-d"
              title="Diseño gráfico"
              subtitle="Hacemos realidad su ecosistema digital."
              text="Creamos todos los assets para su idea, proyecto, empresa, evento, producto y/o servicio."
            ></ContentBox>{" "}
            <div className="tag">LOGOTIPOS</div>
            <div className="tag">EMAILS CORPORATIVOS</div>
            <div className="tag">PRESENTACIONES INTERACTIVAS</div>
            <div className="tag">POST PARA REDES</div>
            <div className="tag">IDENTIDAD DE MARCA </div>
            <div className="tag">ILUSTRACIÓN </div>
            <div className="tag">DIGITALIZACIÓN </div>
            <div className="tag">REPARACIÓN DE IMAGENES</div>
            <div className="tag">GENERACIÓN CON ÍA </div>
            <div className="tag">TARJETAS PERSONALES </div>
            <div className="tag">PUBLICIDAD AUDIOVISUAL </div>
            <div className="tag">BANNERS WEB</div>
            <div className="tag">CORRECCIÓN FOTOGRÁFICA</div>
            <ContentBox
              className="p-20px bg-d"
             subtitle="Cómo funciona?"
             
              text="1) Celebramos una reunión. 2) Definimos el presupuesto disponible. 3) Completamos un Briefing. 4) Comenzamos la producción."
            ></ContentBox>
             <ContentBox
              className="p-20px bg-d"
             subtitle="¿Cuantas modificaciones puedo hacer?"
             
              text="Por cada pieza a diseñar tendrá hasta 3 etapas de afinación/ajuste gratuitas para realizar los cambios que deseee. El costo por ajustes extras dependerá de la complejidad, la urgencia y el tiempo disponible para cambios, estos se mencionarán una vez completado el Briefing."
            ></ContentBox>
          </div>
        </div>
      </div>
    </>
  );
}
