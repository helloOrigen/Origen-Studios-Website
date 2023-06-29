import React, { Fragment } from "react";
import { Title, ContentBox, Btn } from "../../components/index";

export default function PVContentsUnicos(props) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
