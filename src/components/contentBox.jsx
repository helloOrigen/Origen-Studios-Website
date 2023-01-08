import React, { Fragment } from "react";

import "../Styles/seed.css";

export default function contentBox(props) {
  const { title, subtitle, text, className, children } = props;

  return (
    <Fragment>
      <div className={` ${className} h-pr-fl-ma w-100 h-100 b-s-b-b bg-red f-f-Gilroy`}>
        PRUEBA
      { title && <div className="h-pr-fl-ma b-s-b-b w-100 h-a" Style="font-size: 25px; line-height: 30px; color: white;"> {title} Hola</div> }
      { subtitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a" Style="font-size: 15px; line-height: 20px; color: #777777;"> {subtitle}</div> }
      { text && <div className="h-pr-fl-ma b-s-b-b w-100 h-a"  Style="font-size: 15px; line-height: 20px; color: white;"> {text}</div> }

        {children}
      </div>
    </Fragment>
  );
}
