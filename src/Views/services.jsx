import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "../Styles/seed.css";
import { Keyboard, Pagination } from "swiper";
import ContentBox from "../components/contentBox";
import MapaMundi from "../assets/images/mapamundi.svg";
import MundoVector from "../assets/images/mundo-vector.svg";
import MundoIlustracion from "../assets/images/mundo-ilustracion.png";
import PersonaElegida from "../assets/images/persona-elegida.png";
import PiramidesArabe from "../assets/images/piramides-arabe.png";

export default function Services(props) {
  const { children } = props;

  return (
    <>
      <Swiper
        direction={"vertical"}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}

        pagination={{
          clickable: true,
          
        }}
       
        modules={[Keyboard, Pagination]}
        className="mySwiper w-100 h-100 h-pr-fl-ma b-s-b-b "
      >
        {/* PORTADA ----------------------------------- */}
        <SwiperSlide>
          <img
            className="w-100 h-100 h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MapaMundi}
            />
          <div className="w-100 h-500px p-a a-h-c a-v-c" Style="font-size: 30px; color: white;" ><div className="w-100 r-v-c t-a-c"><div className="w-100 f-f-Gilroy" Style="font-size: 25px; line-height: 30px;">Servicios para</div>
          <div className="w-100 f-f-Gilroy f-w-bo  ns-c-e" Style="font-size: 110px; line-height: 115px;">TODO EL MUNDO</div></div></div>
        </SwiperSlide>
        
           

          
        {/* DESARROLLO Y MARKETING ----------------------------------- */}
        <SwiperSlide>
          <div className="w-100 h-100 h-pr-fl-ma  ">
          <div className="m-w-100 w-50 h-100 h-pr-fl-ma "><img
            className="w-100 h-100 h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MundoVector}
            /></div>
            <div className="m-d-n w-50 h-100 h-pr-fl-ma ">
              <div className="w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Desarrollo"}
                  subtitle={"La tecnología de su lado."}
                  text={
                    "Hacemos realidad su propio espacio digital, su tienda en linea o su web de presentación, la mantenemos vigente y actualizada con las mejores tecnologías del mercado para que solo se preocupe de lo escencial. "
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />
              </div>
              <div className="m-d-n w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Marketing Digital"}
                  subtitle={"Las campañas más atractivas y efectivas."}
                  text={
                    "Le posicionamos en los primeros resultados de las busquedas de sus clientes, generamos nuevos clientes y les ofrecemos un servicio de atención al cliente que refleje sus valores y servicialidad."
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />{" "}
              </div>
            </div>
            
            </div> </SwiperSlide>{/* ----------------------------------- DESARROLLO Y MARKETING */}


{/* DISEÑO GRÁFICO Y FOTOMONTAJE ----------------------------------- */}
<SwiperSlide>
          <div className="w-100 h-100 h-pr-fl-ma  ">
            <div className="m-w-100 w-50 h-100 h-pr-fl-ma ">
              <div className="w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Diseño Gráfico"}
                  subtitle={"Su nueva imagen de marca."}
                  text={
                    "Diseñamos todo lo necesario para crear su marca desde cero, actualizamos la que ya tiene o hacerla despegar hasta las nubes. Nuestro servicio incluye Logos, manuales de marca, creación de presentaciones interactivas, banners web, plantillas para redes sociales, y mucho más... "
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />{" "}
              </div>{" "}
              <div className="w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Fotomontaje"}
                  subtitle={"Todo el poder de la edición."}
                  text={
                    "Realizamos fotomontajes de calidad, desde retoques faciales, pasando por eliminación de objetos y artefáctos visuales hasta simulación de ilustraciones de marca, Mockups y mucho más..."
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />{" "}
              </div>
            </div>
            <div className="m-d-n w-50 h-100 h-pr-fl-ma "><img
            className="w-100 h-100 h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MundoIlustracion}
            /></div>
            </div> </SwiperSlide> {/* ----------------------------------- DISEÑO GRÁFICO Y FOTOMONTAJE */}


    {/* REDACCIÓN Y TRADUCCIÓN ----------------------------------- */}
    <SwiperSlide>
          <div className="w-100 h-100 h-pr-fl-ma  ">
          <div className="m-w-100 w-50 h-100 h-pr-fl-ma "><img
            className="w-100 h-100 h-pr-fl-ma "
            Style="object-fit: contain;"
            src={PiramidesArabe}
            /></div>
            <div className="m-d-n w-50 h-100 h-pr-fl-ma ">
              <div className="w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Redacción"}
                  subtitle={"Contenidos argumentativos."}
                  text={
                    "Redacción de artículos profesionales, post para redes sociales, tramas argumentativas, contenidos para eventos y blogs, guiones para videos, todo para la redacción de su contenido, argumentado y con coherencia profesional."
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />
              </div>
              <div className="m-d-n w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Traducción"}
                  subtitle={"If you need to translate this, please, hire us."}
                  text={
                    "Traducimos cualquier cosa que necesite, desde una app, hasta su novela romántica ántes de que salga a la venta, con la calidad nativa que la traducción necesita."
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />{" "}
              </div>
            </div>
            
            </div> </SwiperSlide>{/* ----------------------------------- REDACCIÓN Y TRADUCCIÓN */}
            {/* RECLUTAMIENTO Y ASESORÍA ----------------------------------- */}
<SwiperSlide>
          <div className="w-100 h-100 h-pr-fl-ma  ">
            <div className="m-w-100 w-50 h-100 h-pr-fl-ma ">
              <div className="w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Reclutamiento"}
                  subtitle={"Encuentre a Wally."}
                  text={
                    "Tenemos una red de prospectos en crecimiento de más de 10.000 personas esperando un lugar en la empresa de sus sueños, es por eso que decidimos hacer la diferencia, y ofrecerle el primer servicio Ganar/Ganar/Ganar. "
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />{" "}
              </div>{" "}
              <div className="w-100 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                <ContentBox
                  link={"enlace accion"}
                  className="p-20px w-100 h-a r-v-c"
                  title={"Asesoría"}
                  subtitle={"Profesionales a su servicio."}
                  text={
                    "Asesoría legal, administrativa, marketing, ventas, diseño, desarrollo, todo lo que necesita saber para crear su empresa, conózcalo de la mano de un profesional a su disposición."
                  }
                  action={"Click aquí para saber más sobre este servicio."}
                />{" "}
              </div>
            </div>
            <div className="m-d-n w-50 h-100 h-pr-fl-ma "><img
            className="w-100 h-100 h-pr-fl-ma "
            Style="object-fit: contain;"
            src={PersonaElegida}
            /></div>
            </div> </SwiperSlide> {/* ----------------------------------- RECLUTAMIENTO Y ASESORÍA */}
      </Swiper>

    </>
  );
}
