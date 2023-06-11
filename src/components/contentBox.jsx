import React, { Fragment } from "react";

import "../Styles/seed.css";

export default function contentBox(props) {
  const {
    title,
    titleclassName,
    subtitle,
    subtitleclassName,
    text,
    textclassName,
    className,
    note,
    noteclassName,
    action,
    actionclassName,
    link,
    number,
    numberclassName,
    Style,
    intitle,
    intitleclassName,
    category,
    categoryclassName,
    children,
  } = props;

  return (
    <Fragment>
      <div
        className={` ${className} h-pr-fl-ma w-a h-a b-s-b-b t-o-e f-f-Gilroy`}
        Style={` ${Style}`}
      >       
        {title && (
          <h2
            className={` ${titleclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy d-i `} 
            Style=" font-size: 25px; font-weight: bold; line-height: 30px; " 
          >
            {number && ( <div className={` ${numberclassName} m-b-10px h-pr-fl-ma ns-c-e w-and-h-30px t-a-c b-s-b-b of-h t-a-c m-r-10px `} Style="font-size: 13px; border: 1px solid; border-radius: 100%; border-color: white;"><div className="w-a h-a centered h-pr-fl-ma">{number}</div></div>        )} <div>{title}</div>
          </h2>
        )}
        {subtitle && (
          <h3
            className={` ${subtitleclassName} h-pr-fl-ma b-s-b-b w-100 ns-c-e h-a f-f-Gilroy`}
            Style=" font-size: 15px; font-weight:bold; line-height: 20px;"
          >
             
            {subtitle}
            <br />
            <br />
        
          </h3>
          
        )}
      
   
             {intitle && (
          <div
            className={` ${intitleclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            Style=" font-size: 15px; line-height: 20px; font-style: italic; color: white;"
          >
                {intitle}
              </div>
            )}
     
        {category && (
          <div
            className={` ${categoryclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            Style="border-bottom: 1px solid; border-color: white;"
          >
            <span
              className="w-100 h-a h-pr-fl-ma t-a-r f-w-bo p-l-10px p-r-10px ns-c-e "
              Style=" font-size:10px; line-height: 15px; "
            >
              {category}
            </span>
          </div>
        )}
        {text && (
          <p
            className={` ${textclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            Style="font-size: 15px; line-height: 20px; "
          >
             
            {text}
          </p>
        )}
        {note && (
          <span
            className={` ${noteclassName} ns-c-e h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            Style="font-size: 10px; line-height: 15px;  font-style: italic;"
          >
            {note}
          </span>
        )}
        {children}
        {action && (
          <span
            className={` ${actionclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy  m-t-10px `}
            Style="font-size: 10px; line-height: 15px; color: white;"
          >
            <a href={`${link}`}>
              <span className="hover-underline-animation">{action}</span>
            </a>
          </span>
        )}
      </div>
    </Fragment>
  );
}