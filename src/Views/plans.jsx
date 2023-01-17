import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";
import Btn from "../components/btn";
import { Link } from "react-router-dom";
import UserMaleCircle from "../assets/icons/user_male_circle.svg";
import MessageWriting from "../assets/icons/message_writing.svg";
const Plans = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b p-10px of-auto ">
       {/* PRIMEROS PASOS ------------------------------------------------ */}
        <div
          className="w-100 h-a h-pr-fl-ma p-10px"
          Style="border-bottom: 1px solid; border-color: white;"
        >
          <div className="m-w-100 w-50 h-a h-pr-fl-ma">
          <ContentBox
            title={"Primeros pasos"}
            subtitle={"Su nueva identidad de marca."}
          /></div>
           <div className="m-w-100  w-50 h-a h-pr-fr-ma">
           <div className="w-100 h-a h-pr-fl-ma d-i-f">
      <div className=" w-70 h-a h-pr-fl-ma ">
    
       <ContentBox
        className="w-100 m-b-10px   p-10px" Style="word-wrap: nowrap;  "
        text={"¿Tiene una idea pero no sabe qué le conviene más?  "}
        textclassName="ns-c-e f-w-bo"

      ><ContentBox intitle="Coordine con nosotros una reunión para evaluar juntos la etapa actual de su proyecto!"/>  </ContentBox>
      </div>
      <div className="w-30 h-a h-pr-fl-ma">
     <Btn className="r-h-c" text="Coordinar estudio" enlace="https://calendly.com/origenstudios/first_steps"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={MessageWriting}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Coordinar reunión de estudio"
            /></div></Btn>
      </div>
      </div>
           </div>
        </div>
        <div
          className="w-100 h-a h-pr-fl-ma p-10px"
         
        >
          {/* PRIMEROS PASOS | CREACIÓN DE MARCA ------------------------------------------------ */}
          <div
          className="m-w-100 w-33 h-a h-pr-fl-ma  p-10px"
          
        > <div className="w-100 h-a h-pr-fl-ma p-10px" Style="border: 1px solid; border-color: white;">
          <ContentBox
          className="p-10px"
        title={"Creación de marca"}
        subtitle={"Conozca su nueva identidad de marca."}
      />

      <ContentBox
        className="w-100 m-b-10px"
        category={"Diseño"}
     
      />
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Creación de Logo."}
        note={"Isotipo/Logotipo/Imagotipo/Isologo"}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Manual de uso de marca."}
        note={"Construcción/Márgenes/Prohibiciones"}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• 5 Ilustraciones funcionales"}
        note={"Mockups ó ilustraciones estáticas"}
        noteclassName="ns-c-e p-l-10px"
      

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
      <div className="w-70 h-a h-pr-fl-ma ">
    
       <ContentBox
        className="w-100 m-b-10px   p-10px" Style="word-wrap: nowrap;  "
        note={"Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."}

      />
      </div>
      <div className="w-30 h-a h-pr-fl-ma">
     <Btn className="r-h-c" text="Coordinar" enlace="https://calendly.com/origenstudios/first_steps"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={MessageWriting}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Coordinar"
            /></div></Btn>
      </div>
      </div>
      </div>


      </div>


 {/* PRIMEROS PASOS | CREACIÓN DE REDES SOCIALES ------------------------------------------------ */}
 <div
          className="m-w-100 w-33 h-a h-pr-fl-ma  p-10px"
          
        > <div className="w-100 h-a h-pr-fl-ma p-10px" Style="border: 1px solid; border-color: white;">
          <ContentBox
          className="p-10px"
        title={"Creación redes sociales"}
        subtitle={"Muestrese donde sus clientes están."}
      />

      <ContentBox
        className="w-100 m-b-10px"
        category={"Desarrollo"}
     
      />
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Verificación de usuarios vacantes."}
        note={"En caso de no estar disponible ver • Naming. "}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <ContentBox
        className="w-100 m-b-10px"
        category={"Diseño"}
     
      />
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Mediakit de perfiles."}
        note={"Foto de perfil/ Plantilla de Portada."}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Mediakit de contenido."}
        note={"Plantilla para post (5 piezas). "}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Manual de uso de Mediakits."}
        note={"Creación de post/Creación de portadas. "}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      
      
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
      <div className="w-70 h-a h-pr-fl-ma ">
    
       <ContentBox
        className="w-100 m-b-10px   p-10px" Style="word-wrap: nowrap;  "
        note={"Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."}

      />
      </div>
      <div className="w-30 h-a h-pr-fl-ma">
          <Btn className="r-h-c" text="Coordinar"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={MessageWriting}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Coordinar"
            /></div></Btn>
      </div>
      </div>
      </div>


      </div>
       {/* PRIMEROS PASOS | CREACIÓN DE PAGINA WEB ------------------------------------------------ */}
       <div
          className="m-w-100 w-33 h-a h-pr-fl-ma  p-10px"
          
        > <div className="w-100 h-a h-pr-fl-ma p-10px" Style="border: 1px solid; border-color: white;">
          <ContentBox
          className="p-10px"
        title={"Creación de pagina web"}
        subtitle={"Ofrezca su propio espacio en la red."}
      />
       <ContentBox
      className="w-100 m-b-10px"
      category={"Diseño"}
   
    />
  <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Diseño web a medida."}
        note={"Diseño original para sitio web. "}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <ContentBox
        className="w-100 m-b-10px"
        category={"Desarrollo"}
     
      />
            <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Sitio web ágil ó personalizado."}
        note={"Plantilla original Wordpress / Sitio personalizado "}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• API de seguimiento y publicidad."}
        note={"Conozca quienes son sus clientes. "}
        noteclassName="ns-c-e p-l-10px"

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
     
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
      <div className="w-70 h-a h-pr-fl-ma ">
    
       <ContentBox
        className="w-100 m-b-10px   p-10px" Style="word-wrap: nowrap;  "
        note={"Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."}

      />
      </div>
      <div className="w-30 h-a h-pr-fl-ma">
          <Btn className="r-h-c" text="Coordinar"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={MessageWriting}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Coordinar"
            /></div></Btn>
      </div>
      </div>
      </div>


      </div>

        </div>
        {/* ---------------------------------------------------------- CATEGORIA GENERAL */}
         {/* CATEGORIA GENERAL ------------------------------------------------ */}
         <div
          className="w-100 h-a h-pr-fl-ma p-10px"
          Style="border-bottom: 1px solid; border-color: white;"
        >
          <ContentBox
            title={"Posicionamiento"}
            subtitle={"Su marca, donde sus clientes están."}
          />
        </div>
        <div
          className="w-100 h-a h-pr-fl-ma p-10px"
         
        >
          {/* CREACIÓN DE MARCA ------------------------------------------------ */}
          <div
          className="m-w-100 w-33 h-a h-pr-fl-ma  p-10px"
          
        > <div className="w-100 h-a h-pr-fl-ma p-10px" Style="border: 1px solid; border-color: white;">
          <ContentBox
          className="p-10px"
        title={"Creación de marca"}
        subtitle={"Su nueva identidad de marca."}
      />

      <ContentBox
        className="w-100 m-b-10px"
        category={"Diseño"}
     
      />
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
      <div className="w-70 h-a h-pr-fl-ma ">
    
       <ContentBox
        className="w-100 m-b-10px   p-10px" Style="word-wrap: nowrap;  "
        note={"Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."}

      />
      </div>
      <div className="w-30 h-a h-pr-fl-ma">
          <Btn className="r-h-c" text="Coordinar"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={MessageWriting}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Coordinar"
            /></div></Btn>
      </div>
      </div>
      </div>


      </div>


 {/* CREACIÓN DE MARCA ------------------------------------------------ */}
 <div
          className="m-w-100 w-33 h-a h-pr-fl-ma  p-10px"
          
        > <div className="w-100 h-a h-pr-fl-ma p-10px" Style="border: 1px solid; border-color: white;">
          <ContentBox
          className="p-10px"
        title={"Creación de marca"}
        subtitle={"Su nueva identidad de marca."}
      />

      <ContentBox
        className="w-100 m-b-10px"
        category={"Diseño"}
     
      />
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
      <div className="w-70 h-a h-pr-fl-ma ">
    
       <ContentBox
        className="w-100 m-b-10px   p-10px" Style="word-wrap: nowrap;  "
        note={"Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."}

      />
      </div>
      <div className="w-30 h-a h-pr-fl-ma">
          <Btn className="r-h-c" text="Coordinar"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={MessageWriting}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Coordinar"
            /></div></Btn>
      </div>
      </div>
      </div>


      </div>
       {/* CREACIÓN DE MARCA ------------------------------------------------ */}
       <div
          className="m-w-100 w-33 h-a h-pr-fl-ma  p-10px"
          
        > <div className="w-100 h-a h-pr-fl-ma p-10px" Style="border: 1px solid; border-color: white;">
          <ContentBox
          className="p-10px"
        title={"Creación de marca"}
        subtitle={"Su nueva identidad de marca."}
      />

      <ContentBox
        className="w-100 m-b-10px"
        category={"Diseño"}
     
      />
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
       <ContentBox
        className="w-70 m-b-10px  p-10px" Style="border-bottom: 1px dotted; border-color: white; "
        text={"• Logotipo"}

      />
       <ContentBox
        className="w-30 m-b-10px t-a-r  p-10px" Style="word-wrap: nowrap; border-bottom: 1px solid; border-color: white; "
        note={"3 a 4 semanas"}

      />
      
      </div>
      <div className="w-100 h-a h-pr-fl-ma d-i-f">
      <div className="w-70 h-a h-pr-fl-ma ">
    
       <ContentBox
        className="w-100 m-b-10px   p-10px" Style="word-wrap: nowrap;  "
        note={"Coordine una reunión ahora mismo y obtenga un presupuesto personalizado."}

      />
      </div>
      <div className="w-30 h-a h-pr-fl-ma">
          <Btn className="r-h-c" text="Coordinar"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={MessageWriting}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Coordinar"
            /></div></Btn>
      </div>
      </div>
      </div>


      </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Plans;
