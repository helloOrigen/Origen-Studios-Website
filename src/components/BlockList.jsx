import React from "react";

import Btn from "./btn";
import ImageComponent from "./ImageComponent";
export default function BlockList(props) {
  const {
    color,
    title,
    titleclassName,
    titleStyle,
    subtitle,
    ContentBox,
    subtitleclassName,
    subtitleStyle,
    description,
    image,
    text,
    btn,
    btnLink,
    BtnOnClick,
    btnText,
    alt,
    type,
    icon,
    iconclassName,
    CardClassName,
  } = props;

  return (
    <>
      <div
        className={`w-100 h-a h-pr-fl-ma ${type} bg-d h-e b-s-b-b of-h ${CardClassName} ${color} c-p  br-w-1px br-s-solid  ns-br-r-1 m-b-10px flexbox m-d-b p-5px`}
      >
        {image && (
          <div className=" w-250px m-w-100 h-100px h-pr-fl-ma b-s-b-b p-10px of-n bg-d">
            <div className="w-100 h-a h-pr-fl-m b-s-b-b  r-v-c">
            <img
              src={` ${image} `}
              alt={` ${alt} `}
              imgcStyle="object-fit: contain;"

              className="w-100 h-100 p-5px b-s-b-b h-e-scale ns-br-r-2 of-h"
            >
          
            </img>  </div>
          </div>
        )}

        {icon && (
          <div className="w-100 h-150px h-pr-fl-ma ">
            <div className="w-100 h-150px h-pr-fl-ma b-s-b-b of-n  ">
              <img
                src={` ${icon} `}
                alt={` ${alt} `}
                className={` ${iconclassName} w-100px h-100px `}
                Style="position: absolute; margin: auto; right: 0px; left:0px; top: 0px; bottom: 0px; object-fit: cover;"
              />{" "}
            </div>
          </div>
        )}

        {ContentBox && (
          <div
            className="w-100 h-a h-pr-fl-ma p-10px"
           
          >
            {title && (
              <div
                className={`w-100 p-5px  f-f-Gilroy  ${titleclassName} `}
                Style={`font-size: 20px; line-height: 25px; ${titleStyle}`}
              >
                {title}
              </div>
            )}

            {text && (
              <div
                className={`w-100 p-5px  f-f-Gilroy  ${titleclassName}  `}
                Style={`font-size: 15px; line-height: 20px; ${titleStyle}`}
              >
                {text}
              </div>
            )}

            {subtitle && (
              <span
                className={`w-100 h-a h-pr-fl-ma p-10px t-a-c f-f-Gilroy ${subtitleclassName} ns-c-e`}
                Style={`font-size: 15px; line-height: 15px; ${subtitleStyle}`}
              >
                {subtitle}
              </span>
            )}
            {description && (
              <span className="w-90 m-t-10px h-pr-fl-ma f-f-Gilroy m-t-10px m-b-50px p-10px">
                {description}{" "}
              </span>
            )}
          </div>
        )}

        {btn && (
          <div className="w-250px flexbox m-d-b m-w-100 h-pr-fl-ma p-10px ">
            <Btn
              BtnonClick={` ${BtnOnClick} `}
              className="w-100 m-w-100 h-pr-fr-ma p-15px ns-bg-e f-w-bo "
              text={` ${btnText} `}
              enlace={` ${btnLink} `}
            ></Btn>
          </div>
        )}
      </div>
    </>
  );
}
