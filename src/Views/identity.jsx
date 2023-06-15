import React, { Fragment, useState } from 'react';

import Title from "../components/title";
import ContentBox from "../components/contentBox";
import Btn
 from "../components/btn";
const Identity = () => {

  const [mostrarMensuales, setMostrarMensuales] = useState(false);
  const [mostrarUnicos, setMostrarUnicos] = useState(false);

  const mostrarPlanesMensuales = () => {
    setMostrarMensuales(true);
    setMostrarUnicos(false);
  };

  const mostrarPlanesUnicos = () => {
    setMostrarMensuales(false);
    setMostrarUnicos(true);
  };

  return (
    <Fragment>
        <div className="w-95 r-h-c m-w-100 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <Title h4="Planes:" className="w-100 t-a-c m-t-100px ns-c-e"></Title>
        <Title
          h1="Construcción de Identidad"
          className="w-100 t-a-c m-b-50px"
        ></Title>
        <div
          className=" m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b  m-t-40px  bg-d"
          Style="border-radius: 20px;"
        >
          <span className="w-100 h-pr-fl-ma t-a-c f-f-Gilroy p-20px f-w-bo">
            Haz click aquí para conocer nuestros planes!
          </span>
          <div className="w-100 h-pr-fl-ma flexbox f-w-n-w j-c-c p-10px p-b-20px">
            <Btn
              className="w-200px m-w-100 ns-bg-darkgreen  p-l-20px p-r-20px p-10px m-5px f-w-bo br-s-solid br-c-white br-r-50px"
              text="Planes al costo"
              click={mostrarPlanesUnicos}
            ></Btn>
            <Btn
              className="w-200px m-w-100  ns-bg-darkgreen ns-bg-tone-1 p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              text="Planes a presupuestar"
              click={mostrarPlanesMensuales}
            ></Btn>
          </div>
        </div>
      </div>

{/* //! ----------------------------------------- MOSTRANDO PLANES UNICOS */}
{mostrarUnicos && (
        <div id="planes-unicos" className="w-80 h-pr-fl-ma r-h-c bg-d">
          <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b b-s-b-b">
            <Title
              h4="&#129150; Planes al costo"
              className="w-100 t-a-l p-20px bg-d ns-bg-darkgreen "
            ></Title>
          </div>

          <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b b-s-b-b m-b-20px">
            <Title
              h1="&#129150; Logotipo."
              className="w-100 t-a-l p-20px bg-d ns-c-darkgreen ns-c-tone-1 "
            ></Title>
          </div>

          <div className="w-100 r-h-c h-a h-pr-fl-ma ns-br-r-1  b-s-b-b">
            {/* //green IDENTIDAD ---------------------------------------------------------------- IMAGENES */}
            {/*//green CONTENIDO - BLOQUE 4  - AL COSTO - LOGOTIPO - EMPRENDIMIENTO  */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Emprendimiento"
                  className="p-10px bg-d m-b-10px w-100 t-a-c ns-bg-darkgreen "
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="414"
                  decimas="00"
                  antes="690,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

                <div className="w-100 h-100 h-pr-fl-ma ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <Title
                      h4="&#8599; 3 Conceptualizaciones."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 3 conceptos según su Briefing."
                    ></ContentBox>

<Title
                      h4="&#8599; 3 Fases de Afinación."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 3 reuniones de corrección."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Adaptación de parámetros de rendimiento."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Realizamos las correcciones necesarias para cumplir los parámetros de rendimiento y calidad correspondientes."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Generamos el Logotipo Maestro."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Entregables:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1 Logo - Vector (SVG + PNG + JPG)"
                    ></ContentBox>
                   <ContentBox
                      className="w-100"
                      list="1 Mockup funcional (PNG ó JPG)"
                    ></ContentBox>
                 <ContentBox
                      className="w-100"
                      list="Informe de construcción (Básico)"
                    ></ContentBox>

                    <Btn
                      className="w-100 p-15px f-w-bo m-t-20px ns-bg-darkgreen  "
                      text="¡Empezar ahora!"
                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
            {/* //green CONTENIDO - BLOQUE 4  - AL COSTO - LOGOTIPO - STARTUP */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Startup"
                  className="p-10px bg-d m-b-10px w-100 t-a-c ns-bg-darkgreen"
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="888"
                  decimas="00"
                  antes="1480,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

<div className="w-100 h-100 h-pr-fl-ma ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <Title
                      h4="&#8599; 4 Conceptualizaciones."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 4 conceptos según su Briefing."
                    ></ContentBox>

<Title
                      h4="&#8599; 3 Fases de Afinación."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 3 reuniones de corrección."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Adaptación de parámetros de rendimiento."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Realizamos las correcciones necesarias para cumplir los parámetros de rendimiento y calidad correspondientes."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Generamos el Logotipo Maestro."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Entregables:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1 Logo - Vector (SVG + PNG + JPG)"
                    ></ContentBox>
                   <ContentBox
                      className="w-100"
                      list="3 Mockup funcional (PNG ó JPG)"
                    ></ContentBox>
                 <ContentBox
                      className="w-100"
                      list="Informe de construcción (Básico)"
                    ></ContentBox>

                    <Btn
                      className="w-100 p-15px f-w-bo m-t-20px ns-bg-darkgreen  "
                      text="¡Empezar ahora!"
                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
            {/* //green CONTENIDO - BLOQUE 4  - AL COSTO - LOGOTIPO - MEDIANA EMPRESA */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Mediana empresa"
                  className="p-10px bg-d m-b-10px w-100 t-a-c ns-bg-darkgreen "
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="2820"
                  decimas="00"
                  antes="4700,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

<div className="w-100 h-100 h-pr-fl-ma ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <Title
                      h4="&#8599; 5 Conceptualizaciones."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 5 conceptos según su Briefing."
                    ></ContentBox>

<Title
                      h4="&#8599; 3 Fases de Afinación."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 5 reuniones de corrección."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Adaptación de parámetros de rendimiento."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Realizamos las correcciones necesarias para cumplir los parámetros de rendimiento y calidad correspondientes."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Generamos el Logotipo Maestro."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Entregables:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1 Logo - Vector (SVG + PNG + JPG)"
                    ></ContentBox>
                   <ContentBox
                      className="w-100"
                      list="5 Mockup funcional (PNG ó JPG)"
                    ></ContentBox>
                 <ContentBox
                      className="w-100"
                      list="Informe de construcción (Estandar)"
                    ></ContentBox>
                    <ContentBox
                      className="w-100 ns-c-e f-w-bo p-10px bg-d m-t-10px"
                      text="Editables Logo"
                    ></ContentBox>

                    <Btn
                      className="w-100 p-15px f-w-bo m-t-20px ns-bg-darkgreen  "
                      text="¡Empezar ahora!"
                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>
            {/* //green CONTENIDO - BLOQUE 4  - AL COSTO - LOGOTIPO - EMPRESA NACIONAL */}
            <div className="w-25 tab-w-50  m-w-100  h-a h-pr-fl-ma p-5px">
              <div className="w-100 h-pr-fl-ma bg-d p-5px">
                <Title
                  h4="Empresa Nacional"
                  className="p-10px bg-d m-b-10px w-100 t-a-c ns-bg-darkgreen "
                ></Title>
                <ContentBox
                  className="w-90 r-h-c m-b-10px bg-d p-10px"
                  pricing
                  ahora="4020"
                  decimas="00"
                  antes="6700,00"
                  simbolo="$"
                  divisa="USD"
                  plazo="Costo única vez."
                ></ContentBox>

<div className="w-100 h-100 h-pr-fl-ma ">
                  <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <Title
                      h4="&#8599; 8 Conceptualizaciones."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 8 conceptos según su Briefing."
                    ></ContentBox>

<Title
                      h4="&#8599; 3 Fases de Afinación."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Le ofrecemos 3 reuniones de corrección."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Adaptación de parámetros de rendimiento."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox
                      className="w-100"
                      list="Realizamos las correcciones necesarias para cumplir los parámetros de rendimiento y calidad correspondientes."
                    ></ContentBox>
                    <Title
                      h4="&#8599; Generamos el Logotipo Maestro."
                      className="w-100 h-pr-fl-ma m-t-10px"
                    ></Title>
                    <ContentBox className="w-100 ns-c-e f-w-bo">
                      Entregables:
                    </ContentBox>
                    <ContentBox
                      className="w-100"
                      list="1 Logo - Vector (SVG + PNG + JPG)"
                    ></ContentBox>
                   <ContentBox
                      className="w-100"
                      list="10 Mockup funcional (PNG ó JPG)"
                    ></ContentBox>
                     <ContentBox
                      className="w-100"
                      list="Informe de construcción (Estandar)"
                    ></ContentBox>
                 <ContentBox
                      className="w-100"
                      list="Brandbook (Estandar)"
                    ></ContentBox>

<ContentBox
                      className="w-100 ns-c-e f-w-bo p-10px bg-d m-t-10px"
                      text="Editables Logo"
                    ></ContentBox>
 <ContentBox
                      className="w-100 ns-c-e f-w-bo p-10px bg-d m-t-10px"
                      text="Editables Brandbook"
                    ></ContentBox>
                    <Btn
                      className="w-100 p-15px f-w-bo m-t-20px ns-bg-darkgreen  "
                      text="¡Empezar ahora!"
                    ></Btn>
                    <ContentBox
                      className="w-100 t-a-c m-t-5px f-w-bo "
                      Style="font-size: 10px;"
                    >
                      Cósto único por temporada y/o hasta agotar stock.
                    </ContentBox>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>    {/* //green CONTENIDO --------------------------------------------------------------- REDACCIÓN */}

          
        </div>
      )}

{/* //! ----------------------------------------- MOSTRANDO PLANES MENSUALES */}
{mostrarMensuales && (
       <div id="planes-mensuales" className="w-80 h-pr-fl-ma r-h-c bg-d">
       <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b b-s-b-b">
         <Title
           h4="&#129150; Planes a presupuestar"
           className="w-100 t-a-l p-20px bg-d ns-bg-darkgreen "
         ></Title>
       </div>

      
      <div className="w-100 h-200px h-pr-fl-ma ns-br-r-1 bg-d b-s-b-b">
      <Title
          h1="	
          &#128712; En construcción"
          className="w-100 h-a t-a-c p-20px r-v-c ns-c-e "
        ></Title>
 </div>
 
</div>
       )}


<div className="w-100  r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b bg-d-t b-s-b-b m-b-20px">
        <Title
          h3="&#129150; Todos los planes únicos & mensuales incluyen:"
          className="w-100 t-a-l p-20px bg-d"
        ></Title>
        <div className="w-100 h-pr-fl-ma p-20px bg-d">
        <div className="w-50 m-w-100 h-pr-fl-ma p-20px bg-d">
       
         <Title h3="&#8599; Confidencialidad Total" className="w-100 h-pr-fl-ma m-t-10px"></Title>
         <ContentBox className="w-100" list="Excluyendo los datos solicitados en el Briefing, No guardamos ningun tipo de ns-bg-darkbluermación personal de usted ni de su empresa."></ContentBox>
         <ContentBox className="w-100" list="Contamos con políticas de privacidad y al solicitar nuestros servicios, entendemos que acepta todos nuestros términos y condiciones, permitiendo el uso de su ns-bg-darkbluermación únicamente para realizar la pieza solicitada. "></ContentBox>
         <ContentBox className="w-100" list="OrigenStudios&reg; NO comercializará, venderá, intercambiará, ni presentará su ns-bg-darkbluermación ante absolutamente nadie (A exepción de investigaciones de caracter legal mediante orden judicial.)"></ContentBox>

         <Title h3="&#8599; Capacidad de reembolso" className="w-100 h-pr-fl-ma m-t-10px"></Title>
        <ContentBox className="w-100" list="OrigenStudios&reg; En caso de no finalizar la pieza en el tiempo ofrecido, OrigenStudios® se compromete a devolver hasta el 70% de lo abonado. En caso de querer continuar (fuera de plazo), se mantendrá el costo inicial con un 20% de descuento por nuestra parte."></ContentBox>
     
        <Title h3="&#8599; 3 Etapas de FeedBack" className="w-100 h-pr-fl-ma m-t-10px"></Title>
        <ContentBox className="w-100" list="Durante todo el proceso, coordinaremos con usted y/o su representante a cargo, 3 etapas de Feedback/Afinación, para que pueda tomar decisiones clave y solicitar cambios sobre su pieza"></ContentBox>
        <ContentBox className="w-100" list="Las primeras 3 etapas de Feedback/Afinación son gratuitas, de ahí en adelante el costo de cada etapa es del 2% del costo de la pieza final. "></ContentBox>
        </div>
        <div className="w-50 m-w-100 h-pr-fl-ma p-20px bg-d">
         <Title h3="&#8599; Material editable" className="w-100 h-pr-fl-ma m-t-10px"></Title>
         <ContentBox className="w-100" list="Se entregan en un plazo de hasta 1 semana (a coordinar con usted) al finalizar la pieza (en casos de pago directo)"></ContentBox>
         <ContentBox className="w-100" list="Se entregan al finalizar el pago (en casos de pagos en cuotas)"></ContentBox>
         <Title h3="&#8599; Pagos en cuotas" className="w-100 h-pr-fl-ma m-t-10px"></Title>
         <ContentBox className="w-100" list="Los abonos mensuales son de pago único, sin embargo en caso de atrasos puede solicitar abonar el restante del mes hasta en 6 cuotas)"></ContentBox>
         <Title h3="&#8599; Seguridad de oficio" className="w-100 h-pr-fl-ma m-t-10px"></Title>
         <ContentBox className="w-100" list="En caso de no poder pagar por la pieza, no se preocupe, esta no se eliminará ni se entregará a otro cliente."></ContentBox>
         <ContentBox className="w-100" list="Mantendremos la pieza en StandBy hasta que pueda continuar con su abono mensual (siempre que se comunique con nosotros al menos 1 vez en los próximos 3 meses)"></ContentBox>
         <ContentBox className="w-100" list="En caso de no saber de usted al finalizar ese plazo, resguardaremos la pieza hasta por 1 año."></ContentBox>
         </div> </div> </div>
    
    </Fragment>
  );
};

export default Identity;
