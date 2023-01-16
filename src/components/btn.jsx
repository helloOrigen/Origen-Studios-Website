import React from "react";
import "../Styles/seed.css";

export default function Btn(props) {
  const { text, className,enlace, children } = props;

  return (
    <>
      <div
        className={` ${className} h-pr-fl-ma w-a  h-a p-5px h-e c-p  b-s-b-b ns-c-f-1 c-p h-e hover-underline-animation d-i-f `} Style="border: 1px solid; border-color: white;"
      >     <a href={enlace} className="w-a h-a h-pr-fl-ma d-i-f">
      <div className="w-a h-a h-pr-fl-ma ">{children}</div>
        <div
          className="w-a h-a h-pr-fl-ma t-a-c c-white d-i-f"
          Style="font-size: 15px; line-height: 20px;"
        >

            {text}
           
        </div>  </a>
      </div>
    </>
  );
}
