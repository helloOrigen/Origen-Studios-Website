import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";
import OSLogoSymbol from "../assets/logo/OS-Logo-Symbol-White-Svg.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardContainer from "../components/cardcontainer";
import Card from "../components/card";
const Plans = () => {
  return (
    <Fragment>
      <div className="w-100 h-100  h-pr-fl-ma centered b-s-b-b  of-auto p-20px">
     
        {/* ESTUDIO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        
        <div
          className="w-100 h-a h-pr-fl-ma "
        
        >
          <CardContainer>
            <Card
              cardCategory="Estudio"
              title="Estudio de Marca"
              subtitle="Plan Básico"
              icon={` ${OSLogoSymbol} `}
              description="Analizamos su marca"
              list="Activo"

              list1="Análisis completo de Rendimiento de Logotipo"
              list2="Estudio competencia local"
              list3="Compatibilidad semántica en Redes Sociales"
              list4="Visibilidad & Progresión"
              btn="Activo"
              btnText="Coordinar Reunión"
              btnLink="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
            />
            <Card
              cardCategory="Estudio"
              title="Análisis SEO"
              subtitle="Plan Básico"
              icon={` ${OSLogoSymbol} `}
              description="Analizamos sitio web"
              list="Activo"

              list1="Posicionamiento actual del sitio web"
              list2="Estudio de palabras clave"
              list3="Estudio de las meta etiquetas y URLs"
              list4="Análisis del contenido"
              btn="Activo"
              btnText="Coordinar Reunión"
              btnLink="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
            />
            <Card
            cardCategory="Estudio"
            title="Estudio Legal"
            subtitle="Plan Básico"
            icon={` ${OSLogoSymbol} `}
            description="Analizamos sus políticas"
            list="Activo"

            list1="Cumplimiento de políticas"
            list2="Análisis de registros RGPD"
            list3="Estudio de protección al usuario/cliente"
            list4="Habilitaciones Web"
            btn="Activo"
            btnText="Coordinar Reunión"
            btnLink="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
            />
            <Card
               cardCategory="Estudio"
               title="Estudio Formativo"
               subtitle="Plan Básico"
               icon={` ${OSLogoSymbol} `}
               description="Analizamos su personal"
               list="Activo"
   
               list1="Percepción interna general"
               list2="Análisis F.O.D.A"
               list3="Capacidad de austeridad"
               list4="Estudio de capacidad de crecimiento"
               btn="Activo"
               btnText="Coordinar Reunión"
               btnLink="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
            />
            <Card
               cardCategory="Estudio"
               title="Estudio Técnico"
               subtitle="Plan Básico"
               icon={` ${OSLogoSymbol} `}
               description="Reconocimiento del personal"
               list="Activo"
   
               list1="Validación de aptitudes"
               list2="Reorganización de personal"
               list3="Optimización de recursos"
               list4="Detección de amenazas internas"
               btn="Activo"
               btnText="Coordinar Reunión"
               btnLink="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
            />
          </CardContainer>
        </div>
      </div>

      {/* CONTENEDOR GENERAL */}
    </Fragment>
  );
};

export default Plans;
