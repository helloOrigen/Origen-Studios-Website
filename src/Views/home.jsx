import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../components/btn";
import ContentBox from "../components/contentBox";
import MessageWriting from "../assets/icons/message_writing.svg";
import ClipboardNotes from "../assets/icons/clipboard-notes.svg";
import Wallet from "../assets/icons/wallet.svg";
import CheckCircle from "../assets/icons/check-circle.svg";
import ContactForm from "../components/formtest.jsx";
import OSChat from "../assets/images/views/home/os-chat.webp";

import MultimediaAssets from "../assets/icons/multimedia_assets.svg";
import CardContainer from "../components/cardcontainer";
import Card from "../components/card";

import Promo1 from "../assets/images/promo/promo-1.jpg";
import BehanceHome from "../assets/images/views/home/OS-behance-1080x1080.webp";

import "../Styles/seed.css";
import "../Styles/home.css";

export default function Home(props) {
  var app = document.getElementById("app");

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  });

  return (
    <Fragment Fragment>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b p-t-10px p-b-10px of-scroll of-y-none">
        <div
          className="m-d-n w-50 h-100 h-pr-fl-ma b-s-b-b p-r-10px "
          Style="z-index: 2000;"
        >
          <div className="w-90 bg-black-node-o-70 blur ns-br-r-1 of-h p-20px h-a h-pr-fl-ma r-v-c b-s-b-b">
            <div
              id="app"
              className="app w-100  f-f-Gilroy c-white h-pr-fl-ma h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 50px; line-height: 55px;"
            >
              <Typewriter
                className="homewriter"
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'Le damos <br/>la bienvenida a... <br/><strong>OrigenStudios<span Style="color: #e1a54b;">.</span>com</strong>'
                    )
                    .pauseFor(200)
                    .deleteAll(10)
                    .typeString("Somos la primer<br />agencia del Uruguay...")
                    .pauseFor(200)
                    .deleteAll(10)
                    .typeString(
                      'en utilizar<br /> <span Style="color: #27ae60;">Inteligencia Artificial</span>'
                    )
                    .pauseFor(200)
                    .deleteAll(10)
                    .typeString(
                      'para potenciar sus <br /> <span Style="color: #27ae60;">Recursos</span>'
                    )
                    .pauseFor(200)
                    .deleteChars(8)
                    .typeString('<span Style="color: #27ae60;">Ventas</span>')
                    .pauseFor(200)
                    .deleteChars(6)
                    .typeString(
                      '<span Style="color: #27ae60;">Oportunidades</span>'
                    )
                    .pauseFor(200)
                    .deleteAll(10)
                    .typeString("Nos especializamos en: <br />")
                    .typeString(
                      '<span Style="color: #27ae60;">Diseño gráfico</span>'
                    )
                    .pauseFor(200)
                    .deleteChars(14)
                    .typeString(
                      '<span Style="color: #27ae60;">Marketing Digital</span>'
                    )
                    .pauseFor(200)
                    .deleteChars(17)
                    .typeString(
                      '<span Style="color: #27ae60;">Desarrollo Web/App</span>'
                    )
                    .pauseFor(200)
                    .deleteChars(18)
                    .typeString(
                      '<span Style="color: #27ae60;">Asesoría Legal</span>'
                    )
                    .pauseFor(200)
                    .deleteChars(5)
                    .typeString(
                      '<span Style="color: #27ae60;">financiera</span>'
                    )
                    .deleteChars(10)
                    .pauseFor(200)
                    .typeString('<span Style="color: #27ae60;">de marca</span>')
                    .pauseFor(200)
                    .deleteAll(10)
                    .typeString(
                      'Le damos <br/>la bienvenida a... <br/><strong>OrigenStudios<span Style="color: #e1a54b;">.</span>com</strong>'
                    )

                    .start();
                }}
                options={{ delay: 60 }}
              />
            </div>
            <br />

            <div className="w-100 h-a h-pr-fl-ma m-b-20px ">
              <div className="w-100 h-pr-fl-ma m-b-20px h-20px p-t-20px p-r-20px">
                <div className="w-100 h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider "></div>
              </div>

              <div className="w-50 h-a h-pr-fl-ma a-i-c">
                <ContentBox
                  className="h-pr-fl-ma w-a h-a p-l-10px m-t-10px "
                  subtitle={"¡Agende una reunión hoy mismo!"}
                />
              </div>
              <div className="w-50 h-a h-pr-fl-ma p-r-10px ">
                <div className="w-a h-a h-pr-fr-ma p-l-10px ">
                  <Btn
                    className=""
                    text="Coordinar reunión &nbsp;"
                    enlace={
                      "https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                    }
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
          </div>
        </div>
        <div className="m-w-100 w-50 h-100 b-s-b-b h-pr-fl-ma m-b-20px ">
          <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b ">
            <Swiper
              direction={"horizontal"}
              centeredSlides={true}
              autoplay={{
                delay: 5500,
                disableOnInteraction: true,
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Keyboard, Pagination]}
              className="mySwiper h-100 w-100 h-pr-fl-ma b-s-b-b"
            >
              <SwiperSlide className="d-n m-d-b h-pr-fl-ma b-s-b-b">
                <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b  b-s-b-b">
                  <div className="w-100 h-a h-pr-fl-ma r-v-c bg-black-node-o-70 blur ns-br-r-1 p-t-40px p-b-40px">
                  <span
                    className="w-100 f-f-Gilroy c-white h-pr-fl-ma  h-a p-l-10px b-s-b-b m-a t-a-c"
                    Style="font-size: 50px; line-height: 55px;"
                  >
                    <b>¡Le damos la bienvenida!</b>
               
                  </span>
                  <span
                    className="w-100 h-a f-f-Gilroy c-white h-pr-fl-ma  m-t-10px p-l-10px b-s-b-b m-a t-a-c"
                    Style="font-size: 20px; line-height: 25px;"
                  >
                    <b>
                      Se encuentra en el origen <br /> de su nueva marca.
                    </b>
                  </span>

                  <div className="w-100 h-a h-pr-fl-ma  ">
                    <div className="w-100 h-a h-pr-fl-ma a-i-c">
                      <ContentBox
                        className="h-pr-fl-ma w-100 h-a p-l-10px m-t-10px t-a-c "
                        subtitle={"¡Comencemos a producir su marca hoy mismo!"}
                      />
                    </div>
                    <div className="w-100 h-a h-pr-fl-ma ">
                      <div className="w-a h-a h-pr-fl-ma  t-a-c r-h-c">
                        <Btn
                        textclassName="p-r-10px"
                          text="Coordinar reunión"
                          enlace={
                            "https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                          }
                        >
                          <div className="w-25px h-25px m-5px h-pr-fl-ma">
                            <img
                              src={MessageWriting}
                              className="w-100 h-100 h-pr-fl-ma "
                              Style="stroke: #ffffff !important; "
                              alt="Coordinar"
                            />
                          </div>
                        </Btn>
                      </div>
                    </div>
                    <div className="w-100 h-pr-fl-ma h-20px  m-t-20px ">
                      <div className="w-80 h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider r-h-c"></div>
                    </div>
                    <div className="w-100 h-a h-pr-fl-ma ">
                      <span
                        className="h-pr-fl-ma w-90 r-h-c h-a  m-t-10px t-a-c m-t-20px default f-f-Gilroy ns-br-r-1 p-10px" Style="font-size: 15px;">
                       <i>Para una una experiencia completa, <br /> recomendamos el acceso desde un equipo PC </i>
                        </span>
                    </div>
                  </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="h-pr-fl-ma b-s-b-b p-5px">
                <Link to="/promo">
                  <img
                    src={Promo1}
                    Style="Object-fit: contain; "
                    alt=""
                    className="w-100 h-100 h-pr-fl-ma  b-s-b-b"
                  />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="m-d-n d-b h-pr-fl-ma b-s-b-b p-5px">
                <div className="w-100 h-100 h-pr-fl-ma p-20px bg-black-node-o-70 blur ns-br-r-1">
                  <div className="w-100 h-a h-pr-fl-ma  r-v-c">
                    <div className="w-100 h-a h-pr-fl-ma ">
                      <img
                        alt="MultimediaAssets"
                        src={MultimediaAssets}
                        className="w-and-h-250px r-h-c h-pr-fl-ma"
                      />{" "}
                    </div>
                    <div className="w-100 h-a h-pr-fl-ma ">
                      <ContentBox
                        className="t-a-c m-b-20px"
                        title={"Anuncie su empresa aquí"}
                        subtitle={
                          "Conozca como poner sus anuncios en nuestra web."
                        }
                      />{" "}
                    </div>
                    <div className="w-100 h-a h-pr-fl-ma">
                      <Link to="/sponsors">
                        <Btn
                          className="t-a-c f-w-bo p-r-20px p-l-20px p-10px "
                          btnLink="sponsors"
                          text="Ver plan de anuncios"
                        >
                          {" "}
                        </Btn>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="h-pr-fl-ma b-s-b-b p-5px">
                <Link to="https://www.behance.net/gallery/167658929/OrigenStudios-2023">
                  <img
                    src={BehanceHome}
                    Style="Object-fit: contain; "
                    alt=""
                    className="w-100 h-100 h-pr-fl-ma  b-s-b-b"
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-t-10px   p-20px of-a m-b-10px">
          <div className="w-100 h-a h-pr-fl-ma t-a-c">
            <div className="w-100 h-a h-pr-fl-ma p-20px f-w-bo t-a-c  f-f-Gilroy">
              <span className="UnderLineText" Style="font-size: 50px;">
                ¿Cómo trabajamos?
              </span>
            </div>

            <div className="w-100 h-a h-pr-fl-ma">
              <CardContainer>
                <Card
                  title="Conversamos"
                  subtitle="Escuchamos sus necesidades y nos ponemos al día."
                  icon={` ${MessageWriting} `}
                />
                <Card
                  title="Estudiamos su caso"
                  subtitle="Completamos el briefing y creamos estratégias."
                  icon={` ${ClipboardNotes} `}
                />
                <Card
                  title="Coordinamos presupuestos"
                  subtitle="Reunimos todo lo necesario y generamos un presupuesto."
                  icon={` ${Wallet} `}
                />

                <Card
                  title="Pasamos a la acción"
                  subtitle="Hacemos todo lo necesario y le informamos en cada proceso."
                  icon={` ${CheckCircle} `}
                />
              </CardContainer>
            </div>
          </div>
        </div>

        <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-t-10px p-10px of-a">
          <div className="w-100 h-a h-pr-fl-ma t-a-c">
            <div className="w-100 h-a h-pr-fl-ma p-20px f-w-bo t-a-c  f-f-Gilroy">
              <div className="UnderLineText" Style="font-size: 50px;">
                Comuníquese <span className="d-n m-d-b">    </span> con nosotros
              </div>
            </div>

            <div className="w-100 h-a h-pr-fl-ma d-i-f m-d-b">
              <div className="w-60 h-a m-w-100 h-pr-fl-ma ">
                <img
                  src={OSChat}
                  Style="Object-fit: contain; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma  b-s-b-b"
                />
              </div>
              <div className="w-40 h-a m-w-100 h-pr-fl-ma  ">
                <div className=" w-100 h-a h-pr-fl-ma  bg-black-node-o-70 blur ns-br-r-1 of-h">
                  <div className="w-100 h-a h-pr-fl-ma  ">
                    <div className="w-100 h-a h-pr-fl-ma f-f-Gilroy t-a-c ns-f-s-big  m-ns-f-s-big m-l-h-30 f-w-bo p-t-20px p-10px" >
                      Contacto 
                    </div>
                    <span className="w-100 h-a h-pr-fl-ma f-f-Gilroy t-a-c ns-f-s-normal p-20px ">
                      Coordine una reunión, envienos sus comentarios &
                      sugerencias o comuníquese directamente con nosotros por
                      Whatsapp!
                    </span>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
