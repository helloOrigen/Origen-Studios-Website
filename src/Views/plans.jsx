import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";
import OSLogoSymbol from '../assets/logo/OS-Logo-Symbol-White-Png.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Btn from "../components/btn";
import MessageWriting from "../assets/icons/message_writing.svg";
import Info from "../components/info";
import CardContainer from "../components/cardcontainer";
import Card from "../components/card";
const Plans = () => {
  return (
    <Fragment>

<div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b p-30px of-auto ">
          {/* ESTUDIO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div
          className="w-100 h-a h-pr-fl-ma  "
          Style="border-bottom: 1px solid; border-color: white;"
        >
          <div className="w-50 m-w-100 bg-orange b-s-b-b h-a h-pr-fl-ma ">
            <ContentBox
              title={"ESTUDIO."}
              subtitle={"Conozca las necesidades de su sector de mercado."}
            />
          </div>
          </div>
          <div
          className="w-100 h-a h-pr-fl-ma bg-red "
          Style="border-bottom: 1px solid; "
        >
  <CardContainer >
           <Card title="Ventas" subtitle="Activo" icon={` ${OSLogoSymbol} `}/>
           <Card title="Ventas" subtitle="Activo" icon={` ${OSLogoSymbol} `}/>
           <Card title="Ventas" subtitle="Activo" icon={` ${OSLogoSymbol} `}/>
           <Card title="Ventas" subtitle="Activo" icon={` ${OSLogoSymbol} `}/>
           <Card title="Ventas" subtitle="Activo" icon={` ${OSLogoSymbol} `}/>
          </CardContainer>
</div>



  </div>




      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b p-30px of-auto ">
        {/* ESTUDIO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div
          className="w-100 h-a h-pr-fl-ma  "
          Style="border-bottom: 1px solid; border-color: white;"
        >
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fl-ma ">
            <ContentBox
              title={"ESTUDIO."}
              subtitle={"Conozca las necesidades de su sector de mercado."}
            />
          </div>
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fr-ma">
            <div className="w-100 h-a h-pr-fl-ma m-b-5px d-i-f">
              <div className="m-w-50 w-70 h-a h-pr-fl-ma ">
                <ContentBox
                  className="w-100"
                  Style="word-wrap: nowrap;  "
                  intitle={
                    "¿Tiene una idea de lo que necesita pero aún no sabe qué plan le conviene más?"
                  }
                  intitleclassName=""
                ></ContentBox>
              </div>
              <div className="m-w-50 w-30 h-a h-pr-fr-ma">
                <Btn
                  className="h-pr-fr-ma "
                  text="Coordinar estudio"
                  enlace="https://calendly.com/origenstudios/first_steps"
                >
                  <div className="w-25px h-25px m-5px h-pr-fl-ma">
                    <img
                      src={MessageWriting}
                      className="w-100 h-100 h-pr-fl-ma"
                      Style="stroke: #ffffff !important;"
                      alt="Coordinar reunión de estudio"
                    />
                  </div>
                </Btn>
              </div>
            </div>
          </div>
        </div>
        {/* ESTUDIO | Contenedor de planes ------------------------------------------------ */}
        <div className="w-100 h-a h-pr-fl-ma  p-10px ">
          <Swiper
            direction={"horizontal"}
            autoplay={{
              delay: 8500,
              disableOnInteraction: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: false,
            }}
            modules={[Autoplay, Keyboard, Pagination]}
            className="mySwiper w-100 h-a h-pr-fl-ma b-s-b-b"
          >
            {/* ESTUDIO | DETECCIÓN DE NECESIDAD------------------------------------------------ */}

            <SwiperSlide className="h-pr-fl-ma  w-100 b-s-b-b  m-t-20px bg-black ">
              <div
                className="m-w-100 w-100 h-a h-pr-fl-ma "
                Style="border: 1px solid; border-color: white;"
              >
                {" "}
                <ContentBox
                  className="p-20px w-100"
                  title={"Detección de necesidad."}
                  category={"Investigación"}
                  subtitle={"Estudio de su sector de mercado."}
                />
                <div className=" m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Elección de mercado objetivo."}
                      note={"Capacidad de ingreso en nuevos nichos."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 semana"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Selección de publico prospecto."}
                      note={"Enfoque estratégico en clientes prospecto."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"2 a 3 semanas"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Segmentación de mercado."}
                      note={"Sectorizado por productos ofrecidos."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 a 2 semanas"}
                    />
                  </div>
                </div>
                <div className="m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Encuestas externas"}
                      note={"Reconocimiento actual de la necesidad."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"2 semanas / 1 mes"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Capacidad de servicios"}
                      note={"Reconocimiento real de oportunidades."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 a 3 meses"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Detección de necesidad general."}
                      note={"Recopilación e informe de datos obtenidos."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 Semana"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f m-b-10px">
                    <div className="w-70 h-a h-pr-fl-ma ">
                      <ContentBox
                        className="w-100 m-b-10px   p-10px"
                        Style="word-wrap: nowrap;  "
                        text={
                          "Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."
                        }
                      />
                    </div>
                    <div className="w-30 h-a h-pr-fl-ma">
                      <Btn
                        className="h-pr-fr-ma"
                        text="Coordinar"
                        enlace="https://calendly.com/origenstudios/first_steps"
                      >
                        <div className="w-25px h-25px m-5px h-pr-fl-ma">
                          <img
                            src={MessageWriting}
                            className="w-100 h-100 h-pr-fl-ma"
                            Style="stroke: #ffffff !important;"
                            alt="Coordinar"
                          />
                        </div>
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>

            {/* ESTUDIO | AUDITORÍA SOCIAL ------------------------------------------------ */}

            <SwiperSlide className="h-pr-fl-ma  w-100 b-s-b-b  m-t-20px bg-black">
              <div
                className="m-w-100 w-100 h-a h-pr-fl-ma "
                Style="border: 1px solid; border-color: white;"
              >
                {" "}
                <ContentBox
                  className="p-20px w-100"
                  title={"Auditoría social."}
                  category={"Investigación"}
                  subtitle={"Evaluación interna social y cultural."}
                />
                <div className=" m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Encuestas internas."}
                      note={
                        "Informe de ambiente laboral entre colaboradores y socios."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 a 2 Días"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Capacidad de migración."}
                      note={
                        "Evaluación de capacidad migratoria ante riesgos externos."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                </div>
                <div className="m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Cuantificación de personal."}
                      note={"Informe de indispensabilidad por área."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Optimización de personal."}
                      note={"Capacidad de reducción de personal actual."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f m-b-10px">
                    <div className="w-70 h-a h-pr-fl-ma ">
                      <ContentBox
                        className="w-100 m-b-10px   p-10px"
                        Style="word-wrap: nowrap;  "
                        text={
                          "Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."
                        }
                      />
                    </div>
                    <div className="w-30 h-a h-pr-fl-ma">
                      <Btn
                        className="h-pr-fr-ma"
                        text="Coordinar"
                        enlace="https://calendly.com/origenstudios/first_steps"
                      >
                        <div className="w-25px h-25px m-5px h-pr-fl-ma">
                          <img
                            src={MessageWriting}
                            className="w-100 h-100 h-pr-fl-ma"
                            Style="stroke: #ffffff !important;"
                            alt="Coordinar"
                          />
                        </div>
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>

            {/* ESTUDIO | AUDITORÍA FINANCIERA  ------------------------------------------------ */}

            <SwiperSlide className="h-pr-fl-ma  w-100 b-s-b-b  m-t-20px bg-black">
              <div
                className="m-w-100 w-100 h-a h-pr-fl-ma "
                Style="border: 1px solid; border-color: white;"
              >
                {" "}
                <ContentBox
                  className="p-20px w-100"
                  title={"Auditoría financiera."}
                  category={"Investigación"}
                  subtitle={"Evaluación financiera y capacidad de crecimiento."}
                />
                <div className=" m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Auditoría financiera."}
                      note={
                        "Evaluación general de gastos, beneficios y retornos."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 a 2 Días"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Capacidad de austeridad."}
                      note={
                        "Evaluación de capacidad de recortes ante emergencias."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                </div>
                <div className="m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Capacidad de riesgos financieros."}
                      note={
                        "Capacidad de riesgo financiero (limite de vitalidad)"
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Análisis de documentación."}
                      note={
                        "Cumplimiento de regulaciones financieras actuales."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f m-b-10px">
                    <div className="w-70 h-a h-pr-fl-ma ">
                      <ContentBox
                        className="w-100 m-b-10px   p-10px"
                        Style="word-wrap: nowrap;  "
                        text={
                          "Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."
                        }
                      />
                    </div>
                    <div className="w-30 h-a h-pr-fl-ma">
                      <Btn
                        className="h-pr-fr-ma"
                        text="Coordinar"
                        enlace="https://calendly.com/origenstudios/first_steps"
                      >
                        <div className="w-25px h-25px m-5px h-pr-fl-ma">
                          <img
                            src={MessageWriting}
                            className="w-100 h-100 h-pr-fl-ma"
                            Style="stroke: #ffffff !important;"
                            alt="Coordinar"
                          />
                        </div>
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>

            {/* ESTUDIO | AUDITORÍA LEGAL ----------------------------------------------- */}

            <SwiperSlide className="h-pr-fl-ma  w-100 b-s-b-b  m-t-20px bg-black">
              <div
                className="m-w-100 w-100 h-a h-pr-fl-ma "
                Style="border: 1px solid; border-color: white;"
              >
                {" "}
                <ContentBox
                  className="p-20px w-100"
                  title={"Auditoría legal."}
                  category={"Investigación"}
                  subtitle={"Detección de irregularidades y oportunidades."}
                />
                <div className=" m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Disponibilidad legal."}
                      note={"Vigencia de su nombre a nivel regional."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 a 2 Días"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Análisis de documentación"}
                      note={"Cumplimiento de regulaciones legales actuales."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                </div>
                <div className="m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Capacidad de migración."}
                      note={
                        "Evaluación de capacidad migratoria ante riesgos externos."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Declaración de intención"}
                      note={
                        "Cumplimiento de facultades y responsabiliadades organizativas."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f m-b-10px">
                    <div className="w-70 h-a h-pr-fl-ma ">
                      <ContentBox
                        className="w-100 m-b-10px   p-10px"
                        Style="word-wrap: nowrap;  "
                        text={
                          "Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."
                        }
                      />
                    </div>
                    <div className="w-30 h-a h-pr-fl-ma">
                      <Btn
                        className="h-pr-fr-ma"
                        text="Coordinar"
                        enlace="https://calendly.com/origenstudios/first_steps"
                      >
                        <div className="w-25px h-25px m-5px h-pr-fl-ma">
                          <img
                            src={MessageWriting}
                            className="w-100 h-100 h-pr-fl-ma"
                            Style="stroke: #ffffff !important;"
                            alt="Coordinar"
                          />
                        </div>
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>
          </Swiper>
        </div>
        {/* INFO | CONTENEDOR  ------------------------------------------------ */}
     
            <Info
              className="w-100 p-10px m-t-20px bg-black m-b-20px"
              title={"Info:"}
              text={
                " Algunos plazos de tiempo pueden variar dependiendo la complejidad de cada pieza, a su vez, existen procesos que se ejecutan en simultáneo por lo que no recomendamos tomar inicialmente la suma completa de todos los tiempos estimados como referencia."
              }
            />
        
        {/*   ------------------------------------------------ INFO | CONTENEDOR*/}
       
        {/* CREACIÓN ------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div
          className="w-100 h-a h-pr-fl-ma  m-b-20px m-t-20px"
          Style="border-bottom: 1px solid; border-color: white;"
        >
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fl-ma ">
            <ContentBox
              title={"CREACIÓN."}
              subtitle={"Haga realidad sus productos y servicios."}
            />
          </div>
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fr-ma">
            <div className="w-100 h-a h-pr-fl-ma m-b-5px d-i-f">
              <div className="m-w-50 w-70 h-a h-pr-fl-ma ">
                <ContentBox
                  className="w-100"
                  Style="word-wrap: nowrap;  "
                  intitle={
                    "¿Tiene una idea de lo que necesita pero aún no sabe qué plan le conviene más?"
                  }
                  intitleclassName=""
                ></ContentBox>
              </div>
              <div className="m-w-50 w-30 h-a h-pr-fr-ma">
                <Btn
                  className="h-pr-fr-ma "
                  text="Coordinar estudio"
                  enlace="https://calendly.com/origenstudios/first_steps"
                >
                  <div className="w-25px h-25px m-5px h-pr-fl-ma">
                    <img
                      src={MessageWriting}
                      className="w-100 h-100 h-pr-fl-ma"
                      Style="stroke: #ffffff !important;"
                      alt="Coordinar reunión de estudio"
                    />
                  </div>
                </Btn>
              </div>
            </div>
          </div>
        </div>
        {/* CREACIÓN | CONTENEDOR  ------------------------------------------------ */}
        <div className="w-100 h-a h-pr-fl-ma  ">
        <Swiper
            direction={"horizontal"}
            autoplay={{
              delay: 8500,
              disableOnInteraction: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: false,
            }}
            modules={[Autoplay, Keyboard, Pagination]}
            className="mySwiper w-100 h-a h-pr-fl-ma b-s-b-b"
          >
            {/* CREACIÓN | CREACIÓN DE MARCA ------------------------------------------------ */}

            <SwiperSlide className="h-pr-fl-ma  w-100 b-s-b-b  m-t-20px bg-black">
              <div
                className="m-w-100 w-100 h-a h-pr-fl-ma "
                Style="border: 1px solid; border-color: white;"
              >
                {" "}
                <ContentBox
                  className="p-20px w-100"
                  title={"Creación de marca."}
                  category={"Investigación"}
                  subtitle={"Creación de identidad corporativa."}
                />
                <div className=" m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Naming corporativo/insitucional"}
                      note={"El nombre que su proyecto necesita."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 semana"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Slogan / Lema."}
                      note={"Su propuesta valor optimizada en una frase."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 a 2 semanas"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Logotipo."}
                      note={
                        "Identificador marcario. Isotipo/Isologo/Imagotipo/Logotipo"
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"3 a 4 semanas"}
                    />
                  </div>
                </div>
                <div className="m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Manual de uso de marca."}
                      note={
                        "Construcción, márgenes, usos, prohibiciones y más."
                      }
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"4 a 6 semanas"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• 5 ilustraciones funcionales"}
                      note={"Fotomontajes illustrativos de su marca en acción."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"2 a 3 semanas"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f m-b-10px">
                    <div className="w-70 h-a h-pr-fl-ma ">
                      <ContentBox
                        className="w-100 m-b-10px   p-10px"
                        Style="word-wrap: nowrap;  "
                        text={
                          "Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."
                        }
                      />
                    </div>
                    <div className="w-30 h-a h-pr-fl-ma">
                      <Btn
                        className="h-pr-fr-ma"
                        text="Coordinar"
                        enlace="https://calendly.com/origenstudios/first_steps"
                      >
                        <div className="w-25px h-25px m-5px h-pr-fl-ma">
                          <img
                            src={MessageWriting}
                            className="w-100 h-100 h-pr-fl-ma"
                            Style="stroke: #ffffff !important;"
                            alt="Coordinar"
                          />
                        </div>
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>
            {/* ECREACIÓN | PRESENTACIÓN DE MARCA ------------------------------------------------ */}

            <SwiperSlide className="h-pr-fl-ma  w-100 b-s-b-b  m-t-20px bg-black">
              <div
                className="m-w-100 w-100 h-a h-pr-fl-ma "
                Style="border: 1px solid; border-color: white;"
              >
                {" "}
                <ContentBox
                  className="p-20px w-100"
                  title={"Presentación de marca."}
                  category={"Investigación"}
                  subtitle={"Todo para presentarse al mundo."}
                />
                <div className=" m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Diseño landing page simple."}
                      note={"Proyección de sitio web técnico."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Presentación digital (20 Diapositivas)"}
                      note={"Presentación de uso funcional."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Cabecera para email."}
                      note={"Banner de cabecera para emails"}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 a 2 Días"}
                    />
                  </div>
                </div>
                <div className="m-w-100 w-50 h-a h-pr-fl-ma p-l-10px p-r-10px">
                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Firma para email."}
                      note={"Firma de email profesional para su negocio."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"no definido"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f">
                    <ContentBox
                      className="w-70 m-b-10px  p-10px"
                      Style="border-bottom: 1px dotted; border-color: white; "
                      text={"• Diseño de e-mailing"}
                      note={"Fotomontajes illustrativos de su marca en acción."}
                      noteclassName="ns-c-e p-l-10px"
                    />
                    <ContentBox
                      className="w-30 m-b-10px t-a-r  p-10px"
                      Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
                      note={"1 Semana"}
                    />
                  </div>

                  <div className="w-100 h-a h-pr-fl-ma d-i-f m-b-10px">
                    <div className="w-70 h-a h-pr-fl-ma ">
                      <ContentBox
                        className="w-100 m-b-10px   p-10px"
                        Style="word-wrap: nowrap;  "
                        text={
                          "Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."
                        }
                      />
                    </div>
                    <div className="w-30 h-a h-pr-fl-ma">
                      <Btn
                        className="h-pr-fr-ma"
                        text="Coordinar"
                        enlace="https://calendly.com/origenstudios/first_steps"
                      >
                        <div className="w-25px h-25px m-5px h-pr-fl-ma">
                          <img
                            src={MessageWriting}
                            className="w-100 h-100 h-pr-fl-ma"
                            Style="stroke: #ffffff !important;"
                            alt="Coordinar"
                          />
                        </div>
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>


            
          </Swiper>
        </div>
      </div>
      {/* CONTENEDOR GENERAL */}
    </Fragment>
  );
};

export default Plans;
