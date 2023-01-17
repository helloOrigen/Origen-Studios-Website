import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";

import "../Styles/seed.css";
export default function Services(props) {
    const { children } = props;

    return (
        <>
            <div className="w-100 h-100 h-pr-fl-ma b-s-b-b of-auto ">
                <div className="m-w-100 m-h-auto w-50 h-100 h-pr-fl-ma b-s-b-b ">
                    <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className="w-100 h-a r-v-c" title={"Diseño Gráfico"} subtitle={"Su nueva imagen de marca."} text={"Ofrecemos todo lo necesario para crear su marca desde cero, remodelar la que ya tiene o hacerla despegar hasta las nubes.\u00A0    " } note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."}  /></div>
                    <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className="w-100 h-a r-v-c" title={"Desarrollo"} subtitle={"La tecnología de su lado."} text={"Ofrecemos su propio espacio digital, \u00A0 actualizado  con las mejores tecnologías del mercado, un kit específico para ser la envídia de su competencia.\u00A0     &#013; "} note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."}  /></div>
                        <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className="w-100 h-a r-v-c" title={"Fotografía"} subtitle={"Su nueva imagen de marca."} text={"Ofrecemos todo lo necesario para crear su \u00A0 marca desde cero, remodelar la que ya tiene o hacerla despegar hasta las nubes.\u00A0    " } note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."} /></div>
                    <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className="w-100 h-a r-v-c" title={"Testing"} subtitle={"La tecnología de su lado."} text={"Ofrecemos su propio espacio digital, \u00A0 actualizado  con las mejores tecnologías del mercado, un kit específico para ser la envídia de su competencia.\u00A0    \u00A0 "} note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."}  /></div>


                </div>

                <div className="m-w-100 m-h-auto w-50 h-100 h-pr-fl-ma b-s-b-b ">
                    <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className="w-100 h-a r-v-c" title={"Marketing"} subtitle={"Metas inteligentes, resultados..."} text={"Ofrecemos posicionar su marca en la primer elección de sus clientes, le acompañamos en la promoción y le asesoramos en sus objetivos.\u00A0   \u00A0 "} note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."}  /></div>
                    <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className="w-100 h-a r-v-c" title={"Asesoría"} subtitle={"Solo le enseñamos su potencial."} text={"Un grupo de expertos le asesorarán en lo que usted necesita para lograr todas sus metas.\u00A0  Este servicio es exclusivo para miembros del club GOLD.\u00A0   \u00A0 "} note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."}  /></div>
                        <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className="w-100 h-a r-v-c" title={"Traducción"} subtitle={"Su nueva imagen de marca."} text={"Ofrecemos todo lo necesario para crear su \u00A0 marca desde cero, remodelar la que ya tiene o hacerla despegar hasta las nubes.\u00A0    " } note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."} /></div>
                    <div  className="m-w-100 w-50 h-50 h-pr-fl-ma b-s-b-b p-r p-20px">
                        <ContentBox link={"enlace accion"} className=" w-100 h-a r-v-c" title={"Gestión comercial"} subtitle={"La tecnología de su lado."} text={"Ofrecemos su propio espacio digital, \u00A0 actualizado  con las mejores tecnologías del mercado, un kit específico para ser la envídia de su competencia.\u00A0    \u00A0 "} note={" Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} action={"Click aquí para saber más sobre este servicio."}  /></div>


                </div>
                {children}
            </div>
        </>
    );
}
