import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";
import Btn from "../components/btn";
import MessageWriting from "../assets/icons/message_writing.svg";
import Documentlist from "../assets/icons/document_list.svg";
import Users from "../assets/icons/users.svg";
import Group from "../assets/icons/group.svg";
import Quickreference from "../assets/icons/quick_reference.svg";
import Cloudupload from "../assets/icons/cloud_upload.svg";
import Superviseduser from "../assets/icons/supervised_user.svg";
import Lightbulb from "../assets/icons/lightbulb.svg";
import Lightbulbon from "../assets/icons/lightbulb_on.svg";
import Loader from "../assets/icons/loader.svg";


const Process = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto p-10px ">
 {/* PLANIFICACION -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
 <div
          className="w-100 h-a h-pr-fl-ma m-b-20px "
          Style="border-bottom: 1px solid; border-color: white;"
        >
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fl-ma ">
            <ContentBox 
            number={"1"}
              title={"PLANIFICACIÓN."}
              subtitle={"Evaluación y preparación teórica / conceptual ."}
            />
          </div>
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fr-ma">
            <div className="w-100 h-a h-pr-fl-ma m-b-5px d-i-f">
              <div className="m-w-50 w-70 h-a h-pr-fl-ma ">
                <ContentBox
                  className="w-100"
                  Style="word-wrap: nowrap;  "
                  intitle={"¿Tiene una idea de lo que necesita pero aún no sabe qué plan le conviene más?"}
                  intitleclassName=""
                   
                  
              
                >
                </ContentBox>
              </div>
              <div className="m-w-50 w-30 h-a h-pr-fr-ma">
                <Btn
                  className="h-pr-fr-ma "
                  text="Coordinar estudio"
                  enlace="https://calendly.com/origenstudios/first_steps"
                >
                  <div className="w-25px h-25px m-5px h-pr-fl-ma">
                    <img
                      src={MessageWriting}
                      className="w-100 h-100 h-pr-fl-ma"
                      Style="stroke: #ffffff !important;"
                      alt="Coordinar reunión de estudio"
                    />
                  </div>
                </Btn>
              </div>
            </div>
          </div>
        </div>

{/* -------------------------------------------------------------------- PLANIFICACION*/}

        <div className="w-100 h-a h-pr-fl-ma b-s-b-b m-b-20px">

        <div className="m-w-100 w-50 m-h-a h-100 h-pr-fl-ma b-s-b-b">
        <div
            className="m-w-100 w-50 h-300px m-h-350px h-pr-fl-ma b-s-b-b p-10px"
                 >
            <div className="w-100 h-a h-pr-fl-ma r-v-c  b-s-b-b" Style="border-bottom: 1px solid; border-color:white;" >
              <div className="w-and-h-150px r-h-c h-pr-fl-ma  b-s-b-b m-b-20px">
              <img
            className="w-100 h-100 h-pr-fl-ma centered"
            Style="object-fit: contain;"
            src={Documentlist}
            />
              </div>
              <div className="w-100 h-a r-h-c h-pr-fl-ma  b-s-b-b">
                <ContentBox
                  subtitle="COMPLETAR EL BRIEFING"
                  className=" w-100 t-a-c"
                />{" "}
              </div>
            
            </div>
          </div>

 <div
           className="m-w-100 w-50 h-300px m-h-350px h-pr-fl-ma b-s-b-b p-10px"
                     >
            <div className="w-100 h-a h-pr-fl-ma r-v-c  b-s-b-b"    Style="border-bottom: 1px solid; border-color:white;">
              <div className="w-and-h-150px r-h-c h-pr-fl-ma  b-s-b-b m-b-20px">
              <img
            className="w-100 h-100 h-pr-fl-ma centered"
            Style="object-fit: contain;"
            src={Superviseduser}
            />
              </div>
              <div className="w-100 h-a r-h-c h-pr-fl-ma  b-s-b-b">
                <ContentBox
                  subtitle="COORDINACIÓN DE EQUIPO Y RECURSOS"
                  className=" w-100 t-a-c"
                />{" "}
              </div>
            
            </div>
          </div>

          <div
            className="m-w-100 w-50 h-300px m-h-350px h-pr-fl-ma b-s-b-b p-10px"
         
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c  b-s-b-b"  Style="border-bottom: 1px solid; border-color:white;">
              <div className="w-and-h-150px r-h-c h-pr-fl-ma  b-s-b-b m-b-20px">
              <img
            className="w-100 h-100 h-pr-fl-ma centered"
            Style="object-fit: contain;"
            src={Quickreference}
            />
              </div>
              <div className="w-100 h-a r-h-c h-pr-fl-ma  b-s-b-b">
                <ContentBox
                  subtitle="ESTUDIO & PRESUPUESTO"
                  className=" w-100 t-a-c"
                />{" "}
              </div>
            
            </div>
          </div>

          <div
           className="m-w-100 w-50 h-300px m-h-350px h-pr-fl-ma b-s-b-b p-10px"
                     >
            <div className="w-100 h-a h-pr-fl-ma r-v-c  b-s-b-b"  Style="border-bottom: 1px solid; border-color:white;">
              <div className="w-and-h-150px r-h-c h-pr-fl-ma  b-s-b-b m-b-20px">
              <img
            className="w-100 h-100 h-pr-fl-ma centered"
            Style="object-fit: contain;"
            src={Cloudupload}
            />
              </div>
              <div className="w-100 h-a r-h-c h-pr-fl-ma  b-s-b-b">
                <ContentBox
                  subtitle="SOLICITUD DE ASSETS NECESARIOS"
                  className=" w-100 t-a-c"
                />{" "}
              </div>
            
            </div>
          </div>



          </div>
          <div className="m-w-100 w-50 h-100 h-pr-fl-ma b-s-b-b p-20px">
        
          <ContentBox 
          className="w-100"
            number="1"
              title={"COMPLETAR EL BRIEFING."}
            
            />
          <ContentBox className="m-b-20px p-20px" text="Le enviaremos un briefing el cual podrá completar para darnos a conocer de forma exácta todo lo que espera recibir de su proyecto."
          />
           <ContentBox 
           className="w-100"
            number="2"
              title={"COORDINACIÓN DE EQUIPO Y RECURSOS"}
     
            />
          <ContentBox className="m-b-20px p-20px" text="Coordinaremos una reunión interna con nuestro equipo de expertos para conocer la cantidad de ."
          />
           <ContentBox 
           className=" w-100"
            number="3"
              title={"ESTUDIO & PRESUPUESTO"}
     
            />
          <ContentBox className="m-b-20px p-20px"  text="Evaluaremos su proyecto personalmente ofrecerle un presupuesto en base a puntos clave como: Cantidad de etapas, plazos estimados, nivel de complejidad, necesidad de contratación terciarizada, presupuesto necesario inicial, capacidad de optimización de recursos y más."
          /> <ContentBox 
          className=" w-100"
          number="4"
            title={"SOLICITUD DE ASSETS NECESARIOS"}
   
          />
          <ContentBox className="m-b-20px p-20px" text="En caso de necesitar assets para realizar el proyecto, coordinaremos una reunión con usted para detallarle todo lo necesario, de lo contrario, podemos crear todos los assets necesarios con su previo consentimiento y ajustándonos a sus lineamientos generales."
          />
          </div> 

        </div>

{/* PRODUCCIÓN -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
<div
          className="w-100 h-a h-pr-fl-ma m-b-20px "
          Style="border-bottom: 1px solid; border-color: white;"
        >
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fl-ma ">
            <ContentBox 
            number="2"
              title={"PRODUCCIÓN."}
              subtitle={"Conceptualización, feedback y materialización."}
            />
          </div>
          <div className="w-50 m-w-100 b-s-b-b h-a h-pr-fr-ma">
            <div className="w-100 h-a h-pr-fl-ma m-b-5px d-i-f">
              <div className="m-w-50 w-70 h-a h-pr-fl-ma ">
                <ContentBox
                  className="w-100"
                  Style="word-wrap: nowrap;  "
                  intitle={"¿Tiene una idea de lo que necesita pero aún no sabe qué plan le conviene más?"}
                  intitleclassName=""
                   
                  
              
                >
                </ContentBox>
              </div>
              <div className="m-w-50 w-30 h-a h-pr-fr-ma">
                <Btn
                  className="h-pr-fr-ma "
                  text="Coordinar estudio"
                  enlace="https://calendly.com/origenstudios/first_steps"
                >
                  <div className="w-25px h-25px m-5px h-pr-fl-ma">
                    <img
                      src={MessageWriting}
                      className="w-100 h-100 h-pr-fl-ma"
                      Style="stroke: #ffffff !important;"
                      alt="Coordinar reunión de estudio"
                    />
                  </div>
                </Btn>
              </div>
            </div>
          </div>
        </div>

{/* -------------------------------------------------------------------- PRODUCCIÓN */}
        <div
          className="m-w-100 w-100 h-100 h-pr-fl-ma  b-s-b-b"
          
        >

         

<div
            className="m-w-100 w-33 h-300px m-h-350px h-pr-fl-ma r-v-c b-s-b-b p-10px"
            
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c  b-s-b-b" Style="border-bottom: 1px solid; border-color:white;">
              <div className="w-and-h-150px r-h-c h-pr-fl-ma  b-s-b-b m-b-20px">
              <img
            className="w-100 h-100 h-pr-fl-ma centered"
            Style="object-fit: contain;"
            src={Lightbulb}
            />
              </div>
              <div className="w-100 h-a r-h-c h-pr-fl-ma  b-s-b-b">
                <ContentBox
                  subtitle="Concepto"
                  className=" w-100 t-a-c"
                />{" "}
              </div>
              <ContentBox
                  text="Crearemos los conceptos necesarios para cada proyecto, estos conceptos se realizarán tomando en cuenta todos los aspectos ofrecidos en el Briefing."
                  className=" w-100 t-a-c m-b-20px"
                />
            </div>
            
          </div>


          <div
            className="m-w-100 w-33 h-300px m-h-350px h-pr-fl-ma r-v-c b-s-b-b p-10px"
            
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c  b-s-b-b" Style="border-bottom: 1px solid; border-color:white;">
              <div className="w-and-h-150px r-h-c h-pr-fl-ma  b-s-b-b m-b-20px">
              <img
            className="w-100 h-100 h-pr-fl-ma centered"
            Style="object-fit: contain;"
            src={Loader}
            />
              </div>
              <div className="w-100 h-a r-h-c h-pr-fl-ma  b-s-b-b">
                <ContentBox
                  subtitle="Feedback"
                  className=" w-100 t-a-c"
                />{" "}
              </div>
              <ContentBox
                  text="Le ofreceremos etapas de feedback, para que tenga el control total en la toma de decisiones de los procesos conceptuales de su proyecto. "
                  className=" w-100 t-a-c m-b-20px"
                />
            </div>
            
          </div>


          <div
            className="m-w-100 w-33 h-300px m-h-350px h-pr-fl-ma r-v-c b-s-b-b p-10px"
            
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c  b-s-b-b" Style="border-bottom: 1px solid; border-color:white;">
              <div className="w-and-h-150px r-h-c h-pr-fl-ma  b-s-b-b m-b-20px">
              <img
            className="w-100 h-100 h-pr-fl-ma centered"
            Style="object-fit: contain;"
            src={Lightbulbon}
            />
              </div>
              <div className="w-100 h-a r-h-c h-pr-fl-ma  b-s-b-b">
                <ContentBox
                  subtitle="Creación"
                  className=" w-100 t-a-c"
                />{" "}
              </div>
              <ContentBox
                  className=" w-100 t-a-c m-b-20px"
                  text="Una vez afinadas todas las etapas de feedback necesarias, crearemos la Pieza Clave ó Pieza Maéstra, la cual será su elemento definitivo lísto para su reproducción y uso. "
                />
            </div>
            
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Process;
