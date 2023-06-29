import React from "react";

import ContentBox from "../components/contentBox";
import Btn from "../components/btn";
import Title from "../components/title";

import ColorsWpp from "../assets/images/compressed/colors.jpg";

import SaboreameBurger from "../assets/images/compressed/saboreame-burger.jpg";
export default function Services(props) {
  return (
    <>
      {/*  // !                            SECCIÓN 1 |  TITULO                             */}

      <div className="w-95 r-h-c  h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <Title
          h1="Servicios"
          className="w-100 t-a-c m-t-100px m-b-100px"
        ></Title>
      </div>

      {/*  // !                            SECCIÓN 2 |  DISEÑO                            */}

      <div className="w-95 r-h-c   h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 m-w-100 m-h-a  h-a h-pr-fl-ma bg-d p-20px of-h  ">
          <div className="w-25 m-w-100   h-500px h-pr-fl-ma bg-d   of-h">
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
          <div className="w-75 m-w-100 h-a h-pr-fl-ma  p-20px of-h">
            {" "}
            <ContentBox
              className="p-20px "
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
              className="p-20px "
              subtitle="Cómo funciona?"
              text="1) Celebramos una reunión. 2) Definimos el presupuesto disponible. 3) Completamos un Briefing. 4) Comenzamos la producción."
            ></ContentBox>
            <div className="w-100 h-a bg-d h-pr-fl-ma b-s-b-b flexbox m-d-b">
              <Title
                className="w-a m-w-100 h-a h-pr-fl-ma b-s-b-b p-20px"
                h3="¿Quieres saber más? Coordinemos una reunión!"
              ></Title>
              <div className="w-a m-w-100 h-a h-pr-fl-ma b-s-b-b p-20px">
                <Btn
                  className="w-a m-w-100 ns-bg-e p-15px f-w-bo"
                  text="Coordinar Reunión"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                ></Btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  // !                            SECCIÓN 2 | MARKETING                            */}
      <div className="w-95 r-h-c h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 m-w-100 m-h-a  h-a h-pr-fl-ma bg-d p-20px of-h  ">
          <div className="w-25 m-w-100   h-500px h-pr-fl-ma bg-d   of-h">
            {" "}
            <div className=" w-100 h-100 p-a m-a b-s-b-b of-n">
              <img
                src={SaboreameBurger}
                alt="Diseño"
                className="w-100 h-100  m-a b-s-b-b h-e-scale "
                Style="object-fit: cover;"
              />{" "}
            </div>
            <div className="w-100 h-a p-a f-f-Gilroy ns-f-s-medium p-5px b-0px">
              <div className="w-100 h-100 h-pr-fl-ma bg-d p-5px f-w-bo t-a-c ">
                MARKETING
              </div>
            </div>
          </div>
          <div className="w-75 m-w-100 h-a h-pr-fl-ma  p-20px of-h">
            {" "}
            <ContentBox
              className="p-20px "
              title="MARKETING"
              subtitle="Te conectamos con tus clientes potenciales."
              text="Generamos estratégias comerciales dirigidas a su sector y potenciamos su visibilidad en el mercado."
            ></ContentBox>{" "}
            <div className="tag">SEO</div>
            <div className="tag">SEM</div>{" "}
            <div className="tag"> Marketing de Contenidos</div>{" "}
            <div className="tag"> Redes Sociales</div>{" "}
            <div className="tag"> Email Marketing</div>{" "}
            <div className="tag"> Analítica Web</div>{" "}
            <div className="tag"> Publicidad en Línea</div>{" "}
            <div className="tag"> Inbound Marketing</div>{" "}
            <div className="tag"> Marketing de Influencers</div>{" "}
            <div className="tag"> Estrategia Digital</div>{" "}
            <div className="tag"> Optimización de Conversiones</div>{" "}
            <div className="tag"> Marketing de Afiliados</div>{" "}
            <div className="tag"> Marketing de Contenido Visual</div>{" "}
            <div className="tag"> Automatización de Marketing</div>{" "}
            <div className="tag"> Remarketing</div>{" "}
            <div className="tag"> Marketing en Buscadores</div>{" "}
            <div className="tag"> Estrategia de Palabras Clave</div>{" "}
            <div className="tag"> Social Media Management</div>{" "}
            <div className="tag"> Desarrollo de Sitios Web</div>{" "}
            <div className="tag"> Marketing de Video</div>{" "}
            <div className="tag"> Marketing de Contenido en Redes Sociales</div>{" "}
            <div className="tag"> Estrategia de Embudos de Ventas</div>{" "}
            <div className="tag"> Generación de Leads</div>{" "}
            <div className="tag"> Marketing de Productos Digitales</div>{" "}
            <div className="tag"> Publicidad en Redes Sociales</div>{" "}
            <div className="tag"> Marketing en Dispositivos Móviles</div>{" "}
            <div className="tag"> Relaciones Públicas Digitales</div>{" "}
            <div className="tag"> Investigación de Mercado Online</div>{" "}
            <div className="tag"> Posicionamiento de Marca</div>{" "}
            <div className="tag"> Estrategia de Marketing Digital</div>{" "}
            <div className="tag"> Marketing de E-commerce</div>
            <ContentBox
              className="p-20px "
              subtitle="Cómo funciona?"
              text="1) Celebramos una reunión. 2) Definimos el presupuesto disponible. 3) Completamos un Briefing. 4) Comenzamos la producción."
            ></ContentBox>
            <div className="w-100 h-a bg-d h-pr-fl-ma b-s-b-b flexbox m-d-b">
              <Title
                className="w-a m-w-100 h-a h-pr-fl-ma b-s-b-b p-20px"
                h3="¿Quieres saber más? Coordinemos una reunión!"
              ></Title>
              <div className="w-a m-w-100 h-a h-pr-fl-ma b-s-b-b p-20px">
                <Btn
                  className="w-a m-w-100 ns-bg-e p-15px f-w-bo"
                  text="Coordinar Reunión"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                ></Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
