import React from "react";
import "../Styles/seed.css";
import ContentBox from "./contentBox";
import Btn from "./btn";

export default function Card(props) {
  const {
    title,
    subtitle,
    image,
    alt,
    type,
    filename,
    filetype,
    filesize,
    btndownload,
    activeoptions,
    icon,
    CardClassName,

  } = props;

  return (
    <>
      <div className={` ${CardClassName} ${type} card h-e `}>
        {image && (
   <div className="w-100 h-100  b-s-b-b of-n">
          <img
            src={` ${image} `}
            alt={` ${alt} `}
            className="w-100 h-100 h-pr-fl-ma h-e-scale "
            Style="object-fit: cover;"
          /> </div>
        )}
      
  
         
             {icon && (
                    <div className="w-100 h-150px h-pr-fl-ma ">
   <div className="w-100 h-150px   h-pr-fl-ma b-s-b-b of-n ">
          <img
            src={` ${icon} `}
            alt={` ${alt} `}
            className="w-100px h-100px  centered h-pr-fl-ma  "
            Style="object-fit: cover;"
          /> </div>
                 </div>
        )}
     

          {title && <ContentBox title={` ${title} `}> </ContentBox>}
          {subtitle && <ContentBox subtitle={` ${subtitle} `}> </ContentBox>}
{activeoptions && (     <div className=" h-pr-fl-ma card-h-opt bg-black-node-o-50 br-r-5px f-f-Gilroy  " Style="z-index: 100;">
          <div
            className="w-100 h-a h-pr-fl-ma b-s-b-b "
            Style="font-size: 12px;"
          >
            
            <div className="w-100 h-100 h-pr-fl-ma b-s-b-b">
            <div className="w-100 h-a h-pr-fr-ma p-5px">
              <div className="w-a h-a h-pr-fr-ma flexbox">
              <Btn className="m-r-10px">HazteSponsor</Btn>
              <Btn>DESCARGAR</Btn></div>
            </div>     </div> </div>
            <div className="w-100 h-a bg-black br-r-10px flexbox p-5px f-f-Gilroy h-pr-fr-ma b-s-b-b ns-f-s-small">

              <div className="w-a h-a h-pr-fl-ma p-5px">
              <div className="h-pr-fl-ma  l-h-10px   f-w-bo ">
                {" "}
                Nombre del archivo:
              </div>{" "}
              <br />
              <div className="h-pr-fl-ma l-h-15px   f-w-bo ns-c-e">
                {filename}
              </div>{" "}
              </div>

              <div className="w-a h-a h-pr-fl-ma p-5px">
              <div className="h-pr-fl-ma l-h-10px   f-w-bo ">
                Formato:
              </div>{" "}
              <br />
              <div className="h-pr-fl-ma l-h-15px   f-w-bo ns-c-e">
                {filetype}
              </div></div>{" "}
              

              <div className="w-a h-a h-pr-fl-ma p-5px">
              <div className=" h-pr-fl-ma  l-h-10px   f-w-bo ">
                Tamaño:
              </div>{" "}
              <br />
              <div className="h-pr-fl-ma l-h-15px   f-w-bo ns-c-e">
                {filesize}
             </div>{" "}
             </div>
            </div>
          </div> )}
       
         
   
      </div>
    </>
  );
}
