import React, { Fragment } from "react";
import Adsense from "../components/Adsense";

import {
  Btn,
  ContentBox,
  CardContainer,
  Card,
  ImageComponent,
  NewsletterForm,
} from "../components/index";

import Concepts from "../assets/images/compressed/concepts.png";
import BannerPrincipal from "../assets/images/compressed/banner-principal.jpg";
import BannerPrincipalMobile from "../assets/images/compressed/banner-principal-mobile.jpg";
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
import TitleStore from "../assets/images/compressed/titlestore.jpg";
import TitleStoreMobile from "../assets/images/compressed/titlestoremobile.jpg";
import BloosyAdHorizontal from "../assets/images/compressed/bloosyadhorizontal.jpg";
import BloosyAdSquare from "../assets/images/compressed/bloosyadsquare.jpg";

import Title from "../components/title";

import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  BehanceIcon,
  WhatsappIcon,
  DiscordIcon,
  ChevronRight,
  CheckCircle,
  ChevronUpDouble,
  Calendar,
  Envelope,
  MessageWriting,
} from "../components/icons";

import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b of-x-auto f-f-Gilroy c-white">
        <div className="w-100 r-h-c h-100 h-pr-fl-ma m-t-100px ">
         
          <div className="w-95 r-h-c  h-a h-pr-fl-ma b-s-b-bs t-a-c m-d-b noselect m-b-50px">
          <div className="w-25 m-d-n  h-a h-pr-fl-ma b-s-b-b t-a-c   ">
           <a href="/concepts">
            <div className="w-and-h-250px of-h image-container h-pr-fl-ma bg-d-t  r-h-c ns-br-r-2">  <img
                    className="w-100 h-e-scale ns-br-r-2 a-h-c p-a m-a m-d-b "
                    src={Concepts}
                    alt="Ver Conceptos"
                  /> <div className="centered w-100 h-a bg-d" Style="z-index: 99999;">
                    <Title className="w-100 ns-c-white" h4="Nuevos Conceptos:"></Title>
                    <Title className="w-100    ns-c-e-animated" h2="LOGOTIPOS"></Title>
                   
                  </div> </div></a>
          </div>
            <div className="w-50 m-w-100  h-a h-pr-fl-ma b-s-b-b  m-b-20px ">
              <div className="w-100  h-pr-fl-ma  m-t-20px"> 
              <Title h1="OrigenStudios" sup="&reg;"></Title>
              <Title h3="Somos el origen de su marca"></Title>

              <div className="m-w-80 r-h-c h-a h-pr-fl-ma b-s-b-b flexbox f-w-n-w m-t-20px  ">
                <Btn
                  className="w-a m-w-100 p-l-20px p-r-20px  ns-bg-e f-w-bo br-s-solid br-c-white br-r-50px"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar una reunión"
                >
                  <div className="w-25px h-25px m-5px h-pr-fl-ma">
                    <img
                      className="w-100 h-100 h-pr-fl-ma "
                      Style="stroke: #ffffff !important;"
                      src={MessageWriting}
                      alt="Coordinar"
                    />
                  </div>
                </Btn>
              </div>
              </div>
            </div>
            <div className="w-25 m-d-n  h-a h-pr-fl-ma b-s-b-b t-a-c  ">
            <div className="w-and-h-250px h-pr-fl-ma  r-h-c ns-br-r-2">&nbsp;</div>
          </div>
          </div>

          {/*  // !                            SECCIÓN 1 |  CONTENEDOR CENTRAL                              */}

          {/* CONTENEDOR  */}
          <div className="   r-h-c  m- w-95  h-a h-pr-fl-ma b-s-b-b bg-d m-d-b m-b-20px of-h">
            {/* PROCEDIMIENTO */}

            {/*  // ?                            SECCION 1 | CONTENIDO  80%                       */}

            <div className="w-70   p-10px tab-w-100 m-w-100 noselect h-a h-pr-fl-ma b-s-b-b m-d-b  ">
              <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b p-20px">
                <div className="w-100 h-350px h-pr-fl-ma b-s-b-b of-h ns-br-r-2">
                  <img
                    className="w-100 p-a m-a m-d-n d-b"
                    src={BannerPrincipal}
                    alt="BannerPrincipal"
                  />
                  <img
                    className="h-100 p-a m-a d-n m-d-b"
                    src={BannerPrincipalMobile}
                    alt="banner principal mobile"
                  />
                  <div className="w-100 h-a h-pr-fl-ma r-v-b  flexbox m-d-b ">
                    <div className="w-70 m-w-100 h-a h-pr-fl-ma p-20px  ns-br-r-1 ">
                      <Title
                        className="bg-d p-10px ns-br-r-2"
                        h3="Comencemos a crear su marca hoy mismo"
                      ></Title>
                      <Title
                        className="p-10px ns-bg-e ns-c-white ns-br-r-1"
                        h5="Obtenga hasta 40% OFF en su primera compra."
                      ></Title>
                    </div>
                    <div className="w-30 m-d-n m-w-100 h-a h-pr-fl-ma p-20px ">
                      <Btn
                        className="w-a t-a-c h-a ns-bg-e f-w-bo p-r-10px  h-pr-fr-ma"
                        text="Ver más..."
                        enlace="/plans"
                      >
                        <img
                          className="w-and-h-40px h-pr-fl-ma fill-white"
                          src={ChevronRight}
                          alt="ver más"
                        />
                      </Btn>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/*  // todo                            SECCION 1 | QUE PODEMOS HACER POR Y PARA TI                     */}

              <div className="w-100 h-a  m-h-auto  b-s-b-b m-w-100 tab-w-100 h-a h-pr-fl-ma m-b-20px">
                <div className="w-100 h-a t-a-c h-pr-fl-ma ns-f-s-medium  f-f-Gilroy f-w-bo b-s-b-b p-20px">
                  <Title h2=" ¿Qué podemos hacer por y para usted?"></Title>
                </div>
                <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b p-20px">
                  <CardContainer className="m-b-20px h-a ">
                    <Card
                      type="card-tall"
                      ContentBox
                      image={TheoryFragance}
                      title="Productos"
                      description="Creamos desde el envase, hasta la caja, incluyendo todos los elementos gráficos para la venta y distribución de su producto."
                      alt="Productos"
                    />
                    <Card
                      type="card-tall"
                      ContentBox
                      image={Caffeine}
                      title="Servicios"
                      description="Banners, Ploteos, Menu's, accesorios, todo el estilo pronto para su negocio."
                      alt="Servicios"
                    />
                    <Card
                      type="card-tall"
                      ContentBox
                      image={PromoOtoño}
                      title="Promociones"
                      description="Descuentos de temporada, Packs emprendedores, Ofertas corporativas, Paquetes Startups, Planes creativos y mucho más..."
                      alt="Promociones"
                    />
                  </CardContainer>
                  <div className="w-100 h-a t-a-c h-pr-fl-ma ns-f-s-medium f-f-Gilroy f-w-bo b-s-b-b p-20px ns-c-e">
                    {" "}
                    Tenemos un sin fin de planes disponibles que puede combinar
                    a su medida.
                    <br />Y si lo desea, generamos uno personalizado para usted.
                  </div>
                </div>
              </div>
              {/*  // !                           ADS                         */}
              <div className="w-100 h-a  m-h-auto  b-s-b-b m-w-100 tab-w-100 h-a h-pr-fl-ma m-b-20px">
                   <Adsense  dataAdSlot='9886328101'  />
              </div>
              {/*  // todo                            SECCION 1 | PORQUÉ ELEGIRNOS                   */}

              {/* Porque elegirnos */}
              <div className="w-100 m-w-100 h-a h-pr-fl-ma bg-d m-b-10px b-s-b-b p-20px flexbox m-d-b ">
                <div className="w-50 m-w-100 tab-w-100 h-300px h-pr-fl-ma b-s-b-b  of-h">
                  <ImageComponent
                    className="w-100 h-100 h-pr-fl-ma"
                    imageUrl={OSWoman}
                  ></ImageComponent>
                </div>
                <div className="w-50 m-w-100 tab-w-100 h-a h-pr-fl-ma b-s-b-b ">
                  <div className="w-95 tab-w-100 m-w-100 r-h-c">
                    <ContentBox
                      className=" p-10px w-100"
                      title="¿Por qué elegirnos?"
                      subtitle="Somos más que una agencia de diseño."
                    ></ContentBox>
                    <span className="w-100 h-a h-pr-fl-ma bg-d m-b-5px p-l-15px p-r-15px p-10px b-s-b-b">
                      Utilizamos metodologías innovadoras auditadas con
                      inteligencia artificial.
                    </span>
                    <span className="w-100 h-a h-pr-fl-ma bg-d m-b-5px p-l-15px p-r-15px p-10px b-s-b-b">
                      Contamos con tecnología de autoría propia, única en el
                      mercado capaz de acelerar nuestros procesos, mejorar la
                      calidad y el rendimiento de todos nuestros servicios.
                    </span>
                    <span className="w-100 h-a h-pr-fl-ma bg-d m-b-5px p-l-15px p-r-15px p-10px b-s-b-b">
                      {" "}
                      Ofrecemos soporte 24/7 y servicios para casos de
                      emergencias, estando allí dónde la prioridad es ser los
                      primeros.
                    </span>
                  </div>
                </div>
              </div>

              {/*  // todo                            SECCION 1 | ADS             */}
              <div className="w-100 m-w-100 h-a h-pr-fl-ma m-b-10px b-s-b-b p-5px ">
                <ins
                  className="adsbygoogle-Home-1"
                  Style="display:block"
                  data-ad-client="ca-pub-6375603115544403"
                  data-ad-slot="9886328101"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </div>

              {/*  // todo                            SECCION 1 | BLOOSY ADS             */}
              <div className="w-100 m-w-100 h-a h-pr-fl-ma bg-d m-b-10px b-s-b-b p-5px ">
                <ImageComponent
                  className="w-100 h-a m-d-n "
                  imageUrl={BloosyAdHorizontal}
                ></ImageComponent>
                <ImageComponent
                  className="w-100 h-a d-n m-d-b "
                  imageUrl={BloosyAdSquare}
                ></ImageComponent>
              </div>
              {/*  // todo                            SECCION 1 | TITLE STORE           */}

              <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b p-20px">
                <div className="w-100 h-350px h-pr-fl-ma b-s-b-b of-h ns-br-r-2">
                  <img
                    className="w-100 p-a m-a m-d-n d-b"
                    src={TitleStore}
                    alt="tienda"
                  />
                  <img
                    className="h-100 p-a m-a d-n m-d-b"
                    src={TitleStoreMobile}
                    alt="TiendaMobile"
                  />
                  <div className="w-100 h-a h-pr-fl-ma r-v-c  flexbox m-d-b ">
                    <div className="w-40 m-w-100 h-a h-pr-fl-ma p-20px bg-d ns-br-r-1 ">
                      <Title h2="Soluciones para su comercio"></Title>
                      <Title
                        className="ns-c-e"
                        h5="Panaderías, supermercados, tiendas de electrónica y mucho más..."
                      ></Title>
                    </div>
                    <div className="w-60 m-w-100 h-a h-pr-fl-ma p-20px ">
                      <Btn
                        className="w-a t-a-c h-a ns-bg-e f-w-bo p-r-10px  h-pr-fr-ma"
                        text="Ver más..."
                        enlace="/plans"
                      >
                        <img
                          className="w-and-h-40px h-pr-fl-ma fill-white"
                          src={ChevronRight}
                          alt="ver más"
                        />
                      </Btn>
                    </div>
                  </div>
                </div>{" "}
              </div>

              {/*  // !                                 SECCION 2    | MULTIPLES IMAGENES (cards)                         */}
              <div className=" w-95  r-h-c h-a h-pr-fl-ma bg-d m-b-20px b-s-b-b m-d-n p-20px">
                <CardContainer className="m-b-20px card-mosaic">
                  <Card
                    type="card-tall"
                    ContentBox
                    image={OrigenesMovie}
                    title="Publicidad"
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
            </div>

            {/*  // ?                            SECCION 1 | SIDEBAR 20%                      */}
            <div className="w-30  m-w-100 h-a h-pr-fl-ma b-s-b-b p-10px  m-d-b  tab-d-n ">
              {/*  // todo                            SECCION 1 - SIDEBAR | REDES SOCIALES             */}
              <div className="w-100 h-pr-fl-ma b-s-b-b bg-d noselect p-20px m-b-10px">
                <div className="w-100 h-pr-fl-ma b-s-b-b bg-g-identity ns-br-r-1 p-10px  flexbox">
                  <div className="w-70 h-a h-pr-fl-ma f-w-bo p-r-5px noselect">
                    Comencemos a crear su marca hoy mismo
                  </div>
                  <div className="w-200px h-a  h-a h-pr-fl-ma">
                    <Btn
                      className="w-100 h-a ns-bg-e f-w-bo p-15px"
                      text="Comenzar Ahora"
                      enlace="https://wa.me/message/3J7NXI5ETDK7F1"
                    ></Btn>{" "}
                  </div>
                </div>
              </div>
              {/*  // todo                            SECCION 1 - SIDEBAR | SOLICITE PRESUPUESTOS                  */}

              <div className="w-100 h-pr-fl-ma b-s-b-b bg-d noselect p-20px m-b-10px">
                <Title className="m-b-20px t-a-c" h4="Soluciones para:"></Title>
                {/* //orange traders y brokers */}
                <Link to="/plans">
                  <div className="w-100 h-a h-pr-fl-ma bg-g-green ns-br-r-1 p-5px flexbox m-b-5px noselect">
                    <img
                      className="w-and-h-50px bg-d p-5px ns-br-r-1"
                      src={ChevronUpDouble}
                      alt="Trading"
                    />
                    <div className="w-80 h-a l-h-15px m-l-20px ">
                      <div className="w-100 h-a r-v-c">
                        <span className="w-100 f-w-bo noselect ">
                          Traders & Brokers
                        </span>{" "}
                        <br />
                        <span className="h-pr-fl-maw-100 ns-f-s-small noselect">
                          Identidad, Presentaciones, Informes...
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* //orange supermercados & Depósitos */}
                <Link to="/plans">
                  {" "}
                  <div className="w-100 h-a h-pr-fl-ma bg-d bg-g-blue ns-br-r-1 p-5px flexbox m-b-5px noselect">
                    <img
                      className="w-and-h-50px bg-d p-5px ns-br-r-1 "
                      src={ChevronUpDouble}
                      alt="Trading"
                    />
                    <div className="w-80 h-a l-h-15px m-l-20px ">
                      <div className="w-100 h-a r-v-c">
                        <span className="w-100 f-w-bo noselect">
                          Supermercados & Depósitos
                        </span>{" "}
                        <br />
                        <span className="h-pr-fl-maw-100 ns-f-s-small noselect">
                          Identidad, Mailings, Señalética...
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* //orange Hoteles y casinos */}
                <Link to="/plans">
                  <div className="w-100 h-a h-pr-fl-ma bg-d bg-g-purple ns-br-r-1 p-5px flexbox m-b-5px noselect">
                    <img
                      className="w-and-h-50px bg-d ns-br-r-1 p-5px "
                      src={ChevronUpDouble}
                      alt="Trading"
                    />
                    <div className="w-80 h-a l-h-15px m-l-20px ">
                      <div className="w-100 h-a r-v-c">
                        <span className="w-100 f-w-bo noselect">
                          Hoteles & Casinos
                        </span>{" "}
                        <br />
                        <span className="h-pr-fl-maw-100 ns-f-s-small noselect">
                          Identidad, Publicidad, Banners...
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* //orange Restaurantes & Franquicias*/}
                <Link to="/plans">
                  {" "}
                  <div className="w-100 h-a h-pr-fl-ma bg-d p-5px bg-g-pink s-br-r-1 flexbox m-b-5px noselect">
                    <img
                      className="w-and-h-50px bg-d p-5px ns-br-r-1"
                      src={ChevronUpDouble}
                      alt="Trading"
                    />
                    <div className="w-80 h-a l-h-15px m-l-20px ">
                      <div className="w-100 h-a r-v-c">
                        <span className="w-100 f-w-bo noselect">
                          Restaurantes & Franquicias
                        </span>{" "}
                        <br />
                        <span className="h-pr-fl-maw-100 ns-f-s-small noselect">
                          Publicidad, Contenido en redes, Menus...
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-100 h-pr-fl-ma b-s-b-b bg-d  p-20px m-b-10px noselect">
                <Title
                  className="m-b-20px t-a-c m-t-10px "
                  h4="Agende su consulta Gratis:"
                ></Title>
                <a href="https://wa.me/message/3J7NXI5ETDK7F1">
                  <div className="w-100 h-a h-pr-fl-ma bg-d p-5px flexbox m-b-5px noselect">
                    <img
                      className="w-and-h-50px ns-br-r-2 bg-g-green p-5px"
                      src={WhatsappIcon}
                      alt="Whatsapp"
                    />
                    <div className="w-80 h-a l-h-15px m-l-20px noselect">
                      <div className="w-100 h-a r-v-c">
                        <span className="w-100 f-w-bo">Whatsapp</span> <br />
                        <span className="h-pr-fl-maw-100 ns-f-s-small">
                          (+598) 92 22 15 16
                        </span>
                      </div>
                    </div>
                    <div className="h-pr-fl-ma w-and-h-50px  ">
                      <Btn
                        className="w-100 bg-d ns-br-r-2 h-100"
                        text="IR"
                        enlace="https://wa.me/message/3J7NXI5ETDK7F1"
                      ></Btn>
                    </div>
                  </div>
                </a>
                <a href="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/">
                  <div className="w-100 h-a h-pr-fl-ma bg-d p-5px flexbox m-b-5px noselect">
                    <img
                      className="w-and-h-50px ns-br-r-2 bg-g-yellow p-5px"
                      src={Calendar}
                      alt="Calendar"
                    />
                    <div className="w-80 h-a l-h-15px m-l-20px noselect">
                      <div className="w-100 h-a r-v-c">
                        <span className="w-100 f-w-bo">Agenda</span> <br />
                        <span className="h-pr-fl-maw-100 ns-f-s-small">
                          Calendario Bookings (Disponible)
                        </span>
                      </div>
                    </div>
                    <div className="h-pr-fl-ma w-and-h-50px  ">
                      {" "}
                      <Btn
                        className="w-100 bg-d ns-br-r-2 h-100"
                        text="IR"
                        enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                      ></Btn>{" "}
                    </div>
                  </div>
                </a>
                <a href="mailto:hello@origenstudios.com">
                  <div className="w-100 h-a h-pr-fl-ma bg-d p-5px flexbox m-b-5px noselect">
                    <img
                      className="w-and-h-50px ns-br-r-2 bg-g-blue p-5px"
                      src={Envelope}
                      alt="Envelope"
                    />
                    <div className="w-80 h-a l-h-15px m-l-20px noselect">
                      <div className="w-100 h-a r-v-c">
                        <span className="w-100 f-w-bo">Email</span> <br />
                        <span className="h-pr-fl-maw-100 ns-f-s-small">
                          hello@OrigenStudios.com
                        </span>
                      </div>
                    </div>
                    <div className="h-pr-fl-ma w-and-h-50px  ">
                      {" "}
                      <Btn
                        className="w-100 bg-d ns-br-r-2 h-100"
                        text="IR"
                        enlace="mailto:hello@origenstudios.com"
                      ></Btn>{" "}
                    </div>
                  </div>
                </a>
              </div>

              {/*  // todo                            SECCION 1 - SIDEBAR | REDES SOCIALES             */}

              <div className="w-100 h-pr-fl-ma b-s-b-b ns-bg-e ns-br-r-1 p-20px m-b-10px noselect">
                <ContentBox
                  className="m-b-10px"
                  title="Visitenos en sus redes sociales:"
                ></ContentBox>
                <div className="w-100 h-pr-fl-ma b-s-b-b flexbox ">
                  <a href="https://Instagram.com/helloorigen">
                    <img
                      className="w-and-h-50px h-pr-fl-ma ns-bg-e ns-br-r-2 p-5px c-p h-e"
                      src={InstagramIcon}
                      alt="Instagram"
                    />
                  </a>
                  <a href="https://www.behance.net/origenstudios">
                    <img
                      className="w-and-h-50px h-pr-fl-ma ns-bg-e ns-br-r-2 p-5px c-p h-e"
                      src={BehanceIcon}
                      alt="Behance"
                    />
                  </a>
                  <a href="https://Twitter.com/helloorigen">
                    <img
                      className="w-and-h-50px h-pr-fl-ma ns-bg-e ns-br-r-2 p-5px c-p h-e"
                      src={TwitterIcon}
                      alt="Twitter"
                    />
                  </a>
                  <a href="https://Facebook.com/helloorigen">
                    <img
                      className="w-and-h-50px h-pr-fl-ma ns-bg-e ns-br-r-2 p-5px c-p h-e"
                      src={FacebookIcon}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://Linkedin.com/company/helloorigen">
                    <img
                      className="w-and-h-50px h-pr-fl-ma ns-bg-e ns-br-r-2 p-5px c-p h-e"
                      src={LinkedinIcon}
                      alt="Linkedin"
                    />
                  </a>
                  <a href="https://discord.gg/UMAFqpD8Xr">
                    <img
                      className="w-and-h-50px h-pr-fl-ma ns-bg-e ns-br-r-2 p-5px c-p h-e"
                      src={DiscordIcon}
                      alt="Discord"
                    />
                  </a>
                </div>
              </div>
              {/*  // todo                            SECCION 1 - SIDEBAR | FORM SUSCRIPCION            */}
              <div className="w-100 h-a h-pr-fl-ma b-s-b-b bg-d m-d-n p-20px m-b-10px noselect">
                <NewsletterForm></NewsletterForm>
              </div>
              {/*  // todo                            SECCION 1 - SIDEBAR | ADS BLOOSYSQUARE            */}
              <div className="w-100 h-pr-fl-ma b-s-b-b  m-d-n p-20px m-b-10px noselect">
                <CardContainer className="h-a ">
                  <Card
                    type="card-tall"
                    image={BloosyAdSquare}
                    alt="ADSBloosySquareSidebar"
                  />{" "}
                </CardContainer>
                <Btn
                  text="Acceso gratuito"
                  enlace="https://discord.gg/UMAFqpD8Xr"
                  className="bg-g-blue f-w-bo w-100 p-15px m-b-10px"
                ></Btn>
                <p className="w-100 h-a h-pr-lf-ma ns-f-s-small  f-f-Gilroy f-w-bo t-a-c">
                  Acceso gratuito sin suscripciones mensuales.
                </p>
              </div>
              {/*  // todo                            SECCION 1 - SIDEBAR | ADS INTERNO                  */}
              <div className="w-100 h-pr-fl-ma b-s-b-b bg-d  p-20px m-b-10px noselect">
                <CardContainer className="h-a ">
                  <Card type="card-tall" image={GodCreator} alt="Wallpaper2" />{" "}
                </CardContainer>
                <Btn
                  text="Publicitate aquí"
                  enlace="mailto:hello@origenstudios.com?subject=Quiero%20publicitarme%20en%20su%20web!&body=Buenos%20d%C3%ADas%20soy%20(Nombre)%20de%20(Empresa/Proyecto)%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20la%20publicidad%20de%20su%20web%2C%20mi%20tel%C3%A9fono%20es%20(tel%C3%A9fono)%20y%20mis%20redes%20son%20(redes%20sociales)."
                  className="ns-bg-e f-w-bo w-100 p-15px"
                ></Btn>
              </div>

              {/*  // todo                            SECCION 1 - SIDEBAR | ADS             */}
              <div className="w-100 h-pr-fl-ma b-s-b-b bg-d  p-20px m-b-10px">
                <Adsense
                  dataAdSlot='9886328101'
                />
                
              </div>
            </div>
            {/*  // todo                            SECCION 1 | PROCEDIMIENTO                 */}

            <div className="w-100 h-pr-fl-ma b-s-b-b noselect p-10px  ">
              <div className="w-100 h-pr-fl-ma bg-d p-20px ns-bg-e ns-br-r-1">
                <div className="w-33 m-w-100 h-a h-pr-fl-ma  b-s-b-b flexbox ">
                  <div className="flexbox p-10px">
                    <div className="w-50px h-50px h-pr-fl-ma br-w-1px br-s-solid br-r-50px">
                      <span className="centered" Style="font-size: 30px;">
                        1
                      </span>
                    </div>{" "}
                    <span className="h-pr-fl-ma f-w-bo m-l-10px">
                      COORDINAMOS&nbsp;
                      <br className="m-d-n" />
                      PRESUPUESTOS
                    </span>
                    <div className="w-a h-a h-pr-fl-ma m-d-n m-l-10px ns-fill-e">
                      <img
                        className="h-40px h-pr-fl-ma "
                        src={ChevronRight}
                        alt="ChevronRight"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-33 m-w-100  h-a h-pr-fl-ma b-s-b-b flexbox  ">
                  <div className="flexbox p-10px">
                    <div className="w-and-h-50px h-pr-fl-ma br-w-1px br-s-solid br-r-50px">
                      <span className="centered" Style="font-size: 30px;">
                        2
                      </span>
                    </div>{" "}
                    <span className="h-pr-fl-ma f-w-bo m-l-10px">
                      COMPLETAMOS&nbsp;
                      <br className="m-d-n" />
                      EL BRIEFING
                    </span>
                    <div className="w-a h-a h-pr-fl-ma m-d-n m-l-10px ns-fill-e">
                      <img
                        className="h-40px h-pr-fl-ma "
                        src={ChevronRight}
                        alt="ChevronRight"
                      />
                    </div>
                  </div>{" "}
                </div>

                <div className="w-33 m-w-100 h-a h-pr-fl-ma b-s-b-b flexbox   ">
                  <div className="flexbox p-10px">
                    <div className="w-50px h-50px h-pr-fl-ma br-w-1px br-s-solid br-r-50px">
                      <span className="centered" Style="font-size: 30px;">
                        3
                      </span>
                    </div>{" "}
                    <span className="h-pr-fl-ma f-w-bo m-l-10px">
                      INICIAMOS&nbsp;
                      <br className="m-d-n" />
                      LA&zwj;&nbsp;&zwj;PRODUCCIÓN
                    </span>
                    <div className="w-a h-a h-pr-fl-ma m-d-n m-l-10px ns-fill-e">
                      <img
                        className="h-40px h-pr-fl-ma "
                        src={CheckCircle}
                        alt="CheckCircle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  // !                                 SECCION 3                            */}

          <div className=" w-95  r-h-c noselect h-a h-pr-fl-ma flexbox tab-d-b m-d-b bg-d m-b-20px b-s-b-b p-10px">
            <div className="w-50 h-a  m-h-auto ns-bg-e ns-br-r-1 b-s-b-b m-w-100 tab-w-100 h-a h-pr-fl-ma p-20px">
              <div className="w-100 h-a t-a-c h-pr-fl-ma b-s-b-b p-20px ">
                <span className=" f-f-Gilroy f-w-bo " Style="font-size: 50px;">
                  Portadas de Álbumes para Artistas Musicales
                </span>
              </div>
              <ContentBox
                className="p-20px bg-d t-a-c"
                text="Destaca en la industria musical con nuestras portadas de álbumes y artes de alta calidad. Nuestro equipo de diseñadores especializados se encarga de crear diseños únicos y cautivadores que representen tu estilo musical y reflejen la esencia de tu música. 
                "
              ></ContentBox>

              <div className="w-100 h-a t-a-c h-pr-fl-ma ns-f-s-medium f-f-Gilroy f-w-bo b-s-b-b p-20px ">
                Hacemos realidad todo lo necesario para que triunfe con su
                producto, su servicio, como negocio o como artista.
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

          <div className=" w-95  r-h-c h-a h-pr-fl-ma noselect bg-d m-b-20px b-s-b-b  p-20px">
            <ContentBox
              className="t-a-c w-100"
              title="Tenemos la solución a su necesidad."
            ></ContentBox>

            <div className="w-100 h-100 h-pr-fl-ma b-s-b-b  flexbox m-d-b">
              <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px">
                <ContentBox
                  className="p-20px ns-bg-e ns-br-r-1 "
                  title="Presupuestos personalizados."
                  subtitle="Primer servicio con descuentos"
                  text="Nos ajustamos a su presupuesto y le ayudamos a generar el mayor rendimiento con el menor costo posible, manteniendo la calidad y los mejores resultados."
                ></ContentBox>
              </div>
              <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px">
                <ContentBox
                  className="p-20px ns-bg-e ns-br-r-1 "
                  title="Asesoría personalizada."
                  subtitle="Primer consulta gratuita"
                  text="Estudiamos su necesidad para ofrecerle el servicio más directo y eficiente posible. Además, le acompañamos en todo el proceso y por supuesto, posteriormente a él, para que logre sus objetivos lo antes posible."
                ></ContentBox>
              </div>
              <div className="w-33 m-w-100 h-100 h-pr-fl-ma b-s-b-b p-10px ">
                <ContentBox
                  className="p-20px ns-bg-e ns-br-r-1 "
                  title="Compromiso y Seguridad"
                  subtitle="Status de servicio Online"
                  text="Nuestro compromiso es con cada detalle de su pieza gráfica, incluyendo los tiempos de entrega. Consulte en todo momento el tiempo estimado de entrega."
                ></ContentBox>
              </div>
            </div>
          </div>
          {/*  // !                           ADS                         */}
          <div className="w-95 r-h-c m-w-95 h-a h-pr-fl-ma  bg-d m-d-b flexbox m-d-b b-s-b-b ">
            <div className="w-33 m-w-100 h-a h-pr-fl-ma   p-10px">
                <Adsense  dataAdSlot='9886328101'  />
            </div>
            <div className="w-33 m-w-100 h-a h-pr-fl-ma  p-10px">
                <Adsense  dataAdSlot='9886328101'  />
            </div>
            <div className="w-33 m-w-100 h-a h-pr-fl-ma  p-10px">
                <Adsense  dataAdSlot='9886328101'  />
            </div>
          </div>
          <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
        </div>
      </div>
    </Fragment>
  );
}
