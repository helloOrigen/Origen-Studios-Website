import React, { Fragment } from "react";

import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import OSLogoSymbolSvg from '../assets/logo/OS-Logo-Symbol-White-Svg.svg';
import OSLogotipo from '../assets/logo/OS-logotipo-m-white-transparent_svg.svg';
import ContentBox from "../components/contentBox";
import Nick from "../assets/team/nickolas-machado.jpg";
import Vicky from "../assets/team/victoria-brylka.jpg";
import Cesar from "../assets/team/cesar-lima.jpg";


const Team = () => {
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75, // SET TO USE A 1 SECOND DELAY
      cursorClassName: 'cursorSize', // SET TO MY CUSTOM CLASS NAME
      
  });

  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto  ">
      <div className="h-pr-fl-ma m-w-100 w-100  h-100" Style="overflow: visible !important;">
        <div className="  centered " Style="z-index: 10000; overflow:visible  !important; height: 150%;">
      <img className="w-100 h-100 h-pr-fl-ma " Style="object-fit: contain;" src={OSLogotipo} alt="OS-LOGO"/> 
      </div> </div>

        <div className="h-pr-fl-ma m-w-100 w-100  h-100   b-s-b-b f-w-w">
        <Swiper
            direction={"horizontal"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            slidesPerView={1}
            breakpoints= {{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
           
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: false,
            }}
            
            modules={[Autoplay, Keyboard, Pagination]}
            className="mySwiper w-100 h-100 m-h-500px h-pr-fl-ma b-s-b-b"
          >
            {/* OS-TEAMWORK | CESAR ------------------------------------------------ */}

            <SwiperSlide className="h-pr-fl-ma  w-a b-s-b-b   "> 
           
           <div className="h-e h-pr-fl-ma  centered">
             <div
                className="w-200px h-200px h-pr-fl-ma circle r-h-c p-10px m-b-20px h-up"
                Style="border: 1px solid; border-color: white;"
             ><img
             src={Vicky}
             className="w-100 h-100 h-pr-fl-ma circle h-e-color h-e-scale"
             Style="object-fit: contain; stroke: #ffffff !important; z-index: 9999;"
            alt="Nickolas Machado"
   
           /></div>  <div
           className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo t-a-c f-f-Gilroy  m-b-10px"
           Style="font-size: 15px; line-height: 20px;"
         >
            Victoria Brylka
         </div> 
             <span className="h-pr-fl-ma b-s-b-b divider r-h-c m-b-10px">&nbsp;</span>
             <div
               className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo ns-c-e t-a-c f-f-Gilroy"
               Style="font-size: 10px; line-height: 15px;"
             >
               Dir. Depto. Desarrollo e investigación Legal.
             </div> 
         </div>
        
           </SwiperSlide>

            <SwiperSlide className="h-pr-fl-ma  w-a b-s-b-b   "> 
           
           <div className="h-e h-pr-fl-ma  centered">
             <div
                className="w-200px h-200px h-pr-fl-ma circle r-h-c p-10px m-b-20px h-up"
                Style="border: 1px solid; border-color: white;"
             ><img
             src={Cesar}
             className="w-100 h-100 h-pr-fl-ma circle h-e-color h-e-scale"
             Style="object-fit: contain; stroke: #ffffff !important; z-index: 9999;"
            alt="Nickolas Machado"
   
           /></div>  <div
           className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo t-a-c f-f-Gilroy  m-b-10px"
           Style="font-size: 15px; line-height: 20px;"
         >
            Cesar Lima
         </div> 
             <span className="h-pr-fl-ma b-s-b-b divider r-h-c m-b-10px">&nbsp;</span>
             <div
               className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo ns-c-e t-a-c f-f-Gilroy"
               Style="font-size: 10px; line-height: 15px;"
             >
               Dir. Depto. Administración & Finanzas.
             </div> 
         </div>
        
           </SwiperSlide>
           {/* OS-TEAMWORK | NICK ------------------------------------------------ */}
           <SwiperSlide className="h-pr-fl-ma  w-a b-s-b-b   "> 
           
           <div className="h-e h-pr-fl-ma  centered">
             <div
                className="w-200px h-200px h-pr-fl-ma circle r-h-c p-10px m-b-20px h-up"
                Style="border: 1px solid; border-color: white;"
             ><img
             src={Nick}
             className="w-100 h-100 h-pr-fl-ma circle h-e-color h-e-scale"
             Style="object-fit: contain; stroke: #ffffff !important; z-index: 9999;"
            alt="Nickolas Machado"
   
           /></div>  <div
           className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo t-a-c f-f-Gilroy  m-b-10px"
           Style="font-size: 15px; line-height: 20px;"
         >
            Nickolas Machado 
         </div> 
             <span className="h-pr-fl-ma b-s-b-b divider r-h-c m-b-10px">&nbsp;</span>
             <div
               className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo ns-c-e t-a-c f-f-Gilroy"
               Style="font-size: 10px; line-height: 15px;"
             >
               Dir. Depto. Producción & Diseño Digital.
             </div> 
         </div>
        
           </SwiperSlide>
</Swiper>




        </div>




        <div className="h-pr-fl-ma w-100 w-40 h-100 m-h-500px b-s-b-b  ">
          
         <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b ">
            <div className="w-60 m-w-80 bg-black-node-o-70 blur ns-br-r-1 of-h p-20px m-w-100 h-a f-f-Gilroy h-pr-fl-ma centered">
              <ContentBox
                className="h-pr-fl-ma w-100 h-a "
                title={"Un equipo en expansión"}
                subtitle={"Crecemos contigo."}
                text=""
              />
               <Typewriter
                onInit={(typewriter) => {
                       typewriter.typeString('Somos un equipo de expertos en expansión, completamente a disposición de su marca. <br/> Nos reunimos con el objetivo de potenciar la calidad de los productos y servicios de las empresas con las ideas más grandes y ambiciosas. ')
                    .pauseFor(200)
                    typewriter.typeString('Tenemos amplia experiencia en el desarrollo comercial de productos y servicios, contenido digital, marketing y ventas. ')
                    .pauseFor(200)
                    typewriter.typeString('Contamos con el conocimiento y las habilidades necesarias para hacer posible cualquier necesidad que su marca tenga.  <br/> <br/>')
                    .pauseFor(200)
                    typewriter.typeString('Por cualquier consulta, no dude en comunicarse con nosotros!')
                    .pauseFor(200)
                    .start();
                }} options={{ delay: 20, }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;