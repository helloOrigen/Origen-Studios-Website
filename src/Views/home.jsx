import React, { Fragment,useRef,useState,useEffect } from "react";
import Btn from "../components/btn";
import ContentBox from "../components/contentBox";
import MessageWriting from "../assets/icons/message_writing.svg";
import images from "../images";
import "../Styles/seed.css";
import "../Styles/home.css";
import {motion} from "framer-motion"; 
export default function Home() {
  const[width,setWidth]= useState(0);
  const carrousel = useRef();
  useEffect(()=>{
    setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
},[]);
  return (
    <>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b flexbox">
        <div className="m-w-100 w-50 h-100  b-s-b-b  p-r-10px " Style="z-index: 2000;">
          <div className="w-100 h-a h-pr-fl-ma r-v-c b-s-b-b">
          
            <h1
              className="f-f-Gilroy c-white h-pr-fl-ma r-v-c h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 50px; line-height: 55px;"
            >
              <b>Le damos la bienvenida...</b>{" "}
            </h1>
            <h1
              className="f-f-Gilroy c-white h-pr-fl-ma  r-v-c h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 25px; line-height: 30px;"
            >
              <b>Se encuentra en el origen de su nueva marca.</b>
            </h1>

            
            <div className="w-100 h-a h-pr-fl-ma m-b-20px ">
            <div className="w-a h-a h-pr-fl-ma "><div className="w-a h-a h-pr-fl-ma p-l-10px "> 
              <Btn className="" text="Coordinar ahora"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
                  src={MessageWriting}
                  className="w-100 h-100 h-pr-fl-ma"
                  Style="stroke: #ffffff !important;"
                  alt="Coordinar"
                /></div></Btn>
          </div></div><div className="w-a h-a h-pr-fl-ma a-i-c">
            <ContentBox
                className="h-pr-fl-ma w-a h-a p-l-10px m-t-10px "
                subtitle={"Coordine una reunión y comience su marca hoy mismo!"}
                
              /></div>
          <div className="w-100 h-pr-fl-ma h-20px p-t-20px p-r-20px">
          <div className="w-80 h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider "></div></div></div>
         
          </div>
        </div>
        <div className="m-d-n w-50 h-100 b-s-b-b h-pr-fl-ma ">
          <motion.div  ref={carrousel} className=" carrousel w-100 h-100 h-pr-fl-ma  b-s-b-b ">
            <motion.div drag="x" dragConstrains={{right:0,left:-width}} className="inner-carrousel">
              {images.map(image=>{
                return(<motion.div className="item">
                  <img src={image} alt="OS"/>
                </motion.div>)
              })}
            </motion.div>
          </motion.div>


        </div>
      </div>
    </>
  );
}
