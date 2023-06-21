import React, { Fragment } from "react";

import ContentBox from "../components/contentBox";
import Title from "../components/title";
import Btn from "../components/btn";


import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import BehanceIcon from "../assets/icons/behance-icon.svg";
import WhatsappIcon from "../assets/icons/whatsapp-icon.svg";
import DiscordIcon from "../assets/icons/discord-icon.svg";

import Nick from "../assets/team/nickolas-machado.jpg";
import Vicky from "../assets/team/victoria-brylka.jpg";
import Cesar from "../assets/team/cesar-lima.jpg";
import Carlos from "../assets/team/carlos-andres.jpg";

const Team = () => {
  return (
    <Fragment>
      <div className="w-95 r-h-c m-w-100 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 h-a h-pr-fl-ma b-s-b-bs t-a-c m-d-b  m-t-100px m-b-50px ">
          <div className="w-80 m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b   m-b-20px ">
            <Title h1="TeamWork" sup="&reg;"></Title>
            <Title h5="Grandes emprendedores, mejores personas."></Title>
          </div>
        </div>

        <div className="w-100  h-100 h-pr-fl-ma b-s-b-b of-auto ">
          <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma b-s-b-b">
            <div className="w-100 h-pr-fl-ma tab-d-b flexbox tab-d-b m-d-b m-d-b tab-w-100 m-w-100 p-20px">
              {/*  // !                            Nickolas Machado                            */}

              <div className=" w-250px tab-w-50 m-w-100  h-pr-fl-ma p-3px bg-d ns-br-r-3 c-p">
                <div className="w-100 h-a h-pr-fl-ma ">
                  <div className="w-100 m-w-100   h-500px h-pr-fl-ma bg-d  d-v-on-h-container of-h ns-br-r-2">
                    {" "}
                    <div className=" w-100 h-100 p-a m-a b-s-b-b of-n">
                      <img
                        src={Nick}
                        alt="GameDev"
                        className="w-100 h-100  m-a b-s-b-b h-e-scale "
                        Style="object-fit: cover;"
                      />{" "}
                    </div>
                    <div className="w-100 h-a p-a f-f-Gilroy bg-d-t ns-f-s-medium p-10px b-0px">
                      <div className="w-100 h-a h-pr-fl-ma bg-d  ns-br-r-2 p-10px">
                        <Title
                          className="w-100 t-a-c "
                          h5="Nickolas Machado"
                        ></Title>
                        <ContentBox
                          className="w-100 t-a-c"
                          subtitle="Diseño Gráfico"
                        ></ContentBox>
                      </div>
                      <div className="w-100 h-a h-pr-fl-ma  b-s-b-b d-v-on-h p-5px">
                        <div
                          className="w-100 f-f-Gilroy t-a-c "
                          Style="font-size: 13px; line-height: 20px;"
                        >  Diseñador gráfico especializado en el estudio, la planificación y creación de marcas, gráficas y sensoriales.
                        
                        </div>
                        <div className="w-100 h-pr-fl-ma b-s-b-b flexbox">
                          <div className="w-a h-pr-fl-ma p-5px">
                          <a href="https://Linkedin.com/company/helloorigen">
                              <img
                                className="w-and-h-40px h-pr-fl-ma bg-d ns-br-r-1 p-5px c-p h-e"
                                src={BehanceIcon}
                                alt="Behance"
                              />
                            </a>
                            <a href="https://Linkedin.com/company/helloorigen">
                              <img
                                className="w-and-h-40px h-pr-fl-ma bg-d ns-br-r-1 p-5px c-p h-e"
                                src={LinkedinIcon}
                                alt="Linkedin"
                              />
                            </a>
                         
                          </div>
                        </div>
                        <Btn
                          className="w-100 ns-bg-e p-10px bg-red"
                          text="Email"
                          enlace="hello@origenstudios.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/*  // !                            Cesar Lima                          */}


              <div className=" w-250px tab-w-50 m-w-100  h-pr-fl-ma p-3px bg-d ns-br-r-3 c-p">
                <div className="w-100 h-a h-pr-fl-ma ">
                  <div className="w-100 m-w-100 h-500px h-pr-fl-ma bg-d  d-v-on-h-container of-h ns-br-r-2">
                    {" "}
                    <div className=" w-100 h-100 p-a m-a b-s-b-b of-n">
                      <img
                        src={Cesar}
                        alt="GameDev"
                        className="w-100 h-100  m-a b-s-b-b h-e-scale "
                        Style="object-fit: cover;"
                      />{" "}
                    </div>
                    <div className="w-100 h-a p-a f-f-Gilroy bg-d-t ns-f-s-medium p-10px b-0px">
                      <div className="w-100 h-a h-pr-fl-ma bg-d  ns-br-r-2 p-10px">
                        <Title
                          className="w-100 t-a-c "
                          h5="Cesar Lima"
                        ></Title>
                        <ContentBox
                          className="w-100 t-a-c"
                          subtitle="Administración contable"
                        ></ContentBox>
                      </div>
                      <div className="w-100 h-a h-pr-fl-ma  b-s-b-b d-v-on-h p-5px">
                        <div
                          className="w-100 f-f-Gilroy t-a-c "
                          Style="font-size: 13px; line-height: 20px;"
                        >  Estudiante de administración contable, experto en gestión de
                        empresas.
                        </div>
                        <div className="w-100 h-pr-fl-ma b-s-b-b flexbox">
                          <div className="w-a h-pr-fl-ma p-5px">
                            <a href="https://Linkedin.com/company/helloorigen">
                              <img
                                className="w-and-h-40px h-pr-fl-ma bg-d ns-br-r-1 p-5px c-p h-e"
                                src={LinkedinIcon}
                                alt="Linkedin"
                              />
                            </a>
                          </div>
                        </div>
                        <Btn
                          className="w-100 ns-bg-e p-10px bg-red"
                          text="Email"
                          enlace="hello@origenstudios.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  // !                            Victoria Brylka                          */}

              <div className=" w-250px tab-w-50 m-w-100  h-pr-fl-ma p-3px bg-d ns-br-r-3 c-p">
                <div className="w-100 h-a h-pr-fl-ma ">
                  <div className="w-100 m-w-100 h-500px h-pr-fl-ma bg-d  d-v-on-h-container of-h ns-br-r-2">
                    {" "}
                    <div className=" w-100 h-100 p-a m-a b-s-b-b of-n">
                      <img
                        src={Vicky}
                        alt="GameDev"
                        className="w-100 h-100  m-a b-s-b-b h-e-scale "
                        Style="object-fit: cover;"
                      />{" "}
                    </div>
                    <div className="w-100 h-a p-a f-f-Gilroy bg-d-t ns-f-s-medium p-10px b-0px">
                      <div className="w-100 h-a h-pr-fl-ma bg-d  ns-br-r-2 p-10px">
                        <Title
                          className="w-100 t-a-c "
                          h5="Victoria Brylka"
                        ></Title>
                        <ContentBox
                          className="w-100 t-a-c"
                          subtitle="Asesoría Legal"
                        ></ContentBox>
                      </div>
                      <div className="w-100 h-a h-pr-fl-ma  b-s-b-b d-v-on-h p-5px">
                        <div
                          className="w-100 f-f-Gilroy t-a-c "
                          Style="font-size: 13px; line-height: 20px;"
                        >  Estudiante de Abogacía, experta en casos de familia, estudio y
                        asesoría contractual.
                        </div>
                        <div className="w-100 h-pr-fl-ma b-s-b-b flexbox">
                          <div className="w-a h-pr-fl-ma p-5px">
                            <a href="https://Linkedin.com/company/helloorigen">
                              <img
                                className="w-and-h-40px h-pr-fl-ma bg-d ns-br-r-1 p-5px c-p h-e"
                                src={LinkedinIcon}
                                alt="Linkedin"
                              />
                            </a>
                          </div>
                        </div>
                        <Btn
                          className="w-100 ns-bg-e p-10px bg-red"
                          text="Email"
                          enlace="hello@origenstudios.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/*  // !                            Carlos Andrés                         */}

              <div className=" w-250px tab-w-50 m-w-100  h-pr-fl-ma p-3px bg-d ns-br-r-3 c-p">
                <div className="w-100 h-a h-pr-fl-ma ">
                  <div className="w-100 m-w-100   h-500px h-pr-fl-ma bg-d  d-v-on-h-container of-h ns-br-r-2">
                    {" "}
                    <div className=" w-100 h-100 p-a m-a b-s-b-b of-n">
                      <img
                        src={Carlos}
                        alt="GameDev"
                        className="w-100 h-100  m-a b-s-b-b h-e-scale "
                        Style="object-fit: cover;"
                      />{" "}
                    </div>
                    <div className="w-100 h-a p-a f-f-Gilroy bg-d-t ns-f-s-medium p-10px b-0px">
                      <div className="w-100 h-a h-pr-fl-ma bg-d  ns-br-r-2 p-10px">
                        <Title
                          className="w-100 t-a-c "
                          h5="Carlos Andrés"
                        ></Title>
                        <ContentBox
                          className="w-100 t-a-c"
                          subtitle="Desarrollo de Videojuegos"
                        ></ContentBox>
                      </div>
                      <div className="w-100 h-a h-pr-fl-ma  b-s-b-b d-v-on-h p-5px">
                        <div
                          className="w-100 f-f-Gilroy t-a-c "
                          Style="font-size: 13px; line-height: 20px;"
                        >Productor de videojuegos, experto en funcionamiento de escenas
                        y gestión de elementos visuales.
                        </div>
                        <div className="w-100 h-pr-fl-ma b-s-b-b flexbox">
                          <div className="w-a h-pr-fl-ma p-5px">
                            <a href="https://Linkedin.com/company/helloorigen">
                              <img
                                className="w-and-h-40px h-pr-fl-ma bg-d ns-br-r-1 p-5px c-p h-e"
                                src={LinkedinIcon}
                                alt="Linkedin"
                              />
                            </a>
                          </div>
                        </div>
                        <Btn
                          className="w-100 ns-bg-e p-10px bg-red"
                          text="Email"
                          enlace="hello@origenstudios.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/*  // !                            Joshua Cabrales                         */}

              <div className=" w-250px tab-w-50 m-w-100  h-pr-fl-ma p-3px bg-d ns-br-r-3 c-p">
                <div className="w-100 h-a h-pr-fl-ma ">
                  <div className="w-100 m-w-100   h-500px h-pr-fl-ma bg-d  d-v-on-h-container of-h ns-br-r-2">
                    {" "}
                    <div className=" w-100 h-100 p-a m-a b-s-b-b of-n">
                      <img
                        src={Nick}
                        alt="Diseño"
                        className="w-100 h-100  m-a b-s-b-b h-e-scale "
                        Style="object-fit: cover;"
                      />{" "}
                    </div>
                    <div className="w-100 h-a p-a f-f-Gilroy bg-d-t ns-f-s-medium p-10px b-0px">
                      <div className="w-100 h-a h-pr-fl-ma bg-d  ns-br-r-2 p-10px">
                        <Title
                          className="w-100 t-a-c "
                          h5="Joshua Cabrales"
                        ></Title>
                        <ContentBox
                          className="w-100 t-a-c"
                          subtitle="Illustración Gráfica"
                        ></ContentBox>
                      </div>
                      <div className="w-100 h-a h-pr-fl-ma  b-s-b-b d-v-on-h p-5px">
                        <div
                          className="w-100 f-f-Gilroy t-a-c "
                          Style="font-size: 13px; line-height: 20px;"
                        >
                          Gran maestro en illustración y diseño de personajes,
                          producción audiovisual, diseño 3D y profesor de Artes
                          Digitales.
                        </div>
                        <div className="w-100 h-pr-fl-ma b-s-b-b flexbox">
                          <div className="w-a h-pr-fl-ma p-5px">
                            <a href="https://Linkedin.com/company/helloorigen">
                              <img
                                className="w-and-h-40px h-pr-fl-ma bg-d ns-br-r-1 p-5px c-p h-e"
                                src={LinkedinIcon}
                                alt="Linkedin"
                              />
                            </a>
                          </div>
                        </div>
                        <Btn
                          className="w-100 ns-bg-e p-10px bg-red"
                          text="Email"
                          enlace="hello@origenstudios.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            {/*  // !                            Descripcion                         */}

            <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma ">
              <div className="w-100 h-a h-pr-fl-ma  b-s-b-b ">
                <div className="w-100 h-a  bg-d  ns-br-r-1 of-h p-20px m-w-100 h-a f-f-Gilroy h-pr-fl-ma ">
                  <ContentBox
                    className="h-pr-fl-ma w-100 h-a "
                    title={"Un equipo en expansión"}
                    subtitle={"Crecemos contigo."}
                  />

                  <span className="h-pr-fl-ma w-100 h-a m-b-20px">
                    ¡Bienvenido! Somos un equipo de expertos en expansión,
                    apasionados por potenciar la calidad de los productos y
                    servicios de las empresas más ambiciosas. Nos encanta
                    trabajar con marcas que buscan ir más allá y marcar la
                    diferencia en su sector.
                  </span>
                  <span className="h-pr-fl-ma w-100 h-a m-b-20px">
                    Nos especializamos en el desarrollo comercial de productos y
                    servicios, contenido digital, marketing y ventas. Contamos
                    con una amplia experiencia y un conjunto de habilidades
                    únicas que nos permiten afrontar cualquier desafío que su
                    marca pueda tener.
                  </span>

                  <span className="h-pr-fl-ma w-100 h-a m-b-20px">
                    Nos tomamos muy en serio la calidad de nuestro trabajo y nos
                    esforzamos por brindar un servicio de excelencia a todos
                    nuestros clientes. Trabajamos en estrecha colaboración con
                    su equipo para entender las necesidades específicas de su
                    marca y desarrollar soluciones personalizadas que generen
                    resultados efectivos. "
                  </span>
                  <span className="h-pr-fl-ma w-100 h-a m-b-20px ns-c-e">
                    No dude en ponerse en contacto con nosotros para cualquier
                    consulta o para discutir cómo podemos ayudar a su marca a
                    crecer y prosperar. ¡Estamos aquí para ayudarle!
                  </span>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
      </div>
       {/*  // !                           ADS                         */}
       <div className="w-95 r-h-c m-w-90 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma ">
        /*GOOGLEAD*/
        </div>
      </div>
      <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
    </Fragment>
  );
};

export default Team;
