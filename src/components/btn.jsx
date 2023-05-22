import React from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";

export default function Btn(props) {
  const { text, className, enlace, textclassName, children, childrenclassName, } = props;

  return (
    <>
      
        <a href={`${enlace} `} className="w-a h-a h-pr-fl-ma d-i-f ">
          <button
            type="button"
            className={` ${className} h-pr-fl-ma w-a  default h-e-ghost-e t-02s  h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e d-i-f f-f-Gilroy `}
          >
            <div className={` ${childrenclassName} w-a h-a h-pr-fl-ma `}>{children}</div>
            <div
              className={` ${textclassName} w-a h-a h-pr-fl-ma t-a-c c-white d-i-f `}
              Style="font-size: 15px; line-height: 20px;"
            >
              {text}
            </div>
          </button>
        </a>

    </>
  );
}
