import React, { Fragment, useState  } from "react";

import ContentBox from "../components/contentBox";
import Title from "../components/title";
import Btn from "../components/btn";
import ImageComponent from "../components/ImageComponent";


import CreateIcon from "../assets/icons/create.svg"

const Plans = ({ children }) => {

  return (
    <div className="w-95 r-h-c m-w-100 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <Title
          h1="Todos los planes"
          className="w-100 t-a-c m-t-100px m-b-100px"
        ></Title>
  
      <div className="w-90 h-pr-fl-ma h-100 b-s-b-b r-h-c">
 {/* //blue PLANES: 1 - PLANES DE MARCA */}
 <div className="w-50 tab-w-100 m-w-100 h-a h-pr-fl-ma p-10px">
  <div className="w-100 h-a h-pr-fl-ma b-s-b-b bg-d-t p-5px">
    <div id="component30" className="w-30 h-a b-s-b-b h-pr-fl-ma flexbox a-i-s f-d-r j-c-s">
     
        <ImageComponent
          className="w-and-h-150px b-s-b-b ns-bg-blue ns-br-r-1"
          imageUrl={CreateIcon}
        ></ImageComponent>
    
    </div>
    <div id="component70" className="w-70 h-a h-pr-fl-ma flexbox a-i-s f-d-c j-c-s">
      <Title
        h4="PLANES DE MARCA"
        className="p-10px w-100 t-a-c ns-bg-blue ns-br-r-1"
      ></Title>
      <div className="w-100 h-pr-fl-ma bg-d p-20px">
        <ContentBox className="w-100 t-a-c" subtitle="Ideal para su emprendimiento/empresa."></ContentBox>
        <Title h3="&#8599; Planes únicos" className="w-100 h-pr-fl-ma m-t-10px"></Title>
        <ContentBox className="w-100" list="Para ocasiones especiales, y/o puntualidades."></ContentBox>
        <Title h3="&#8599; Planes Mensuales" className="w-100 h-pr-fl-ma m-t-10px"></Title>
        <ContentBox className="w-100" list="Te acompañamos en todo el mes."></ContentBox>
        <Btn className="w-100 p-20px f-w-bo m-t-20px ns-bg-blue" text="Ver más..." enlace="/plans/identity"></Btn>
        <ContentBox className="w-100 t-a-c m-t-5px f-w-bo" style="font-size: 10px;">OrigenStudios.com/plans/identity</ContentBox>
      </div>
    </div>
  </div>
</div>

{/* //blue PLANES: 2 - PLANES DE CONTENIDO */}
   
<div className="w-50 tab-w-100 m-w-100  h-a h-pr-fl-ma p-10px">
          <div className="w-100 h-a h-pr-fl-ma  b-s-b-b bg-d-t p-5px">
          <Title h4="GENERACIÓN DE CONTENIDO" className="p-10px w-100 t-a-c ns-bg-blue ns-bg-tone-1 ns-br-r-1"></Title>
            <div className="w-30 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
             
          <ImageComponent
                    className="w-and-h-100px b-s-b-b  h-pr-fl-ma ns-bg-blue ns-bg-tone-1 ns-br-r-1"
                    imageUrl={CreateIcon}
                  ></ImageComponent>
                  </div>
          <div className="w-70 h-100 h-pr-fl-ma ">
            <div className="w-100 h-pr-fl-ma bg-d p-20px ">
            <ContentBox className="w-100 t-a-c" subtitle="Ideal para automatizar sus redes sociales."></ContentBox>
            <Title h3="&#8599; Planes únicos" className="w-100 h-pr-fl-ma m-t-10px"></Title>
            <ContentBox className="w-100" list="Para ocasiones especiales, y/o puntualidades."></ContentBox>
            <Title h3="&#8599; Planes Mensuales" className="w-100 h-pr-fl-ma m-t-10px"></Title>
            <ContentBox className="w-100" list="Te acompañamos en todo el mes."></ContentBox>

           
           
            <Btn className="w-100 p-20px f-w-bo m-t-20px ns-bg-blue ns-bg-tone-1" text="Ver más..." enlace="/plans/posts"></Btn>
            <ContentBox className="w-100 t-a-c m-t-5px f-w-bo " Style="font-size: 10px;">OrigenStudios.com/plans/posts</ContentBox>

            </div>
            </div>
          
        </div>
        </div>
        
 {/* //green PLANES: 3 - ESPECIALES */}
      <div className="w-25 tab-w-50 m-w-100 tab-w-100 h-a h-pr-fl-ma p-10px ">
          <div className="w-100 h-a h-pr-fl-ma  b-s-b-b bg-d-t p-5px">
          <Title h4="PLANES ESPECIALES" className="p-10px w-100 t-a-c ns-bg-green ns-br-r-1"></Title>
            <div className="w-100 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
             
          <ImageComponent
                    className="w-and-h-100px b-s-b-b  h-pr-fl-ma ns-bg-green ns-br-r-1"
                    imageUrl={CreateIcon}
                  ></ImageComponent>
                  </div>
          <div className="w-100 h-100 h-pr-fl-ma ">
            <div className="w-100 h-pr-fl-ma bg-d p-20px ">
            <ContentBox className="w-100 t-a-c" subtitle="Ideal para su emprendimiento/empresa."></ContentBox>
            <Title h3="&#8599; Planes únicos" className="w-100 h-pr-fl-ma m-t-10px"></Title>
            <ContentBox className="w-100" list="Para ocasiones especiales, y/o puntualidades."></ContentBox>
            <Title h3="&#8599; Planes Mensuales" className="w-100 h-pr-fl-ma m-t-10px"></Title>
            <ContentBox className="w-100" list="Te acompañamos en todo el mes."></ContentBox>

           
           
            <Btn className="w-100 p-20px f-w-bo m-t-20px ns-bg-green " text="Ver más..." enlace="/plans/specials"></Btn>
            <ContentBox className="w-100 t-a-c m-t-5px f-w-bo " Style="font-size: 10px;">OrigenStudios.com/plans/specials</ContentBox>

            </div>
            </div>
          
        </div>
        </div>
    </div>
    </div>
  );
};



export default Plans; 