import React, { Fragment } from "react";

import Typewriter from "typewriter-effect";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../components/btn";
import ContentBox from "../components/contentBox";
import MessageWriting from "../assets/icons/message_writing.svg";

import Wallpaper3 from "../assets/images/compressed/wallpaper-3.jpg";
import Wallpaper4 from "../assets/images/compressed/wallpaper-4.jpg";
import Wallpaper6 from "../assets/images/compressed/wallpaper-6.jpg";
import Wallpaper8 from "../assets/images/compressed/wallpaper-8.jpg";
import Wallpaper11 from "../assets/images/compressed/wallpaper-11.jpg";
import Wallpaper12 from "../assets/images/compressed/wallpaper-12.jpg";
import Wallpaper13 from "../assets/images/compressed/wallpaper-13.jpg";
import Promo1 from "../assets/images/promo/promo-1.jpg";

import "../Styles/seed.css";
import "../Styles/home.css";

export default function Home(props) {
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
   
    
});
  
  return (
    <Fragment Fragment>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b p-t-10px p-b-10px">
        <div
          className="m-d-n w-50 h-100 h-pr-fl-ma b-s-b-b p-r-10px "
          Style="z-index: 2000;"
        >
          <div className="w-90 bg-black-node-o-70 blur ns-br-r-1 of-h p-20px h-a h-pr-fl-ma r-v-c b-s-b-b">
            <div id="app"
              className="app w-100  f-f-Gilroy c-white h-pr-fl-ma h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 50px; line-height: 55px;"
            >
              
              <Typewriter  className="homewriter"
                onInit={(typewriter) => {
                  typewriter
                  .typeString('Le damos <br/>la bienvenida a... <br/><strong>OrigenStudios<span Style="color: #e1a54b;">.</span>com</strong>')
                    .pauseFor(200)
                    .deleteAll(10)
                    .typeString('Somos la primer<br />agencia del Uruguay...')
                  .pauseFor(200)
                  .deleteAll(10)
                  .typeString('en utilizar<br /> <span Style="color: #27ae60;">Inteligencia Artificial</span>')
                  .pauseFor(200)
                  .deleteAll(10)
                  .typeString('para potenciar sus <br /> <span Style="color: #27ae60;">Recursos</span>')
                  .pauseFor(200)
                  .deleteChars(8)
                  .typeString('<span Style="color: #27ae60;">Ventas</span>')
                  .pauseFor(200)
                  .deleteChars(6)
                  .typeString('<span Style="color: #27ae60;">Oportunidades</span>')
                  .pauseFor(200)
                  .deleteAll(10)
                  .typeString('Nos especializamos en: <br />')
                  .typeString('<span Style="color: #27ae60;">Diseño gráfico</span>')      .pauseFor(200).deleteChars(14)
                  .typeString('<span Style="color: #27ae60;">Marketing Digital</span>')
                    .pauseFor(200)
                    .deleteChars(17)
                  .typeString('<span Style="color: #27ae60;">Desarrollo Web/App</span>')
                    .pauseFor(200)
                    .deleteChars(18)
                  .typeString('<span Style="color: #27ae60;">Asesoría Legal</span>')
                    .pauseFor(200)
                    .deleteChars(5)
                    .typeString('<span Style="color: #27ae60;">financiera</span>')
                    .deleteChars(10)
                    .pauseFor(200)
                    .typeString('<span Style="color: #27ae60;">de marca</span>')
                    .pauseFor(200)
                    .deleteAll(10)
                    .typeString('Le damos <br/>la bienvenida a... <br/><strong>OrigenStudios<span Style="color: #e1a54b;">.</span>com</strong>')
                

                    .start();
                                 }} options={{ delay: 60, }}
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
                    enlace={"https://calendly.com/origenstudios/first_steps"}
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
        <div className="m-w-100 w-50 h-100 b-s-b-b h-pr-fl-ma ">
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
                <div className="w-100 h-a h-pr-fl-ma r-v-c b-s-b-b">
                  <h1
                    className="w-a f-f-Gilroy c-white h-pr-fl-ma r-v-c h-a p-l-10px b-s-b-b m-a"
                    Style="font-size: 50px; line-height: 55px;"
                  >
                    <b>Le damos la bienvenida...</b>
                  </h1>
                  <h1
                    className="w-a f-f-Gilroy c-white h-pr-fl-ma  r-v-c h-a p-l-10px b-s-b-b m-a"
                    Style="font-size: 25px; line-height: 30px;"
                  >
                    <b>
                      Se encuentra en el origen <br /> de su nueva marca.
                    </b>
                  </h1>

                  <div className="w-100 h-a h-pr-fl-ma m-b-20px ">
                    <div className="w-a h-a h-pr-fl-ma a-i-c">
                      <ContentBox
                        className="h-pr-fl-ma w-a h-a p-l-10px m-t-10px "
                        subtitle={"¡Comencemos a producir su marca hoy mismo!"}
                      />
                    </div>
                    <div className="w-a h-a h-pr-fl-ma ">
                      <div className="w-a h-a h-pr-fl-ma p-l-10px ">
                        <Btn
                          className=""
                          text="Coordinar reunión"
                          enlace={
                            "https://calendly.com/origenstudios/first_steps"
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
                    <div className="w-100 h-pr-fl-ma h-20px p-t-20px p-r-20px">
                      <div className="w-80 h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider "></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="m-d-n d-b h-pr-fl-ma b-s-b-b p-5px">
                &nbsp;
              </SwiperSlide>

              <SwiperSlide className="h-pr-fl-ma b-s-b-b p-5px">
                <img
                  src={Promo1}
                  Style="Object-fit: contain; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma  b-s-b-b"
                />
              </SwiperSlide>
              <SwiperSlide className="h-pr-fl-ma  b-s-b-b p-5px">
                <img
                  src={Wallpaper12}
                  Style="Object-fit: cover; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma  b-s-b-b"
                />
              </SwiperSlide>
              <SwiperSlide className="h-pr-fl-ma  b-s-b-b p-5px">
                <img
                  src={Wallpaper3}
                  Style="Object-fit: cover; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma   b-s-b-b"
                />
              </SwiperSlide>
              <SwiperSlide className="h-pr-fl-ma  b-s-b-b p-5px">
                <img
                  src={Wallpaper4}
                  Style="Object-fit: cover; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma   b-s-b-b"
                />
              </SwiperSlide>
              <SwiperSlide className="h-pr-fl-ma  b-s-b-b p-5px">
                <img
                  src={Wallpaper11}
                  Style="Object-fit: cover; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma   b-s-b-b"
                />
              </SwiperSlide>
              <SwiperSlide className="h-pr-fl-ma  b-s-b-b p-5px">
                <img
                  src={Wallpaper6}
                  Style="Object-fit: cover; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma   b-s-b-b"
                />
              </SwiperSlide>
              <SwiperSlide className="h-pr-fl-ma  b-s-b-b p-5px">
                <img
                  src={Wallpaper13}
                  Style="Object-fit: cover; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma   b-s-b-b"
                />
              </SwiperSlide>
              <SwiperSlide className="h-pr-fl-ma  b-s-b-b p-5px">
                <img
                  src={Wallpaper8}
                  Style="Object-fit: cover; "
                  alt=""
                  className="w-100 h-100 h-pr-fl-ma   b-s-b-b"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}
