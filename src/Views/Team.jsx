import React, { Fragment } from "react";

import CardContainer from "../components/cardcontainer";
import Card from "../components/card";
import ContentBox from "../components/contentBox";
import Nick from "../assets/team/nickolas-machado.jpg";
import Vicky from "../assets/team/victoria-brylka.jpg";
import Cesar from "../assets/team/cesar-lima.jpg";
import Carlos from "../assets/team/carlos-andres.jpg";

const Team = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b of-auto d-i-f m-d-b">
        
          <div className="w-50 m-w-100  h-pr-fl-ma b-s-b-b">          
           <div className="w-100 h-a h-pr-fl-ma b-s-b-b ">
          <div className="j-c-s-b d-f ">
           <Card
                  subtitle="Victoria Brylka"
                  CardClassName="w-150px h-a bg-black m-5px"
                  image={Vicky}
                  alt="Victoria Brylka"
              
                />
             
           <Card
                  subtitle="Carlos Andrés"
                  CardClassName="w-150px h-a bg-black m-5px"
                  image={Carlos}
                  alt="Carlos Andrés"
             
                />  
             
                <Card
                  subtitle="Cesar Lima"
                  CardClassName="w-150px h-a bg-black m-5px"
                  image={Cesar}
                  alt="Cesar Lima"
              
                />
                      
                   
                <Card
                  subtitle="Nickolas Machado"
                  CardClassName="w-150px h-a bg-black m-5px"
                  image={Nick}
                  alt="Nickolas Machado"
               
                /> 
                </div>
            </div>

         
          </div>
          <div className="w-50 m-w-100 h-100 h-pr-fl-ma "> 
         
          <div className="w-100 h-100 h-pr-fl-ma  b-s-b-b ">
            <div className="w-80 h-a bg-black-node-o-70 blur ns-br-r-1 of-h p-20px m-w-100 h-a f-f-Gilroy h-pr-fl-ma centered">
              <ContentBox
                className="h-pr-fl-ma w-100 h-a "
                title={"Un equipo en expansión"}
                subtitle={"Crecemos contigo."}
              />
     
              <span
                className="h-pr-fl-ma w-100 h-a m-b-20px" >¡Bienvenido! Somos un equipo de expertos en expansión, apasionados por potenciar la calidad de los productos y servicios de las empresas más ambiciosas. Nos encanta trabajar con marcas que buscan ir más allá y marcar la diferencia en su sector.</span>
            <span
                className="h-pr-fl-ma w-100 h-a m-b-20px" >Nos especializamos en el desarrollo comercial de productos y servicios, contenido digital, marketing y ventas. Contamos con una amplia experiencia y un conjunto de habilidades únicas que nos permiten afrontar cualquier desafío que su marca pueda tener.</span>
             
                    <span
                className="h-pr-fl-ma w-100 h-a m-b-20px" >Nos tomamos muy en serio la calidad de nuestro trabajo y nos esforzamos por brindar un servicio de excelencia a todos nuestros clientes. Trabajamos en estrecha colaboración con su equipo para entender las necesidades específicas de su marca y desarrollar soluciones personalizadas que generen resultados efectivos.
                "</span >
              <span
                className="h-pr-fl-ma w-100 h-a m-b-20px ns-c-e" >
                No dude en ponerse en contacto con nosotros para cualquier consulta o para discutir cómo podemos ayudar a su marca a crecer y prosperar. ¡Estamos aquí para ayudarle! </span >
            </div>
        
        </div>
        </div>

        
      
      </div>
    </Fragment>
  );
};

export default Team;
