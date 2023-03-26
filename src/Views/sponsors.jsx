import React from 'react'
import { Fragment } from "react";

import Typewriter from "typewriter-effect";
import ContentBox from "../components/contentBox";
import OSLogoSymbol from "../assets/logo/OS-Logo-Symbol-White-Svg.svg";
import MedalLvl1 from "../assets/images/medals/medal-lvl-1.png";
import MedalLvl2 from "../assets/images/medals/medal-lvl-2.png";
import MedalLvl3 from "../assets/images/medals/medal-lvl-3.png";
import MedalLvl4 from "../assets/images/medals/medal-lvl-4.png";

import CardContainer from "../components/cardcontainer";
import Card from "../components/card";
import Btn from "../components/btn";
const Sponsors = () => {
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 40,
   
    
});

  return (
  <Fragment>
{/* <div className="w-100 h-100 h-pr-fl-ma of-scroll ">
 <div className="w-100 h-a h-pr-fl-ma p-20px">
<CardContainer>
  <Card 
  
 
  title="ADS & Publicidad"
  subtitle="En todos lados."
  icon={` ${MedalLvl1} `}
  description="Creamos su campaña publicitaria, la llevamos al medio que desee y la publicamos en nuestra web."
  btn="Activo"
  btnText="Saber más"
  handleClick="#Ads"
></Card>


  <Card CardClassName=" t-a-c" title="Campañas cooperativas"
  subtitle={" Sus mejores productos, nuestros mejores servicios."}

  icon={` ${MedalLvl2} `}
  description="Creamos su campaña publicitaria"
  list="Activo"

  btn="Activo"
  btnText="Coordinar Reunión"></Card>


<Card title="Inversión directa"
  subtitle="Plan Básico"
  icon={` ${MedalLvl3} `}
  description="Creamos su campaña publicitaria"
  list="Activo"

  btn="Activo"
  btnText="Coordinar Reunión"></Card>
<Card title="Donativos"
  subtitle="Plan Básico"
  icon={` ${MedalLvl4} `}
  description="Creamos su campaña publicitaria"
  list="Activo"

  btn="Activo"
  btnText="Coordinar Reunión"></Card>
  
</CardContainer>


   </div>*/}


              

{/* ADS & PUBLICIDAD */}
{/*
<div id="Ads" className="w-100 h-100 h-pr-fl-ma of-auto p-20px bg-black-node-o-70 blur ns-br-r-1 m-b-20px">
{/* MEDALLA - TITULO & DESCRIPCIÓN */} 
{/*
<div className="w-33 m-w-100 h-a h-pr-fl-ma p-10px ">
  <div className="w-100 h-a h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1 b-s-b-b">
  <div className="w-100 h-a h-pr-fl-ma "> <img
              alt="MedalLvl1"
            className="w-and-h-250px r-h-c h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MedalLvl1}
            />
            <ContentBox className="w-100 t-a-c" title="ADS & Publicidad"></ContentBox>
            <ContentBox className="w-100 p-20px" text="Creamos y distribuímos campañas publicitarias en las que las empresas pueden presentar sus productos o servicios a una amplia audiencia. Trabajamos con una variedad de formatos publicitarios, incluyendo anuncios en línea, publicidad en redes sociales, publicidad en televisión y radio, y mucho más."></ContentBox>

            </div>
            </div>
</div>*/}

{/* REQUISITOS */}
{/*
<div className="w-33 m-w-100 h-100 h-pr-fl-ma  p-20px">
<ContentBox className="w-100 " title="Requisitos" subtitle="Todo lo que se necesita"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Le solicitaremos que complete un Briefing para conocer la necesidad de su campaña, de esta forma poder brindarle servicios personalizados que se ajusten a sus objetivos y presupuestos.</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Le solicitaremos algunos puntos clave como:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Objetivos de la campaña</li>
        <li type="disc">Sector de mercado</li>
        <li type="disc">Contenido multimedia</li>
        <li type="disc">Documentación necesaria</li>
        <li type="disc">Presupuesto disponible</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="Si no posee material audiovisual, nosotros podemos crearlo por usted!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Consultar"></Btn></div>
</div>
</div>*/}


{/* BENEFICIOS*/}
{/*
<div className="w-33 m-w-100 h-100 h-pr-fl-ma p-20px">
<ContentBox className="w-100 " title="Beneficios" subtitle="Todo lo que se ofrecemos"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Durante el proceso de cumplimiento de los objetivos y campañas, le ofrecemos diferentes beneficios dentro del servicio, estos no poseen costo extra al servicio.</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Algunos beneficios ofrecidos son:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Recomendaciones semanales</li>
        <li type="disc">Asesoriá personalizada</li>
        <li type="disc">Informe de resultados</li>
        <li type="disc">Publicidad terciarizada</li>
        <li type="disc">Propuestas de escalabilidad</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="¿Desea empezar una campaña? Coordinemos una reunión!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Coordinar"></Btn></div>
</div>
</div>





</div>*/}






{/* CAMPAÑAS COOPERATIVAS */}
{/*
<div id="Ads" className="w-100 h-100 h-pr-fl-ma of-auto p-20px bg-black-node-o-70 blur ns-br-r-1 m-b-20px">*/}
{/* MEDALLA - TITULO & DESCRIPCIÓN */}
{/*
<div className="w-33 m-w-100 h-a h-pr-fl-ma p-10px ">
  <div className="w-100 h-a h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1 b-s-b-b">
  <div className="w-100 h-a h-pr-fl-ma "> <img
              alt="MedalLvl2"
            className="w-and-h-250px r-h-c h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MedalLvl2}
            />
            <ContentBox className="w-100 t-a-c" title="ADS & Publicidad"></ContentBox>
            <ContentBox className="w-100 p-20px" text="Nosotros creemos en la fuerza de la colaboración y en el poder que tienen las empresas cuando trabajan juntas hacia un objetivo común. Por eso, estamos lanzando esta campaña para invitar a empresas de todos los tamaños y sectores a unirse a nosotros y marcar la diferencia."></ContentBox>

            </div>
            </div>
</div>*/}
{/* REQUISITOS */}{/* 
<div className="w-33 m-w-100 h-100 h-pr-fl-ma  p-20px">
<ContentBox className="w-100 " title="Requisitos" subtitle="Todo lo que se necesita"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Le solicitaremos que complete un Briefing para conocer la necesidad de su campaña, de esta forma poder brindarle servicios personalizados que se ajusten a sus objetivos y presupuestos.</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Le solicitaremos algunos puntos clave como:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Objetivos de la campaña</li>
        <li type="disc">Sector de mercado</li>
        <li type="disc">Contenido multimedia</li>
        <li type="disc">Documentación necesaria</li>
        <li type="disc">Presupuesto disponible</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="Si no posee material audiovisual, nosotros podemos crearlo por usted!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Consultar"></Btn></div>
</div>
</div>
*/}
{/* BENEFICIOS*/}{/* 
<div className="w-33 m-w-100 h-100 h-pr-fl-ma p-20px">
<ContentBox className="w-100 " title="Beneficios" subtitle="Todo lo que se ofrecemos"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Durante el proceso de cumplimiento de los objetivos y campañas, le ofrecemos diferentes beneficios dentro del servicio, estos no poseen costo extra al servicio.</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Algunos beneficios ofrecidos son:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Recomendaciones semanales</li>
        <li type="disc">Asesoriá personalizada</li>
        <li type="disc">Informe de resultados</li>
        <li type="disc">Publicidad terciarizada</li>
        <li type="disc">Propuestas de escalabilidad</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="¿Desea empezar una campaña? Coordinemos una reunión!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Coordinar"></Btn></div>
</div>
</div>





</div>



</div> */}

    </Fragment>
  
 
  )
}

export default Sponsors