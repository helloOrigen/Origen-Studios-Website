import React, { Fragment } from "react";
import contentBox from "../components/contentBox";

import "../Styles/seed.css";
export default function Services(props) {
    const { children } = props;

    return (
        <>
            <div className="w-100 h-100 h-pr-fl-ma b-s-b-b">
                <div className="w-50 h-100 h-pr-fl-ma b-s-b-b bg-orange">
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                </div>

                <div className="w-50 h-100 h-pr-fl-ma b-s-b-b bg-blue">
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                <div Style="border: 1px solid; border-color: white;" className="w-50 h-50 h-pr-fl-ma b-s-b-b">
                    <contentBox title={"Titulo"} subtitle={"Subtitulo 1"} text={"Texto de descripción"}/></div>
                </div>
                 {children}
            </div>
        </>
    );
}
