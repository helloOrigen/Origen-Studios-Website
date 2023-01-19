import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";
import Eye from "../assets/icons/eye.svg";
import Target from "../assets/icons/target.svg";
import Diamond from "../assets/icons/diamond.svg";

const About = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto ">
        <div className="m-w-100 w-33  h-100 h-pr-fl-ma p-20px">
          <div
            className="w-100 h-100 h-pr-fl-ma "
            Style="border: 1px solid; border-color: white;"
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c">
              <div className="w-and-h-150px h-pr-fl-ma r-h-c circle p-20px">
              <img
                src={Target}
                className="w-100 h-100 h-pr-fl-ma" Style="stroke: #ffffff !important;"/> 
              </div>
              <ContentBox
                link={"enlace accion"}
                className="w-100 p-20px h-a t-a-c"
                title={"Misión"}
                subtitle={"Su nueva imagen de marca."}
                text={
                  "Nuestra misión es ser el origen de un impacto positivo en el desarrollo de nuevas marcas. Nos enfocamos en elevar el estandar de calidad y rendimiento en todos los productos y servicios digitales, siendo la pieza maestra de las marcas y el ejemplo de inspiración que les ayude a alcanzar sus más ambiciosos proyectos."
                }
              />{" "}
            </div>
          </div>
        </div>
        <div className="m-w-100 w-33  h-100 h-pr-fl-ma p-20px">
          <div
            className="w-100 h-100 h-pr-fl-ma "
            Style="border: 1px solid; border-color: white;"
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c">
              <div className="w-and-h-150px h-pr-fl-ma r-h-c circle p-20px">
              <img
                src={Eye}
                className="w-100 h-100 h-pr-fl-ma" Style="stroke: #ffffff !important;"/> 
              </div>
              <ContentBox
                link={"enlace accion"}
                className="w-100 p-20px h-a t-a-c"
                title={"Visión"}
                subtitle={"Su nueva imagen de marca."}
                text={
                  "Nuestra visión es ser la agencia de producción y desarrollo más reconocida a nivel regional, creando espacios de colaboración con empresas multinacionales, para generar cientos de miles de oportunidades directa e indirectamente tanto a empresas como a personas, así como el deseo de colaboración y producción internacional en nuestro país."
                }
              />{" "}
            </div>
          </div>
        </div>
        <div className="m-w-100 w-33  h-100 h-pr-fl-ma p-20px">
          <div
            className="w-100 h-100 h-pr-fl-ma "
            Style="border: 1px solid; border-color: white;"
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c">
              <div className="w-and-h-150px h-pr-fl-ma r-h-c circle p-20px">
              <img
                src={Diamond}
                className="w-100 h-100 h-pr-fl-ma" Style="stroke: #ffffff !important;"/> 
              </div>

              <ContentBox
                link={"enlace accion"}
                className="w-100 p-20px h-a t-a-c"
                title={"Valores"}
                subtitle={"Su nueva imagen de marca."}
                text={
                  "Somos un grupo de personas creativas, ambiciosas y con más de 100.000 horas de estudio, planificación y desarrollo en cada una de nuestras áreas. Promovemos los conocimientos, habilidades y experiencias de todas las persona, nuestras raices latinas cargadas de tanta cultura aportan un gran valor inclusivo y multicultural.  "
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
