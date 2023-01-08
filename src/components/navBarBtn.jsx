import React from "react";
import "../Styles/seed.css";

export default function navBarBtn(props) {
  const { text, className, children } = props;

  return (
    <>
      <div
        className={` ${className} h-pr-fl-ma w-a h-100  p-10px h-e c-p  b-s-b-b ns-c-f-1`}
      >
        <div
          className="t-a-c f-f-Gilroy r-v-c c-white "
          Style="font-size: 15px; line-height: 20px;"
        >
          <a href="" className="h-e c-p">
            {text}
            {children}
            <span className="h-e-sub-line"></span>
          </a>
        </div>
      </div>
    </>
  );
}
