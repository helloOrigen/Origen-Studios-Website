import React from "react";
import "../Styles/seed.css";
import ContentBox from "./contentBox";
import Btn from "./btn";

export default function Card(props) {
  const {
    title,
    subtitle,
    description,
    image,
    btn,
    btnLink,
    btnText,
    alt,
    type,
    cardCategory,
    filename,
    filetype,
    filesize,
    list,
    activeoptions,
    icon,
    CardClassName,
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7,
    list8,
    list9,
    list10,
    list11,
    list12,
  

  } = props;

  return (
    <>
      <div className={` ${CardClassName} ${type} card h-e  b-s-b-b bg-black-node-o-50 ns-br-r-1 of-h  `}>
      {cardCategory && ( 
        
    
          <div className="w-80  f-f-Gilroy ns-f-s-normal  bg-black t-a-c p-b-2px ">{cardCategory}
         
          </div>
       ) }


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
          {description && <div className="w-90  t-a-c f-f-Gilroy m-b-10px" >{description} </div>}
          {list && <div className=" w-90 f-f-Gilroy m-b-10px ns-f-s-normal "  >  {list1 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list1}</li>}
          {list2 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list2}</li>}
           {list3 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list3}</li>}
           {list4 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list4}</li>}
           {list5 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list5}</li>}
           {list6 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list6}</li>}
           {list7 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list7}</li>}
           {list8 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list8}</li>}
           {list9 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list9}</li>}
           {list10 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list10}</li>}
           {list11 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list11}</li>}
           {list12 && <li  Style="display: flex; align-items: baseline;"> <span Style="margin-right: 10px;">&#8226;</span>{list12}</li>}  
           
 
 </div>}


{activeoptions && (     <div className=" h-pr-fl-ma card-h-opt  bg-black-node-o-50 br-r-5px f-f-Gilroy  " Style="z-index: 120;">
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
       
       
          {btn &&  <div className="h-pr-fl-ma m-20px">
          <Btn
                  className="h-pr-fr-ma "
                  text={` ${btnText} `}
                  enlace={` ${btnLink} `}
                ></Btn>
             </div>
           }
   
      </div>
    </>
  );
}
