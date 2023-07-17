import React, { Fragment } from "react";

import ContentBox from "../components/contentBox";
import Title from "../components/title";
import Adsense from "../components/Adsense";



const Team = () => {
  return (
    <Fragment>
      <div className="w-100 r-h-c  h-a h-pr-fl-ma flexbox m-d-b noselect b-s-b-b p-20px ">
        <div className="w-500px w-100 h-200px h-pr-fl-ma b-s-b-b t-a-c m-d-b   ">
          <div className="w-100 centered h-a h-pr-fl-ma b-s-b-b  ">
            <Title h1="TeamWork" sup="&reg;"></Title>
            <Title h5="Grandes emprendedores, mejores personas."></Title>
          </div>
        </div>

        <div className="w-100  h-100 h-pr-fl-ma b-s-b-b of-auto ">
          <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma b-s-b-b">
            <div className="w-100 h-pr-fl-ma tab-d-b flexbox tab-d-b m-d-b m-d-b tab-w-100 m-w-100 p-20px">
         

             
              </div>

             
            {/*  // !                            Descripcion                         */}

            <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma ">
              <div className="w-100 h-a h-pr-fl-ma  b-s-b-b  ">
                <div className="w-100 h-a  bg-d  ns-br-r-1 of-h p-20px m-w-100 h-a f-f-Gilroy h-pr-fl-ma ">
                  <ContentBox
                    className="h-pr-fl-ma w-100 h-a m-b-10px "
                    title={"Un equipo en expansión"}
                    subtitle={"Crecemos contigo."}
                  />

                  <span className="h-pr-fl-ma w-100 h-a m-b-20px">
                    ¡Bienvenido! Somos un equipo de expertos en expansión,
                    apasionados por potenciar la calidad de los productos y
                    servicios de las empresas más ambiciosas.
                  </span>
                  <span className="h-pr-fl-ma w-100 h-a m-b-20px">
                    Nos especializamos en el diseño y desarrollo comercial de productos y
                    servicios, contenido digital, marketing y ventas. Contamos
                    con una amplia experiencia y un conjunto de habilidades
                    únicas que nos permiten afrontar cualquier desafío que su
                    marca pueda tener.
                  </span>

                  <span className="h-pr-fl-ma w-100 h-a m-b-20px">
                    Tomamos muy en serio la calidad de nuestro trabajo y nos
                    esforzamos por brindarle un servicio de excelencia a todos
                    nuestros clientes por igual. Trabajamos en estrecha colaboración con
                    su equipo para entender las necesidades específicas de su
                    marca y desarrollar soluciones personalizadas que le generen los
                    resultados más efectivos. "
                  </span>
                  <span className="h-pr-fl-ma w-100 h-a m-b-20px ns-c-e-animated">
                    No dude en ponerse en contacto con nosotros para ayudarle a su marca a
                    crecer y prosperar. ¡Estamos aquí para usted y los suyos!
                  </span>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
      </div>
    
    </Fragment>
  );
};

export default Team;
