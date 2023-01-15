import React, { Fragment } from "react";

import "../Styles/seed.css";

export default function contentBox(props) {
  const { title, subtitle, text, className, note, action, link, Style, children } = props;

  return (
    <Fragment>
      <div className={` ${className} h-pr-fl-ma w-a h-a b-s-b-b t-o-e f-f-Gilroy`} Style={` ${Style}`}>
        
      { title && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;"> {title}</div> }
      { subtitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 15px; font-weight:bold; line-height: 20px; color: #666666;"> {subtitle}<br/><br/></div> }
      { text && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"  Style="font-size: 15px; line-height: 20px; color: white;"> {text}</div> } 
      { note && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy m-t-10px"  Style="font-size: 10px; line-height: 15px; color: white;  font-style: italic;"> {note}</div> }
        {children}
      { action && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy  m-t-10px "  Style="font-size: 10px; line-height: 15px; color: white;"><a href={`${link}`}><span className="hover-underline-animation">{action}</span></a></div> }
      </div>
    </Fragment>
  );
}
