import React, { Fragment } from "react";

import "../Styles/seed.css";

export default function contentBox(props) {
  const { title, subtitle, text, textclassName, className, note, noteclassName, action, link, Style, intitle, category, children } = props;

  return (
    <Fragment>
      <div className={` ${className} h-pr-fl-ma w-a h-a b-s-b-b t-o-e f-f-Gilroy`} Style={` ${Style}`}>
        
      { title && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;">{title}</div> }
      { subtitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy ns-c-e" Style="font-size: 15px; font-weight:bold; line-height: 20px;"> {subtitle}<br/><br/></div> }
      { intitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;"><div className="h-pr-fl-ma w-a h-a ">{title}</div>{ intitle && <div className="h-pr-fl-ma b-s-b-b w-a h-a f-f-Gilroy " Style="font-size: 15px; line-height: 20px; font-style: italic; color: white;">{intitle}</div> }</div> }
      { category && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="border-bottom: 1px solid; border-color: white;"><div className="w-100 h-a h-pr-fl-ma t-a-r f-w-bo p-l-10px p-r-10px ns-c-e " Style=" font-size:10px; line-height: 15px; ">{category}</div></div> } 
      { text && <div className={` ${textclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}  Style="font-size: 15px; line-height: 20px; "> {text}</div> } 
      { note && <div className={` ${noteclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}  Style="font-size: 10px; line-height: 15px;  font-style: italic;">{note}</div> }
        {children}
      { action && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy  m-t-10px "  Style="font-size: 10px; line-height: 15px; color: white;"><a href={`${link}`}><span className="hover-underline-animation">{action}</span></a></div> }

      </div>
    </Fragment>
  );
}
