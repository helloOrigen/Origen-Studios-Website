import React, { Fragment } from "react";

import ContentBox from "../components/contentBox";
import Title from "../components/title";
import Adsense from "../components/Adsense";



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
     <div className="w-95 r-h-c   h-a h-pr-fl-ma  bg-d m-d-b flexbox m-d-b b-s-b-b m-b-20px">
            <div className="w-33 m-d-n m-w-100 h-a h-pr-fl-ma   p-10px">
              <Adsense className="p-10px" slot="9886328101" googleAdId="ca-pub-6375603115544403" />
            </div>
            <div className="w-33 m-d-n m-w-100 h-a h-pr-fl-ma   p-10px">
              <Adsense className="p-10px" slot="9886328101" googleAdId="ca-pub-6375603115544403" />
            </div>
            <div className="w-33  m-w-100 h-a h-pr-fl-ma   p-10px">
              <Adsense className="p-10px" slot="9886328101" googleAdId="ca-pub-6375603115544403" />
            </div>
          </div>
      <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
    </Fragment>
  );
};

export default Team;
