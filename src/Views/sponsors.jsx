import React from 'react'
import { Fragment } from "react";


import ContentBox from "../components/contentBox";
import OSLogoSymbol from "../assets/logo/OS-Logo-Symbol-White-Svg.svg";

import CoinLvl13D from "../assets/images/medals/coin-lvl-1-3d.png";

import MedalLvl1 from "../assets/images/medals/medal-lvl-1.png";
import MedalLvl2 from "../assets/images/medals/medal-lvl-2.png";
import MedalLvl3 from "../assets/images/medals/medal-lvl-3.png";
import MedalLvl4 from "../assets/images/medals/medal-lvl-4.png";

import CardContainer from "../components/cardcontainer";
import Card from "../components/card";
import Btn from "../components/btn";
const Sponsors = () => {
  var app = document.getElementById('app');



  return (
  <Fragment>
<div className="w-100 h-100 h-pr-fl-ma of-scroll ">
<div className="w-100 h-100 h-pr-fl-ma p-20px r-h-c ">
<div className="w-100 h-80 h-pr-fl-ma p-20px r-h-c ">
<img
                              src={CoinLvl13D}
                              className="coin-sponsor-animation  w-and-h-400px "
                             
                              alt="Coin"
                              Style="left: 0px; right: 0px; margin: auto; position: absolute; bottom: 0px; top: 0px;"
                            />
                            
                                            
          </div>

          <div className="w-100 h-20 p-10px h-pr-fl-ma d-i-f m-d-b bg-black-node-o-70 blur ns-br-r-1 b-s-b-b">
<div className="w-33 m-w-100 h-a h-pr-fl-ma  t-a-c p-5px"><span className="f-f-Gilroy m-ns-f-s-normal   ns-f-s-medium f-w-bo">Realiza un donativo/campaña</span>
</div>
<div className="w-33 m-w-100 h-a h-pr-fl-ma  t-a-c p-5px"><span className="f-f-Gilroy m-ns-f-s-normal   ns-f-s-medium f-w-bo">Obten una medalla</span></div>
<div className="w-33 m-w-100 h-a h-pr-fl-ma t-a-c p-5px"><span className="f-f-Gilroy m-ns-f-s-normal   ns-f-s-medium f-w-bo">Participa por recompensas</span></div>

</div>



</div>
 <div className="w-100 h-a h-pr-fl-ma p-20px">
<CardContainer>
 <Card 
  
 
  title="ADS & Publicidad"
  subtitle="En todos lados."
  iconclassName="rotate-scale-up-vertical"
  icon={` ${MedalLvl1} `}
  description="Creamos su campaña publicitaria, la llevamos al medio que desee y la publicamos en nuestra web."
  btn="Activo"
  btnLink={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
  btnText="Coordinar Reunión"

></Card>



  <Card CardClassName=" t-a-c" title="Campañas Cooperativas"
  subtitle={" Sus mejores productos, nuestros mejores servicios."}
  iconclassName="rotate-scale-up-vertical"
  icon={` ${MedalLvl2} `}
  description="Unimos nuestros conocimientos, habilidades y experiencias para fortalecer al máximo su producto/servicio."
  list="Activo"
  btnLink={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
  btn="Activo"
  btnText="Coordinar Reunión"></Card>


<Card title="Inversión directa"
  subtitle="Potenciando el futuro."
  iconclassName="rotate-scale-up-vertical"
  icon={` ${MedalLvl3} `}
  description="Generamos planes solidos de inversión rápida con retornos extremadamente rentables y super escalables."
  list="Activo"
  btnLink={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
  btn="Activo"
  btnText="Coordinar Reunión"></Card>

<Card title="Donativos"
  subtitle="Plan Básico"
  iconclassName="rotate-scale-up-vertical"
  icon={` ${MedalLvl4} `}
  description="Creamos su campaña publicitaria"
  list="Activo"
  btnLink={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
  btn="Activo"
  btnText="Coordinar Reunión"></Card>
  
</CardContainer>


   </div>


              

{/* ----------------------------------------------------  ADS & PUBLICIDAD */}

<div id="Publicidad" className="w-100 h-a h-pr-fl-ma of-auto p-20px bg-black-node-o-70 blur ns-br-r-1 m-b-20px">
{/* MEDALLA - TITULO & DESCRIPCIÓN */} 

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
</div>

{/* REQUISITOS */}

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
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/" text="Consultar"></Btn></div>
</div>
</div>


{/* BENEFICIOS*/}

<div className="w-33 m-w-100 h-100 h-pr-fl-ma p-20px">
<ContentBox className="w-100 " title="Beneficios" subtitle=" Todo lo que ofrecemos"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Durante el proceso de cumplimiento de los objetivos y campañas, le ofrecemos diferentes beneficios dentro del servicio, estos no poseen costo extra al servicio.</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Algunos beneficios ofrecidos son:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Recomendaciones semanales</li>
        <li type="disc">Asesoría personalizada</li>
        <li type="disc">Informe de resultados</li>
        <li type="disc">Publicidad tercerizada</li>
        <li type="disc">Propuestas de escalabilidad</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="¿Desea empezar una campaña? Coordinemos una reunión!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Coordinar"                     enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
></Btn></div>
</div>
</div>





</div>






{/* ----------------------------------------------------  CAMPAÑAS COOPERATIVAS */}

<div id="Cooperacion" className="w-100 h-a h-pr-fl-ma of-auto p-20px bg-black-node-o-70 blur ns-br-r-1 m-b-20px">
{/* MEDALLA - TITULO & DESCRIPCIÓN */}

<div className="w-33 m-w-100 h-a h-pr-fl-ma p-10px ">
  <div className="w-100 h-a h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1 b-s-b-b">
  <div className="w-100 h-a h-pr-fl-ma "> <img
              alt="MedalLvl2"
            className="w-and-h-250px r-h-c h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MedalLvl2}
            />
            <ContentBox className="w-100 t-a-c"  title="Campañas Cooperativas"></ContentBox>
            <ContentBox className="w-100 p-20px" text="Nosotros creemos en la fuerza de la colaboración y en el poder que tienen las empresas cuando trabajan juntas hacia un objetivo común. Por eso, estamos lanzando esta campaña para invitar a empresas de todos los tamaños y sectores a unirse a nosotros y marcar la diferencia."></ContentBox>

            </div>
            </div>
</div>
{/* REQUISITOS */}
<div className="w-33 m-w-100 h-100 h-pr-fl-ma  p-20px">
<ContentBox className="w-100 " title="Requisitos" subtitle="Todo lo que se necesita"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Le solicitaremos una reunión inicial de primer contacto, para exponer mutuamente nuestros objetivos y el alcance entre las partes, de esta manera poder trazar un nuevo horizonte.</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Trataremos algunos puntos clave como:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Objetivos de la cooperación</li>
        <li type="disc">Posibilidad de crecimiento</li>
        <li type="disc">Recursos disponibles</li>
        <li type="disc">Capacidad de solvencia</li>
        <li type="disc">Metodologías de cooperación</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="Si no posee material audiovisual, nosotros podemos crearlo por usted!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Consultar"                     enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
></Btn></div>
</div>
</div>

{/* BENEFICIOS*/}
<div className="w-33 m-w-100 h-100 h-pr-fl-ma p-20px">
<ContentBox className="w-100 " title="Beneficios" subtitle=" Todo lo que ofrecemos"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">A continuación exponemos lo que para nosotros son algunos de los beneficios más importantes de mantener campañas consolidadas en cooperatividad empresarial con nosotros.</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Algunos beneficios ofrecidos son:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Mayor alcance</li>
        <li type="disc">Reducción de costos</li>
        <li type="disc">Aumento de lealtad del cliente</li>
        <li type="disc">Fortalecimiento de marca</li>
        <li type="disc">Mayor impacto social</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="¿Desea empezar una campaña? Coordinemos una reunión!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Coordinar"                    enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
></Btn></div>
</div>
</div>





</div>



{/* ---------------------------------------------------- INVERSIÓN DIRECTA */}

<div id="Inversion" className="w-100 h-a h-pr-fl-ma of-auto p-20px bg-black-node-o-70 blur ns-br-r-1 m-b-20px">
{/* MEDALLA - TITULO & DESCRIPCIÓN */}

<div className="w-33 m-w-100 h-a h-pr-fl-ma p-10px ">
  <div className="w-100 h-a h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1 b-s-b-b">
  <div className="w-100 h-a h-pr-fl-ma "> <img
              alt="MedalLvl3"
            className="w-and-h-250px r-h-c h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MedalLvl3}
            />
            <ContentBox className="w-100 t-a-c"  title="Inversión Directa"></ContentBox>
            <ContentBox className="w-100 p-20px" text="Nosotros nos comprometemos a ofrecer servicios y productos de marketing, desarrollo y diseño gráfico de alta calidad, a través de un equipo altamente capacitado, que hace uso de las tecnologías de vanguardia, testeando cada pieza mediante parámetros de redimiento y calidad así como una formación constante y especialización en diversas áreas. Nuestros planes se basan en un análisis de mercado sólido y en una estrategia de crecimiento enfocada en la innovación y la mejora continua."></ContentBox>

            </div>
            </div>
</div>
{/* REQUISITOS */}
<div className="w-33 m-w-100 h-100 h-pr-fl-ma  p-20px">
<ContentBox className="w-100 " title="Requisitos" subtitle="Todo lo que se necesita"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Disponer de grandes recursos financieros no solo presentará una mejora en nuestros servicios sino también en la calidad que nuestros clientes y usuarios le presentan a su público. </span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Utilizaremos dichos fondos para:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Reclutar personal capacitado</li>
        <li type="disc">Desarrollo de Tecnologías y herramientas de última generación</li>
        <li type="disc">Investigación y análisis de mercado</li>
        <li type="disc">Colaboraciones estratégicas</li>
        <li type="disc">Reconversión de recursos financieros</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="Si aún tiene dudas, no espere más y contáctenos hoy mismo!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Contactar"                    enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
></Btn></div>
</div>
</div>

{/* BENEFICIOS*/}
<div className="w-33 m-w-100 h-100 h-pr-fl-ma p-20px">
<ContentBox className="w-100 " title="Beneficios" subtitle=" Todo lo que ofrecemos"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Las inversiones directas generan oportunidades invaluables para todas las partes, los inversores, los clientes y la agencia..</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Algunas oportunidades suelen ser:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Aumentos claves en la rentabilidad</li>
        <li type="disc">Aumento de capacitación y formación</li>
        <li type="disc">Ventaja competitiva propulsada</li>
        <li type="disc">Fortalecimiento regional de la marca</li>
        <li type="disc">Mayor fortaleza y respaldo ante amenazas</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="¿Desea empezar una campaña? Coordinemos una reunión!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Coordinar"                    enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
></Btn></div>
</div>
</div>
</div>





{/* ---------------------------------------------------- DONATIVOS */}

<div id="Donativos" className="w-100 h-a h-pr-fl-ma of-auto p-20px bg-black-node-o-70 blur ns-br-r-1 m-b-20px">
{/* MEDALLA - TITULO & DESCRIPCIÓN */}

<div className="w-33 m-w-100 h-a h-pr-fl-ma p-10px ">
  <div className="w-100 h-a h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1 b-s-b-b">
  <div className="w-100 h-a h-pr-fl-ma "> <img
              alt="MedalLvl3"
            className="w-and-h-250px r-h-c h-pr-fl-ma "
            Style="object-fit: contain;"
            src={MedalLvl4}
            />
            <ContentBox className="w-100 t-a-c"  title="Donativos"></ContentBox>
            <ContentBox className="w-100 p-20px" text="Procuramos que sus donativos sean un canal de oportunidades para emprendimientos y pequeñas empresas que no pueden costearse servicios de alto coste. Utilizamos el fondo de donativos para apoyar el crecimiento de pequeños y medianos emprendimientos regionales, si bien no obtenemos ganancia directa de nuestros servicios sin paga, aportamos a la comunidad con valores de mejor calidad y ellos fortalecen la economía."></ContentBox>

            </div>
            </div>
</div>
{/* REQUISITOS */}
<div className="w-33 m-w-100 h-100 h-pr-fl-ma  p-20px">
<ContentBox className="w-100 " title="Requisitos" subtitle="Todo lo que se necesita"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Nos encanta agradecer y mantener la transparencia en todo sentido, por esa razón le proponemos algunas formas de validar y optimizar su donativo. </span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Algunos puntos clave a definir:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Identificación / Comprobante de pago</li>
        <li type="disc">Elección de metodo de pago</li>
        <li type="disc">Tipo de objeto / bien a donar</li>
        <li type="disc">Propósito del donativo</li>
        <li type="disc">Documentación (si requiere)</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="¿Quiere hacer un donativo anónimo? Haga click en el siguiente botón!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Contactar"                    enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
></Btn></div>
</div>
</div>

{/* BENEFICIOS*/}
<div className="w-33 m-w-100 h-100 h-pr-fl-ma p-20px">
<ContentBox className="w-100 " title="Beneficios" subtitle=" Todo lo que ofrecemos"></ContentBox>
<span className="w-100 p-10px h-a h-pr-fl-ma f-w-bo f-f-Gilroy">Las inversiones directas generan oportunidades invaluables para todas las partes, los inversores, los clientes y la agencia..</span>
<span className="w-100 p-l-10px p-r-10px h-a h-pr-fl-ma  f-w-bo f-f-Gilroy ns-c-e">Algunas oportunidades suelen ser:</span>
    <div className="w-100 h-a h-pr-fl-ma p-30px  f-f-Gilroy f-w-bo c-white">
      <ol className="l-h-30px">
     
        <li type="disc">Mejoras sociales en entornos locales</li>
        <li type="disc">Ampliación de oportunidades</li>
        <li type="disc">Fidelización de clientes tripartita</li>
        <li type="disc">Aumento significativo de imagen positiva</li>
        <li type="disc">Captación de nuevos prospectos</li>
       
      </ol>
      
    </div>

<div className="w-100 h-a h-pr-fl-ma m-t-10px  bg-black-node-o-70 blur ns-br-r-1 b-s-b-b p-10px flexbox">
<ContentBox className="w-100 f-w-bo " text="¿Desea realizar un donativo? Coordinemos una reunión!"></ContentBox>
<div className="w-a h-a h-pr-fl-ma  p-5px"><Btn className="p-l-10px p-r-10px f-w-bo" text="Coordinar"                    enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
></Btn></div>
</div>
</div>





</div>





</div>
    </Fragment>
  
 
  )
}

export default Sponsors