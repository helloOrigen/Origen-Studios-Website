import React from "react";
import "../Styles/seed.css";
import Infocircle from "../assets/icons/info.svg";
export default function Info(props) {
  const { title, text, className,} = props;

  return (
    <>

<div
          className={` ${className} w-100 h-a h-pr-fl-ma d-i-f   p-20px b-s-b-b `}
          Style="border-left: 3px solid; border-color: #0096ff; background: rgba(0,150,255,0.2); "
        >
             <div className="w-80px h-a h-pr-fl-ma b-s-b-b">
          <div className="w-and-h-50px r-h-c h-pr-fl-ma b-s-b-b">
            
            <img
            alt="Infoicon"
              className="w-100 h-100 h-pr-fl-ma r-h-c"
              Style="object-fit: contain;"
              src={Infocircle}
            />{" "}
          </div></div>
          <div className="w-100 h-a h-pr-fl-ma  b-s-b-b">
          <div className="w-100 p-10px " Style="font-style: italic;" >{title}</div>
            <div
              className="w-100 p-10px"
             
            >{text}</div>
          </div>
        </div>   
        
        </>
  );
}
