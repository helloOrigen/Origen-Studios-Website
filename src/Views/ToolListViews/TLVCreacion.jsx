import React from "react";
import BlockList from "../../components/BlockList";

import CapCut from "../../assets/images/tools/capcut.jpg";
import Canva from "../../assets/images/tools/canva.jpg";
import ILoveIMG from "../../assets/images/tools/iloveimg.jpg";
import Squoosh from "../../assets/images/tools/squoosh.jpg";

import Title from "../../components/title";
export default function TLVCreacion(props) {
  return (
    <>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a  bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title className="ns-c-e " h2="&#129150; Creación y edición"></Title>
       
      </div>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b  m-b-10px  ">
        <Title h4="&#129150; Para videos"></Title>
      </div>
      <BlockList
          ContentBox
          image
          btn
          image={CapCut}
          title="CapCut"
          text="Es una de las herramientas onlinemás potentes para la edición de videos, incluye efectos de transición, filtros, animaciones automatizadas y un sin fin de herramientas profesionales totalmente gratis."
          btnText="Visitar"
        ></BlockList>
        <BlockList
          ContentBox
          image
          btn
          image={Canva}
          title="Canva"
          text="Es una de las herramienta multifuncional "
          btnText="Visitar"
        ></BlockList>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b  m-b-10px  ">
        <Title h4="&#129150; Para imágenes"></Title>
      </div>
      <BlockList
          ContentBox
          image
          btn
          image={ILoveIMG}
          title="ILoveIMG"
          text="Es una de las herramienta multifuncional para  "
          btnText="Visitar"
        ></BlockList>
          <BlockList
          ContentBox
          image
          btn
          image={Squoosh}
          title="Sqoosh"
          text="Es una de las herramienta multifuncional para  "
          btnText="Visitar"
        ></BlockList>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title h3="Visión por computadora"></Title>
      </div>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title h3="Chatbots"></Title>
      </div>

      
    </>
  );
}
