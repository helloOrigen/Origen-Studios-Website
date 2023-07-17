import React from "react";
import BlockList from "../../components/BlockList";

import CapCut from "../../assets/images/tools/capcut.jpg";
import Canva from "../../assets/images/tools/canva.jpg";
import ILoveIMG from "../../assets/images/tools/iloveimg.jpg";
import Squoosh from "../../assets/images/tools/squoosh.jpg";
import WordPress from "../../assets/images/tools/wordpress.jpg";
import Wix from "../../assets/images/tools/wix.jpg";

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
        text="Es una de las herramientas online más potentes para la edición de videos, incluye efectos de transición, filtros, animaciones automatizadas y un sin fin de herramientas profesionales totalmente gratis."
        btnText="Visitar"
        btnLink="https://www.capcut.com/es-es/"
      ></BlockList>
      <BlockList
        ContentBox
        image
        btn
        image={Canva}
        title="Canva"
        text="Es una de las herramientas multifuncionales para diseño gráfico, presentaciones y más."
        btnText="Visitar"
        btnLink="https://www.canva.com/"
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
        text="Es una herramienta multifuncional para editar imágenes, convertir formatos, comprimir y mucho más."
        btnText="Visitar"
        btnLink="https://www.iloveimg.com/"
      ></BlockList>
      <BlockList
        ContentBox
        image
        btn
        image={Squoosh}
        title="Sqoosh"
        text="Sqoosh es una herramienta en línea para comprimir imágenes y optimizar su tamaño sin perder calidad."
        btnText="Visitar"
        btnLink="https://squoosh.app/"
      ></BlockList>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title h3="Crear sitios web"></Title>
      </div>
      <BlockList
  ContentBox
  image
  btn
  image={WordPress}
  title="WordPress"
  text="La plataforma de creación de sitios web más popular del mundo, fácil de usar y altamente personalizable."
  btnText="Visitar"
  btnLink="https://wordpress.com/"
></BlockList>

<BlockList
  ContentBox
  image
  btn
  image={Wix}
  title="Wix"
  text="Crea tu propio sitio web con herramientas intuitivas y plantillas modernas, sin necesidad de saber programación."
  btnText="Visitar"
  btnLink="https://www.wix.com/"
></BlockList>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title h3="Chatbots"></Title>
      </div>
    </>
  );
}
