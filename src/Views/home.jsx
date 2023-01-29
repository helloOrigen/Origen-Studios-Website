import React, { Fragment, useRef, useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../components/btn";
import ContentBox from "../components/contentBox";
import MessageWriting from "../assets/icons/message_writing.svg";
import Typewriter from "../components/tipewriter";

import Wallpaper1 from '../assets/images/compressed/wallpaper-1.png';
import Wallpaper2 from '../assets/images/compressed/wallpaper-2.png';
import Wallpaper3 from '../assets/images/compressed/wallpaper-3.png';
import Wallpaper4 from '../assets/images/compressed/wallpaper-4.png';
import Wallpaper5 from '../assets/images/compressed/wallpaper-5.png';
import Wallpaper6 from '../assets/images/compressed/wallpaper-6.png';
import Wallpaper7 from '../assets/images/compressed/wallpaper-7.png';
import Wallpaper8 from '../assets/images/compressed/wallpaper-8.png';
import Wallpaper9 from '../assets/images/compressed/wallpaper-9.png';
import Wallpaper10 from '../assets/images/compressed/wallpaper-10.png';
import Wallpaper11 from '../assets/images/compressed/wallpaper-11.png';
import Wallpaper12 from '../assets/images/compressed/wallpaper-12.png';
import Wallpaper13 from '../assets/images/compressed/wallpaper-13.png';
import Wallpaper14 from '../assets/images/compressed/wallpaper-14.png';

import Promo1 from "../assets/images/promo/promo-1.png";

import "../Styles/seed.css";
import "../Styles/home.css";

export default function Home(props) {
  const { children } = props;

  return (
    <>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b p-t-10px p-b-10px">
        <div
          className="m-d-n w-50 h-100 h-pr-fl-ma b-s-b-b p-r-10px "
          Style="z-index: 2000;"
        >
          <div className="w-100 h-a h-pr-fl-ma r-v-c b-s-b-b">
            <h1
              className="w-a f-f-Gilroy c-white h-pr-fl-ma r-v-c h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 50px; line-height: 55px;"
            >
              <b >Le damos la bienvenida...</b>
            </h1>
            <h1
              className="w-a f-f-Gilroy c-white h-pr-fl-ma  r-v-c h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 25px; line-height: 30px;"
            >
              <b>Se encuentra en el origen de su nueva marca.</b>
            </h1>

            <div className="w-100 h-a h-pr-fl-ma m-b-20px ">
              <div className="w-a h-a h-pr-fl-ma ">
                <div className="w-a h-a h-pr-fl-ma p-l-10px ">
                  <Btn className="" text="Coordinar ahora"  enlace={"https://calendly.com/origenstudios/first_steps"}>
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
              <div className="w-a h-a h-pr-fl-ma a-i-c">
                <ContentBox
                  className="h-pr-fl-ma w-a h-a p-l-10px m-t-10px "
                  subtitle={
                    "Coordine una reunión y comience su marca hoy mismo!"
                  }
                />
              </div>
              <div className="w-100 h-pr-fl-ma h-20px p-t-20px p-r-20px">
                <div className="w-80 h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider "></div>
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
              <b>Se encuentra en el origen de su nueva marca.</b>
            </h1>

            <div className="w-100 h-a h-pr-fl-ma m-b-20px ">
              <div className="w-a h-a h-pr-fl-ma ">
                <div className="w-a h-a h-pr-fl-ma p-l-10px ">
                  <Btn className="" text="Coordinar ahora" enlace={"https://calendly.com/origenstudios/first_steps"}>
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
              <div className="w-a h-a h-pr-fl-ma a-i-c">
                <ContentBox
                  className="h-pr-fl-ma w-a h-a p-l-10px m-t-10px "
                  subtitle={
                    "Coordine una reunión y comience su marca hoy mismo!"
                  }
                />
              </div>
              <div className="w-100 h-pr-fl-ma h-20px p-t-20px p-r-20px">
                <div className="w-80 h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider "></div>
              </div>
            </div>
          </div>
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
                  src={Wallpaper7}
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
    </>
  );
}
