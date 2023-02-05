import React from "react";
import "../Styles/seed.css";

export default function navBarBtn(props) {
  const { text, className, children, news } = props;

  return (
    <>
      <div
        className={` ${className} h-pr-fl-ma w-a h-100  p-10px h-e c-p  b-s-b-b `}
      >
        <div className="w-a h-a noselect h-pr-fl-ma flexbox r-v-c f-w-n-w">
        
        <div
          className="t-a-c f-f-Gilroy noselect c-white h-e-style hover-underline-animation"
          Style="font-size: 15px; line-height: 20px;"
        >
          <a href="" className="h-e c-p">
            {text}
            {children}
            
          </a>
        </div>
        {news && ( <div className="w-a h-15px noselect m-l-5px m-t-4px p-l-5px p-r-5px p-t-3px h-pr-fl-ma f-f-Gilroy c-white  ns-f-s-small ns-bg-e f-w-bo ghost">NUEVO</div> )}
        </div>
      </div>
    </>
  );
}
