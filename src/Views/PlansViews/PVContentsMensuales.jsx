import React, { Fragment } from "react";
import { Title, ContentBox, Btn } from "../../components/index";

export default function PVContentsmensuales(props) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
