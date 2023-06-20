import React from "react";
import BlockList from "../../components/BlockList";
import OSLogotipo from "../../assets/logo/OS-logotipo-m-white-transparent_svg.svg";
import Title from "../../components/title";
export default function TLVAITools(props) {
  return (
    <>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a  bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title className="ns-c-e " h2="&#129150; Herramientas IA"></Title>
       
      </div>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b  m-b-10px  ">
        <Title h4="&#129150; Procesamiento del lenguaje natural"></Title>
      </div>
      <BlockList
          ContentBox
          image
          btn
          image={OSLogotipo}
          title="CHATGPT-OPENAI"
          text="ChatGPT Es la Inteligencia Artificial más potente y reconocida a nivel internacional, con ella puedes crear desde guiones, mejorar tus emails, generar ideas de contenidos y muchisimo más..."
          btnText="Visitar"
        ></BlockList>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title h3="Análisis de datos"></Title>
      </div>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title h3="Visión por computadora"></Title>
      </div>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title h3="Chatbots"></Title>
      </div>

      
    </>
  );
}
