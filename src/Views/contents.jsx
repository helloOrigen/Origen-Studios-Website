import React, { Fragment, useState } from "react";

import Title from "../components/title";
import ContentBox from "../components/contentBox";
import Btn from "../components/btn";
const Contents = () => {
  const [mostrarMensuales, setMostrarMensuales] = useState(false);
  const [mostrarUnicos, setMostrarUnicos] = useState(false);

  const mostrarPlanesMensuales = () => {
    setMostrarMensuales(true);
    setMostrarUnicos(false);
  };

  const mostrarPlanesUnicos = () => {
    setMostrarMensuales(false);
    setMostrarUnicos(true);
  };

  return (
    <Fragment>
      <div className="w-95 r-h-c m-w-100 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <Title h4="Planes:" className="w-100 t-a-c m-t-100px ns-c-e"></Title>
        <Title
          h1="Generación de Contenido"
          className="w-100 t-a-c m-b-50px"
        ></Title>
        <div
          className=" m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b  m-t-40px  bg-d"
          Style="border-radius: 20px;"
        >
          <span className="w-100 h-pr-fl-ma t-a-c f-f-Gilroy p-20px f-w-bo">
            Haz click aquí para conocer nuestros planes!
          </span>
          <div className="w-100 h-pr-fl-ma flexbox f-w-n-w j-c-c p-10px p-b-20px">
            <Btn
              className="w-200px m-w-100 bg-g-contents  p-l-20px p-r-20px p-10px m-5px f-w-bo br-s-solid br-c-white br-r-50px"
              text="Planes únicos"
              click={mostrarPlanesUnicos}
            ></Btn>
            <Btn
              className="w-200px m-w-100  bg-g-contents ns-bg-tone-1 p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              text="Planes mensuales"
              click={mostrarPlanesMensuales}
            ></Btn>
          </div>
        </div>
      </div>

      {/* //! ----------------------------------------- MOSTRANDO PLANES UNICOS */}
      {mostrarUnicos && (
        <div id="planes-unicos" className="w-95 h-pr-fl-ma r-h-c bg-d m-b-20px">
          <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b b-s-b-b">
            <Title
              h4="&#129150; Pago único."
              className="w-100 t-a-l p-20px bg-d bg-g-contents "
            ></Title>
          </div>

          <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b b-s-b-b m-b-20px">
            <Title
              h1="&#129150; Imágenes."
              className="w-100 t-a-l p-20px bg-g-contents ns-c-white ns-c-tone-1 "
            ></Title>
          </div>

          <div className="w-100 r-h-c h-a h-pr-fl-ma ns-br-r-1  b-s-b-b">
            {/* //blue CONTENIDO ---------------------------------------------------------------- IMAGENES */}
            {/* //blue CONTENIDO - BLOQUE 1  - PLAN UNICO - GENERACION IA */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Generación con I.A."
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents "
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="239"
                  decimas="99"
                  antes="399,99"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                    <Title
                      h4="&#8599; 3 Imágenes con I.A."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Generamos 3 Imágenes con sus especificaciones."
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Hasta 3 correcciones x imágen."
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Ancho máximo / mínimo:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1920px (max) / 200px (min)"
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Altura máxima / mínima:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1920px (max) / 200px (min)"
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Proporciones Horizontales.
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="16:10, 16:9, 5:3, 4:3, 3:2. "
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Proporciones Verticales:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list=" 10:16, 9:16, 3:5, 3:4, 2:3."
                    ></ContentBox>

                    <Btn
                      className="w-100 p-15px f-w-bo m-t-20px bg-g-contents "
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Unicos-GeneracionIA&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Unicos-GeneraciónIA"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
            {/* //blue CONTENIDO - BLOQUE 2  - PLAN UNICO - EDICIÓN FOTOS */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Edición de fotos"
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents "
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="210"
                  decimas="00"
                  antes="350,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma   ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                    <Title
                      h4="&#8599; 3 Ediciones"
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>

                    <ContentBox
                      className="w-100"
                      list="Mejoras de calidad."
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Corrección de colores"
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Ajustes de exposición"
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Retoques de la piel."
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Recorte y redimensionamiento."
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Aplicación de efectos y filtros."
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Eliminación de objetos y personas."
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Restauración de fotos antiguas."
                    ></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Optimización para impresión o publicación en línea."
                    ></ContentBox>
                    <Btn
                      className="w-100 p-15px f-w-bo m-t-20px bg-g-contents "
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Unicos-Edicion-De-Fotos&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Unicos-Edicion-De-Fotos"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
            {/* //blue CONTENIDO - BLOQUE 3  - PLAN UNICO - BANNER ADS */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Banner para ADS"
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents "
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="288"
                  decimas="00"
                  antes="480,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                    <Title
                      h4="&#8599; 1 Imagen para Ads"
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox list="Imagen personalizada (estática)."></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Ancho & Largo (px):
                    </ContentBox>
                    <ContentBox list="300x200, 300x50, 300x100, 250x250, 200x200, 720x90, 970x90,468x60, 300x600, 160x600."></ContentBox>
                    <ContentBox
                      className="w-100 h-pr-fl-ma p-10px bg-d m-t-5px m-b-5px ns-c-e f-w-bo"
                      text="Con animación +25%"
                    ></ContentBox>

                    <Btn
                      className="w-100 p-15px f-w-bo  m-t-20px bg-g-contents "
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Unicos-BannerADS&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Unicos-BannerADS"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
            {/* //blue CONTENIDO - BLOQUE 4  - PLAN UNICO - ILLUSTRACIÓN DIGITAL */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Illustración"
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents "
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="371"
                  decimas="39"
                  antes="618,99"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma   ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                    <Title
                      h4="&#8599; 1 Illustración Digital"
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox list="Imagen conceptual o final."></ContentBox>
                    <ContentBox list="Fondo de pantalla."></ContentBox>
                    <ContentBox
                      className="w-100"
                      list="Hasta 3 correcciones (max)."
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Ancho máximo / mínimo:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1920px (max) / 200px (min)"
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Altura máxima / mínima:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1920px (max) / 200px (min)"
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Proporciones Horizontales.
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="16:10, 16:9, 5:3, 4:3, 3:2. "
                    ></ContentBox>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Proporciones Verticales:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list=" 10:16, 9:16, 3:5, 3:4, 2:3."
                    ></ContentBox>

                    <Btn
                      className="w-100 p-15px f-w-bo  m-t-20px bg-g-contents "
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Unicos-Illustración&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Unicos-Illustración"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
      
        </div>
      )}

      {/* //! ----------------------------------------- MOSTRANDO PLANES MENSUALES */}
      {mostrarMensuales && (
        <div id="planes-mensuales" className="w-95 h-pr-fl-ma r-h-c bg-d m-b-20px">
  <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b b-s-b-b">
            <Title
              h4="&#129150; Pago mensual."
              className="w-100 t-a-l p-20px bg-d bg-g-contents ns-bg-tone-1"
            ></Title>
          </div>

          <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b  b-s-b-b m-b-20px">
            <Title
              h1="&#129150; Posteos."
              className="w-100 t-a-l p-20px bg-d bg-g-contents ns-c-white  ns-c-tone-1  "
            ></Title>
          </div>

         

          <div className="w-100 h-a h-pr-fl-ma ns-br-r-1  b-s-b-b">
            {/* //info CONTENIDO - BLOQUE 1  - PLAN MENSUAL - CONTENIDO AUTOMATIZADO */}
          <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Planificación mensual"
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents ns-bg-tone-1"
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="522"
                  decimas="00"
                  antes="870,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo Mensual."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma   ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">

               <Title
                      h4="&#8599; 1 Mes de contenidos."
                      className="w-100 h-pr-fl-ma m-t-10px "
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Creamos su calendario de contenidos mes a mes, con los eventos más importantes para los clientes de su sector."
                    ></ContentBox>

                    <Title
                      h4="&#8599; Gestión de horarios"
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le asesoramos sobre los días y horarios de mayor tráfico y recurrencia en sus redes sociales de preferencia, para estar donde su público está, en todo momento."
                    ></ContentBox>


                    <Btn
                      className="w-100 p-15px f-w-bo  m-t-20px bg-g-contents ns-bg-tone-1"
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Mensuales-Planificación-Mensual&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Mensuales-Planificación-Mensual"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>

                {/* //info  CONTENIDO - BLOQUE 1  - PLAN MENSUAL - CONTENIDO AUTOMATIZADO */}
          <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="5 Post Mensuales"
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents ns-bg-tone-1"
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="1104"
                  decimas="00"
                  antes="1840,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo Mensual."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma   ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">

               <Title
                      h4="&#8599; 25 Imágenes Mensuales."
                      className="w-100 h-pr-fl-ma m-t-10px "
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Creamos contenidos mes a mes, con los eventos más importantes para los clientes de su sector."
                    >
                      <ContentBox className="w-100 ns-c-e f-w-bo">
                      Cada post contiene:
                    </ContentBox>
                    </ContentBox>
   <ContentBox
                      className="w-100"
                      list="1 Imagen (Título llamativo.)"
                    ></ContentBox>
<ContentBox
                      className="w-100"
                      list="3 Imagenes (Contenido.)"
                    ></ContentBox>
<ContentBox
                      className="w-100"
                      list="1 Imagen (Contenido.)"
                    ></ContentBox>

                    <Title
                      h4="&#8599; Gestión de horarios"
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le asesoramos sobre los días y horarios de mayor tráfico y recurrencia en sus redes sociales de preferencia, para estar donde su público está, en todo momento."
                    ></ContentBox>


                    <Btn
                      className="w-100 p-15px f-w-bo  m-t-20px bg-g-contents ns-bg-tone-1"
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Mensuales-5-Post-Mensuales&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Mensuales-5-Post-Mensuales"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
            {/* //info  CONTENIDO - BLOQUE 1  - PLAN MENSUAL - CONTENIDO AUTOMATIZADO */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="10 Post Mensuales"
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents ns-bg-tone-1"
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="1380"
                  decimas="00"
                  antes="2300,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo Mensual."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma   ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">

               <Title
                      h4="&#8599; 50 Imágenes mensuales."
                      className="w-100 h-pr-fl-ma m-t-10px "
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Creamos su calendario de contenidos mes a mes, con los eventos más importantes para los clientes de su sector."
                    ></ContentBox>
 
                    <Title
                      h4="&#8599; Gestión de horarios"
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le asesoramos sobre los días y horarios de mayor tráfico y recurrencia en sus redes sociales de preferencia, para estar donde su público está, en todo momento."
                    ></ContentBox>


                    <Btn
                      className="w-100 p-15px f-w-bo  m-t-20px bg-g-contents ns-bg-tone-1"
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Mensuales-10-Post-Mensuales&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Mensuales-10-Post-Mensuales"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>

              {/* //info  CONTENIDO - BLOQUE 1  - PLAN MENSUAL - STORIES */}
              <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="5 Stories Mensuales"
                  className="p-10px bg-d m-b-10px w-100 t-a-c bg-g-contents ns-bg-tone-1"
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="1259"
                  decimas="40"
                  antes="2099,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo Mensual."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma   ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">

               <Title
                      h4="&#8599; 5 Imágenes mensuales."
                      className="w-100 h-pr-fl-ma m-t-10px "
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Realizamos 5 post verticales para sus redes sociales."
                    ></ContentBox>
                     <ContentBox className="w-100 ns-c-e f-w-bo">
                      Cada Plan contiene:
                    </ContentBox>

                 
                    <ContentBox
                      className="w-100"
                      list="2 Stories publicitarios para recordatorio de marca."
                    ></ContentBox>
 <ContentBox
                      className="w-100"
                      list="1 Story con espacio suficiente para widgets y encuestas."
                    ></ContentBox>
 <ContentBox
                      className="w-100"
                      list="1 Story para evento mensual y/o oferta de temporada."
                    ></ContentBox>

<ContentBox
                      className="w-100"
                      list="1 Story con espacio suficiente para rememorar posteos."
                    ></ContentBox>
<ContentBox className="w-100 ns-c-e f-w-bo">
                      Tamaño estandard Ancho / Altura:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1080px / 1920px 9:16 | Vertical"
                    ></ContentBox>
                    <Btn
                      className="w-100 p-15px f-w-bo  m-t-20px bg-g-contents ns-bg-tone-1"
                      text="¡Empezar ahora!"
                      enlace="mailto:hello@OrigenStudios.com?subject=Plan-Contenidos-Mensuales-5-Stories-Mensuales&body=Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Plan%20Contenidos%20Mensuales-5-Stories-Mensuales"

                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
  
           

           

          </div>
        </div>
      )}

      {/* //! ----------------------------------------- MOSTRANDO INFORMACIÓN GENERAL DE PLANES */}

      <div className="w-100  r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b bg-d-t b-s-b-b m-b-20px">
        <Title
          h4="&#129150; Todos los planes únicos & mensuales incluyen:"
          className="w-100 t-a-l p-20px bg-d"
        ></Title>
        <div className="w-100 h-pr-fl-ma p-20px bg-d">
          <div className="w-50 m-w-100 h-pr-fl-ma p-20px bg-d">
            <Title
              h4="&#8599; Confidencialidad Total"
              className="w-100 h-pr-fl-ma m-t-10px"
            ></Title>
            <ContentBox
              className="w-100"
              list="Excluyendo los datos solicitados en el Briefing, No guardamos ningun tipo de información personal de usted ni de su empresa."
            ></ContentBox>
            <ContentBox
              className="w-100"
              list="Contamos con políticas de privacidad y al solicitar nuestros servicios, entendemos que acepta todos nuestros términos y condiciones, permitiendo el uso de su información únicamente para realizar la pieza solicitada. "
            ></ContentBox>
            <ContentBox
              className="w-100"
              list="OrigenStudios&reg; NO comercializará, venderá, intercambiará, ni presentará su información ante absolutamente nadie (A exepción de investigaciones de caracter legal mediante orden judicial.)"
            ></ContentBox>

            <Title
              h4="&#8599; Capacidad de reembolso"
              className="w-100 h-pr-fl-ma m-t-10px"
            ></Title>
            <ContentBox
              className="w-100"
              list="OrigenStudios&reg; En caso de no finalizar la pieza en el tiempo ofrecido, OrigenStudios® se compromete a devolver hasta el 70% de lo abonado. En caso de querer continuar (fuera de plazo), se mantendrá el costo inicial con un 20% de descuento por nuestra parte."
            ></ContentBox>

            <Title
              h4="&#8599; 3 Etapas de FeedBack"
              className="w-100 h-pr-fl-ma m-t-10px"
            ></Title>
            <ContentBox
              className="w-100"
              list="Durante todo el proceso, coordinaremos con usted y/o su representante a cargo, 3 etapas de Feedback/Afinación, para que pueda tomar decisiones clave y solicitar cambios sobre su pieza"
            ></ContentBox>
            <ContentBox
              className="w-100"
              list="Las primeras 3 etapas de Feedback/Afinación son gratuitas, de ahí en adelante el costo de cada etapa es del 2% del costo de la pieza final. "
            ></ContentBox>
          </div>
          <div className="w-50 m-w-100 h-pr-fl-ma p-20px bg-d">
            <Title
              h4="&#8599; Material editable"
              className="w-100 h-pr-fl-ma m-t-10px"
            ></Title>
            <ContentBox
              className="w-100"
              list="Se entregan en un plazo de hasta 1 semana (a coordinar con usted) al finalizar la pieza (en casos de pago directo)"
            ></ContentBox>
            <ContentBox
              className="w-100"
              list="Se entregan al finalizar el pago (en casos de pagos en cuotas)"
            ></ContentBox>
            <Title
              h4="&#8599; Pagos en cuotas"
              className="w-100 h-pr-fl-ma m-t-10px"
            ></Title>
            <ContentBox
              className="w-100"
              list="Los abonos mensuales son de pago único, sin embargo en caso de atrasos puede solicitar abonar el restante del mes hasta en 6 cuotas)"
            ></ContentBox>
            <Title
              h4="&#8599; Seguridad de oficio"
              className="w-100 h-pr-fl-ma m-t-10px"
            ></Title>
            <ContentBox
              className="w-100"
              list="En caso de no poder pagar por la pieza, no se preocupe, esta no se eliminará ni se entregará a otro cliente."
            ></ContentBox>
            <ContentBox
              className="w-100"
              list="Mantendremos la pieza en StandBy hasta que pueda continuar con su abono mensual (siempre que se comunique con nosotros al menos 1 vez en los próximos 3 meses)"
            ></ContentBox>
            <ContentBox
              className="w-100"
              list="En caso de no saber de usted al finalizar ese plazo, resguardaremos la pieza hasta por 1 año."
            ></ContentBox>
          </div>{" "}
        </div>{" "}
      </div>
    </Fragment>
  );
};

export default Contents;
