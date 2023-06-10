import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Btn from "../components/btn";
import ContentBox from "../components/contentBox";

import CardContainer from "../components/cardcontainer";
import Card from "../components/card";

import OSWoman from "../assets/images/compressed/os-woman.jpg";
import SunSummer from "../assets/images/compressed/sunsummerthehero.jpg";
import TheoryFragance from "../assets/images/compressed/theory-fragance.jpg";
import Caffeine from "../assets/images/compressed/caffeine.jpg";
import OrigenesMovie from "../assets/images/compressed/origenes-movie.jpg";
import Ebook from "../assets/images/compressed/ebook.jpg";
import AromaDeAmor from "../assets/images/compressed/aromadeamor.jpg";
import Camisa from "../assets/images/compressed/camisa.jpg";
import GuerreraAtemproal from "../assets/images/compressed/guerrera-atemporal.jpg";
import PromoOtoño from "../assets/images/compressed/promo-otoño.jpg";
import GodCreator from "../assets/images/compressed/god-creator.jpg";
import HudStream from "../assets/images/compressed/hud-stream.jpg";

import PromoHome from "../assets/images/compressed/promo-home.jpg";
import ChevronRight from "../assets/icons/chevron_right.svg";
import CheckCircle from "../assets/icons/check-circle.svg";
import Calendar from "../assets/icons/calendar.svg";
import Envelope from "../assets/icons/envelope.svg";

import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import BehanceIcon from "../assets/icons/behance-icon.svg";
import WhatsappIcon from "../assets/icons/whatsapp-icon.svg";

import "../Styles/seed.css";
import "../Styles/home.css";

export default function Home(props) {
  var app = document.getElementById("app");

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  });

  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b of-x-auto f-f-Gilroy c-white">
        <div className="w-100 r-h-c h-100 h-pr-fl-ma">

        <div className="w-100 h-a h-pr-fl-ma b-s-b-b  m-d-b   m-t-10px m-b-20px ">

            <span className="w-100 h-a h-pr-fl-ma b-s-b-b p-t-100px p-b-100px r-h-c f-w-bo f-f-Gilroy ns-f-s-big t-a-c m-ns-f-s-big">Somos el origen<br />de su marca.</span>

            <div className="w-80 m-w-100 r-h-c h-a  h-pr-fl-ma b-s-b-b  m-t-20px m-b-20px ">
              <div className=" m-w-80 r-h-c h-a h-pr-fl-ma b-s-b-b flexbox f-w-n-w  ">
            <Btn className="w-200px m-w-100 p-l-20px p-r-20px p-10px m-5px f-w-bo br-s-solid br-c-white br-r-50px" text="Productos"></Btn>
            <Btn className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px" enlace="/services" text="Servicios"></Btn>
            </div>
          
          </div>

     
        </div>

        {/*  // !                            SECCIÓN 1 |  CONTENEDOR CENTRAL                              */}


           {/* CONTENEDOR  */}
        <div className="w-90  r-h-c  m-w-90 h-a h-pr-fl-ma b-s-b-b bg-d m-d-b m-b-20px">
        {/* PROCEDIMIENTO */}
       
             {/*  // ?                            SECCION 1 | CONTENIDO  80%                       */}
        
        <div className="w-70   p-10px tab-w-100 m-w-100 h-a h-pr-fl-ma b-s-b-b m-d-b  "> 
             {/*  // todo                            SECCION 1 | QUE PODEMOS HACER POR Y PARA TI                     */}
        

          <div className="w-100 h-a  m-h-auto bg-d-t b-s-b-b m-w-100 tab-w-100 h-a h-pr-fl-ma m-b-20px">
            <div className="w-100 h-a t-a-c h-pr-fl-ma ns-f-s-medium  f-f-Gilroy f-w-bo b-s-b-b p-20px">
              {" "}
              ¿Qué podemos hacer por y para ti?
            </div>
            <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b p-20px">
              <CardContainer className="m-b-20px h-a ">
                <Card
                  type="card-tall"
                  ContentBox
                  image={TheoryFragance}
                  title="Productos"
                  description="Creamos desde el envase, hasta la caja, incluyendo todos los elementos gráficos para la venta y distribución de su producto."
                  alt="Wallpaper2"
               
                />
                <Card
                  type="card-tall"
                  ContentBox
                  image={Caffeine}
                  title="Servicios"
                  description="Banners, Ploteos, Menu's, accesorios, Todo el estilo pronto para su negocio."
                  alt="Wallpaper3"
                
                />
                 <Card
                  type="card-tall"
                  ContentBox
                  image={PromoOtoño}
                  title="Promociones"
                  description="Banners, Ploteos, Menu's, accesorios, Todo el estilo pronto para su negocio."
                  alt="Wallpaper3"
              
                />
              </CardContainer>
              <div className="w-100 h-a t-a-c h-pr-fl-ma ns-f-s-medium f-f-Gilroy f-w-bo b-s-b-b p-20px ns-c-e">
                {" "}
                Hacemos realidad todo lo necesario para que triunfes con tu
                producto, tu servicio, como negocio o como artísta.
              </div>
            </div>
          </div>

  {/*  // todo                            SECCION 1 | PORQUÉ ELEGIRNOS                   */}

        {/* Porque elegirnos */}
        <div className="w-100 m-w-100 h-a h-pr-fl-ma bg-d-t m-b-20px b-s-b-b p-20px ">
          <div className="w-50 m-w-100 tab-w-100 h-a h-pr-fl-ma b-s-b-b bg-d of-h">
            <img
              className="w-100 h-pr-fl-ma"
              Style="object-fit: cover;"
              src={OSWoman}
              alt=""
            />
          </div>
          <div className="w-50 m-w-100 tab-w-100 h-a h-pr-fl-ma b-s-b-b ">
            <div className="w-95 tab-w-100 m-w-100 r-h-c">
              <ContentBox
                className=" p-10px w-100"
                title="¿Porqué elegirnos?"
                subtitle="Somos más que una agencia de diseño."
              ></ContentBox>
              <span className="w-100 h-a h-pr-fl-ma bg-d m-b-5px p-l-15px p-r-15px p-10px b-s-b-b">
                Utilizamos metodologías innovadoras auditadas con inteligencia
                artificial.
              </span>
              <span className="w-100 h-a h-pr-fl-ma bg-d m-b-5px p-l-15px p-r-15px p-10px b-s-b-b">
                Contamos con tecnología de autoría propia, única en el mercado
                capaz de acelerar nuestros procesos, mejorar la calidad y el
                rendimiento de todos nuestros servicios.
              </span>
              <span className="w-100 h-a h-pr-fl-ma bg-d m-b-5px p-l-15px p-r-15px p-10px b-s-b-b">
                {" "}
                Ofrecemos soporte 24/7 y servicios para casos de emergencias,
                estando allí dónde la prioridad es ser los primeros.
              </span>
             
            </div>
          </div>
        </div>

    




        </div>
 
       {/*  // ?                            SECCION 1 | SIDEBAR 20%                      */}
        <div className="w-30  m-w-100 h-a h-pr-fl-ma b-s-b-b p-10px  m-d-b  tab-d-n ">
             {/*  // todo                            SECCION 1 - SIDEBAR | SOLICITE PRESUPUESTOS                  */}
          <div className="w-100 h-a h-pr-fl-ma  bg-d-t p-10px m-b-10px">
          Solicite presupuestos en:
        <div className="w-100 h-a h-pr-fl-ma bg-d-t p-5px flexbox m-b-5px">
            <img className="w-and-h-50px bg-d p-5px" src={WhatsappIcon} alt="" />
            <div className="w-80 h-a l-h-15px m-l-20px ">
              <div className="w-100 h-a r-v-c">
              <span className="w-100 f-w-bo">Whatsapp</span> <br /><span className="h-pr-fl-maw-100 ns-f-s-small">(+598) 92 22 15 16</span></div></div>
              <div className="h-pr-fl-ma w-and-h-50px  "> <Btn className="w-100 h-100" text="IR" enlace=""></Btn> </div>
            </div>
            <div className="w-100 h-a h-pr-fl-ma bg-d-t p-5px flexbox m-b-5px">
            <img className="w-and-h-50px bg-d p-5px" src={Calendar} alt="" />
            <div className="w-80 h-a l-h-15px m-l-20px ">
              <div className="w-100 h-a r-v-c">
              <span className="w-100 f-w-bo">Agenda</span> <br /><span className="h-pr-fl-maw-100 ns-f-s-small">(+598) 92 22 15 16</span></div></div>
              <div className="h-pr-fl-ma w-and-h-50px  "> <Btn className="w-100 h-100" text="IR" enlace=""></Btn> </div>
            </div>
            <div className="w-100 h-a h-pr-fl-ma bg-d-t p-5px flexbox m-b-5px">
            <img className="w-and-h-50px bg-d p-5px" src={LinkedinIcon} alt="" />
            <div className="w-80 h-a l-h-15px m-l-20px ">
              <div className="w-100 h-a r-v-c">
              <span className="w-100 f-w-bo">Linkedin</span> <br /><span className="h-pr-fl-maw-100 ns-f-s-small">https://www.linkedin.com/company/helloorigen/</span></div></div>
              <div className="h-pr-fl-ma w-and-h-50px  "> <Btn className="w-100 h-100" text="IR" enlace=""></Btn> </div>
            </div>
            <div className="w-100 h-a h-pr-fl-ma bg-d-t p-5px flexbox m-b-5px">
            <img className="w-and-h-50px bg-d p-5px" src={Envelope} alt="" />
            <div className="w-80 h-a l-h-15px m-l-20px ">
              <div className="w-100 h-a r-v-c">
              <span className="w-100 f-w-bo">Email</span> <br /><span className="h-pr-fl-maw-100 ns-f-s-small">hello@OrigenStudios.com</span></div></div>
              <div className="h-pr-fl-ma w-and-h-50px  "> <Btn className="w-100 h-100" text="IR" enlace=""></Btn> </div>
            </div>
          
                  </div>
            {/*  // todo                            SECCION 1 - SIDEBAR | ADS INTERNO                  */}
           <div className="w-100 h-a h-pr-fl-ma  bg-d-t p-10px m-b-10px">   
            <CardContainer className="h-a ">
                <Card
                  type="card-tall"
               
                  image={GodCreator}
                  alt="Wallpaper2"
               
                /> </CardContainer>
              </div>
            </div>
            {/*  // todo                            SECCION 1 | PROCEDIMIENTO                 */}

        <div className="w-100 m-w-100 h-a h-pr-fl-ma b-s-b-b p-20px bg-d m-d-b flexbox   m-b-20px">

<div className="w-33 m-w-100 h-a h-pr-fl-ma b-s-b-b flexbox ">
<div className="flexbox p-10px">
  <div className="w-50px h-50px h-pr-fl-ma br-w-1px br-s-solid br-r-50px">
    <span className="centered" Style="font-size: 30px;">1</span>
  </div>{" "}
  <span className="h-pr-fl-ma f-w-bo m-l-10px">
    COORDINAMOS&nbsp;
    <br className="m-d-n" />
    PRESUPUESTOS
  </span>
  <div className="w-a h-a h-pr-fl-ma m-d-n m-l-10px ns-fill-e">
    <img className="h-40px h-pr-fl-ma " src={ChevronRight} alt="" />
  </div>
</div>
</div>


   <div className="w-33 m-w-100  h-a h-pr-fl-ma b-s-b-b flexbox  ">
   <div className="flexbox p-10px">
  <div className="w-and-h-50px h-pr-fl-ma br-w-1px br-s-solid br-r-50px">
    <span className="centered" Style="font-size: 30px;">2</span>
  </div>{" "}
  <span className="h-pr-fl-ma f-w-bo m-l-10px">
    COMPLETAMOS&nbsp;
    <br className="m-d-n" />
    EL BRIEFING
  </span>
  <div className="w-a h-a h-pr-fl-ma m-d-n m-l-10px ns-fill-e">
    <img className="h-40px h-pr-fl-ma " src={ChevronRight} alt="" />
  </div>
  </div>{" "}
</div>




<div className="w-33 m-w-100 h-a h-pr-fl-ma b-s-b-b flexbox   ">
  <div className="flexbox p-10px">
  <div className="w-50px h-50px h-pr-fl-ma br-w-1px br-s-solid br-r-50px">
    <span className="centered" Style="font-size: 30px;">3</span>
  </div>{" "}
  <span className="h-pr-fl-ma f-w-bo m-l-10px">
      INICIAMOS&nbsp;
      <br className="m-d-n" />
      LA&zwj;&nbsp;&zwj;PRODUCCIÓN
    </span>
    <div className="w-a h-a h-pr-fl-ma m-d-n m-l-10px ns-fill-e">
    <img className="h-40px h-pr-fl-ma " src={CheckCircle} alt="" />
  </div>
    </div>

</div>

</div>
        </div>

       {/*  // !                                 SECCION 2                           */}

       

  <div className="w-90 r-h-c  h-a h-pr-fl-ma b-s-b-b p-20px bg-d  m-b-20px">

<div className="w-100 m-w-100 h-a t-a-c h-pr-fl-ma b-s-b-b ">
          <div className="bg-d-t  f-f-Gilroy f-w-bo m-b-20px" Style="font-size: 50px;">
            ¿Eres influencer o quieres empezar?</div>
          </div>
          <div className="w-100 h-a t-a-c h-pr-fl-ma b-s-b-b ">
<CardContainer className="m-w-100  h-a ">
              <Card
                type="card-wide"

                image={HudStream}
               
                alt="Wallpaper2"
             
              />
          
            </CardContainer>
            </div>



            <div className="w-100 m-w-100 h-a h-pr-fl-ma bg-d m-b-20px b-s-b-b  p-20px">
          <ContentBox
            className="t-a-c w-100"
            title="¡Todo lo que necesitas para comenzar o actualizarte!"
          ></ContentBox>

          <div className="w-100 h-100 h-pr-fl-ma b-s-b-b  flexbox m-d-b">
            <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px">
              <ContentBox
                className="p-20px bg-d"
                title="Miniaturas Impactantes"
                subtitle="Somos expertos en cickBait Ok no..."
                text="Creamos diseños personalizados que reflejan la esencia de tu contenido y generan curiosidad en los espectadores. Nuestras miniaturas están diseñadas para destacar entre la multitud y aumentar la visibilidad de tus videos en plataformas de streaming y redes sociales. "
              ></ContentBox>
            </div>
            <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px ">
              <ContentBox
                className="p-20px bg-d"
                title="Logotipos y Marcas"
                subtitle="Status de servicio Online"
                text="Diseñamos tu Logotipo para ayudarte a establecer una identidad visual única y memorable. También, creamos una identidad de marca coherente que incluya paleta de colores, tipografía y elementos gráficos, para que puedas transmitir una imagen profesional y cohesiva en todas tus plataformas y contenidos"
              ></ContentBox>
            </div>
            <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px">
              <ContentBox
                className="p-20px bg-d"
                title="Interfaces y HUDs."
                subtitle="Primer consulta gratuita"
                text="Creamos interfaces intuitivas y llamativas que resaltan tus contenidos y mejoran la interacción con tu audiencia. Nuestros diseños están diseñados para adaptarse a tus necesidades específicas y reflejar tu personalidad y estilo único."
              ></ContentBox>
            </div>
            
          </div>
          </div>


            </div>


{/*  // !                                 SECCION 3                            */}

       
        <div className="w-90 r-h-c  h-a h-pr-fl-ma flexbox tab-d-b m-d-b bg-d m-b-20px b-s-b-b p-10px">
          <div className="w-50 h-a  m-h-auto bg-d b-s-b-b m-w-100 tab-w-100 h-a h-pr-fl-ma ">
            <div className="w-100 h-a t-a-c h-pr-fl-ma b-s-b-b p-20px">
            <span className="bg-d-t  f-f-Gilroy f-w-bo " Style="font-size: 50px;">
            Diseño de Portadas de Álbumes y Artes para Artistas Musicales</span>
            </div>
            <ContentBox
                className="p-20px bg-d t-a-c"
 
       
                text="Destaca en la industria musical con nuestras portadas de álbumes y artes de alta calidad. Nuestro equipo de diseñadores especializados se encarga de crear diseños únicos y cautivadores que representen tu estilo musical y reflejen la esencia de tu música. 
                "
              ></ContentBox>

           
            
              <div className="w-100 h-a t-a-c h-pr-fl-ma ns-f-s-medium f-f-Gilroy f-w-bo b-s-b-b p-20px ns-c-e">
                {" "}
                Hacemos realidad todo lo necesario para que triunfes con tu
                producto, tu servicio, como negocio o como artísta.
              </div>
           
          </div>

          <div className="w-50 m-w-100 tab-w-100 h-a h-pr-fl-ma p-20px">
            <div className="w-80 m-w-100 h-pr-fl-ma r-h-c t-10px m-t-0px">
              <CardContainer className="m-b-20px">
                <Card
                  type="card-tall"
                  ContentBox
                  image={SunSummer}
                  title="Hacemos todo lo que necesitas."
       
                  alt="Wallpaper1"
                
                />{" "}
              </CardContainer>
            </div>
          </div>
        </div>


{/*  // !                                 SECCION 4    | MULTIPLES IMAGENES (cards)                         */}
        <div className="w-90 r-h-c h-a h-pr-fl-ma bg-d m-b-20px b-s-b-b p-20px">
          <CardContainer className="m-b-20px">
            <Card
              type="card-tall"
              ContentBox
              image={OrigenesMovie}
              title="Publicidad"
              description="Anuncios publicitarios, Carteleras de cine, Animadas y estáticas."
              alt="Wallpaper4"
              filename="wallpaperX"
              filetype="jpg"
              filesize="0000x0000px"
            />
            <Card
              type="card-tall"
              ContentBox
              image={Ebook}
              title="Imprenta "
              filename="wallpaperX"
              filetype="jpg"
              filesize="0000x0000px"
            />
            <Card
              type="card-tall"
              ContentBox
              image={AromaDeAmor}
              title="Series & Televisión"
              filename="wallpaperX"
              filetype="jpg"
              filesize="0000x0000px"
            />
            <Card
              type="card-tall"
              ContentBox
              image={Camisa}
              title="Indumentaria"
              filename="wallpaperX"
              filetype="jpg"
              filesize="0000x0000px"
            />
            <Card
              type="card-tall"
              ContentBox
              image={GuerreraAtemproal}
              title="Arte Digital 3D"
              filename="wallpaperX"
              filetype="jpg"
              filesize="0000x0000px"
            />
          </CardContainer>
        </div>

        <div className="w-90 r-h-c h-a h-pr-fl-ma bg-d m-b-20px b-s-b-b  p-20px">
          <ContentBox
            className="t-a-c w-100"
            title="Tenemos la solución a su necesidad."
          ></ContentBox>

          <div className="w-100 h-100 h-pr-fl-ma b-s-b-b  flexbox m-d-b">
            <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px">
              <ContentBox
                className="p-20px bg-d"
                title="Presupuestos personalizados."
                subtitle="Primer servicio con descuentos"
                text="Nos ajustamos a su presupuesto y le ayudamos a generar el mayor rendimiento con el menor costo posible, manteniendo la calidad y los mejores resultados."
              ></ContentBox>
            </div>
            <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px">
              <ContentBox
                className="p-20px bg-d"
                title="Asesoría personalizada."
                subtitle="Primer consulta gratuita"
                text="Estudiamos su necesidad para ofrecerle el servicio más directo y eficiente posible. Además, le acompañamos en todo el proceso y por supuesto, posteriormente a él, para que logre sus objetivos lo antes posible."
              ></ContentBox>
            </div>
            <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px ">
              <ContentBox
                className="p-20px bg-d"
                title="Compromiso y Seguridad"
                subtitle="Status de servicio Online"
                text="Nuestro compromiso es con cada detalle de su pieza gráfica, incluyendo los tiempos de entrega. Consulte en todo momento el tiempo estimado de entrega."
              ></ContentBox>
            </div>
          </div>
         
        </div>
        <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">
            &nbsp; 
          </div>
      </div>
      </div>
    </Fragment>
  );
}
