import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";

import "../Styles/seed.css";
export default function Services(props) {
    const { children } = props;

    return (
        <>
            <div className="w-100 h-100 h-pr-fl-ma b-s-b-b ">
                <div className="w-50 h-100 h-pr-fl-ma b-s-b-b bg-black">
                    <div  className="w-50 h-50 h-pr-fl-ma b-s-b-b p-r">
                        <ContentBox title={"Diseño Gráfico"} subtitle={"Su nueva imagen de marca."} text={"Ofrecemos todo lo necesario para crear su \u00A0 marca desde cero, remodelar la que ya tiene o hacerla despegar hasta las nubes.\u00A0 Click aquí para saber más sobre este servicio.Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad. " }/></div>
                    <div  className="w-50 h-50 h-pr-fl-ma b-s-b-b p-r">
                        <ContentBox title={"Desarrollo"} subtitle={"La tecnología de su lado."} text={"Ofrecemos su propio espacio digital, \u00A0 actualizado  con las mejores tecnologías del mercado, un kit específico para ser la envídia de su competencia.\u00A0  Click aquí para saber más sobre este servicio.\u00A0 Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} /></div>

                </div>

                <div className="w-50 h-100 h-pr-fl-ma b-s-b-b bg-black">
                    <div S className="w-50 h-50 h-pr-fl-ma b-s-b-b p-r">
                        <ContentBox title={"Marketing"} subtitle={"Metas inteligentes, resultados..."} text={"Ofrecemos posicionar su marca en la primer elección de sus clientes, le acompañamos en la promoción y le asesoramos en sus objetivos.\u00A0 Click aquí para saber más sobre este servicio.\u00A0 Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} /></div>
                    <div  className="w-50 h-50 h-pr-fl-ma b-s-b-b p-r">
                        <ContentBox title={"Asesoría"} subtitle={"Solo le enseñamos su potencial."} text={"Un grupo de expertos le asesorarán en lo que usted necesita para lograr todas sus metas.\u00A0  Este servicio es exclusivo para miembros del club GOLD.\u00A0 Click aquí para saber más sobre este servicio.\u00A0 Coordine ahora mismo una reunión sin costo y descubra planes ajustables a su necesidad."} /></div>

                </div>
                {children}
            </div>
        </>
    );
}
