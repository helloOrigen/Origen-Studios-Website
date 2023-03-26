import React, { Fragment,useState } from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";
import OSLogotipo from '../assets/logo/OS-logotipo-m-white-transparent_svg.svg';
import CloseHamburger from "../assets/icons/close.svg";

import MenuHamburger from "../assets/icons/menu_hamburger.svg";
const Footer=({className})=> {
  const [open, setOpen] = useState(false);

   const handleOpen =()=>{
    setOpen(!open)
   }
  
  return (
    <Fragment>
      <div className={` ${className} h-pr-fl-ma w-80  h-100  b-s-b-b f-f-Gilroy `}>
        {/* Footer */}
       
        <div
          className="w-100    r-h-c h-100 h-pr-fl-ma b-s-b-b "
          Style="font-size: 10px; color: white; line-height: 15px; "
        > {/* Block 1 --------------- */}
          <div className="noselect w-80 m-d-n w-80 h-100 flexbox b-s-b-b h-pr-fl-ma ">
         
            {/* Bloque 1 - 25% height */}
            <div  className="w-a h-a h-pr-fl-ma noselect ">
            <b>
              OrigenStudios<sup Style="font-size:75%;  top: -0.28em;">®</sup>
            </b>
            &zwj;&nbsp;Somos&zwj;&nbsp;&zwj;el&zwj;&nbsp;&zwj;origen&zwj;&nbsp;&zwj;de&zwj;&nbsp;&zwj;su&zwj;&nbsp;&zwj;marca.
   
            </div>
     
            {/* Bloque 2 - 25% height */}
            <div className="w-a h-a h-pr-fl-ma noselect  hover-underline-animation">
            <Link className="w-a h-a  h-pr-fl-ma" to="/jobs">
             
              2023&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;©&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;Todos&nbsp;&zwj;los&nbsp;&zwj;derechos&nbsp;&zwj;reservados.
             
            </Link> 
            </div>

              {/* Block 3 --------------- */}
           
              <div className="w-a h-a h-pr-fl-ma noselect hover-underline-animation">
              <a className="h-pr-fl-ma w-a h-a"
              href="mailto:hello@origenstudios.com"
              alt="Comuníquese con nosotros!"
            >hello@origenstudios.com  </a>
              </div>
           


        {/* Block 4 --------------- */}
              <div className="w-a h-a h-pr-fl-ma noselect hover-underline-animation">
              <Link className="w-a h-a h-pr-fl-ma" to="/privacy">Políticas & Términos.</Link>
              </div>
            </div>
     

 {/* Block 5 DESKTOP ONLY --------------- */}
 <div  className="noselect m-d-n w-20 h-100 b-s-b-b h-pr-fl-ma ">
             

          <div className="h-pr-fr-ma w-100 h-100 t-1s b-s-b-b">
          <div className="h-pr-fl-ma w-100 h-35px "> 
            <img className=" h-80  h-pr-fr-ma  draw r-v-c" Style="object-fit: cover;  width: 170px;" src={OSLogotipo}  alt="OS-LOGOTIPO"/></div></div>
           </div>
{/* --------------- Block 5*/}
          
         

          {/* MOBILE ONLY */}
           {/* Block 5 --------------- */}
          <div  className="d-n m-d-b w-80  h-100  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px t-a-l">
        
            {/* Bloque 2 - 25% height */}
   
        <div className="w-50 h-pr-fl-ma " Style="color: white;">
        <b>
              OrigenStudios<sup Style="font-size:75%;  top: -0.28em;">®</sup> - 2023
            </b><br />
            &zwj;&nbsp;Somos&zwj;&nbsp;&zwj;el&zwj;&nbsp;&zwj;origen&zwj;&nbsp;&zwj;de&zwj;&nbsp;&zwj;su&zwj;&nbsp;&zwj;marca.
        </div>
  
        <div className="w-50 h-pr-fl-ma " Style="color: white;">

              <span className=" noselect  hover-underline-animation">
              <Link to="/"> Mapa de sitio.     </Link>
              </span>
            <br />
              <span className=" noselect  hover-underline-animation">
              <Link to="/jobs">
                Políticas & Términos.
                </Link>
            </span>
            </div>
          </div>{/* --------------- Block 5 */}

          {/* Hamburger Menu Button --------------- */}
          
          {!open?(<div
            className="d-n m-d-b w-20  h-100  b-s-b-b h-pr-fl-ma p-l-10px t-a-l"
            Style="z-index: 99999999;"
          >
            <div className="w-and-h-50px h-pr-fr-ma h-e c-p">
             <label for="menu" className="w-100 h-100 h-pr-fl-ma">             <img
              src={MenuHamburger}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Menu"
              onClick = {handleOpen}
            /> </label>
            </div>
         </div> ):(<div
            className="d-n m-d-b w-20  h-100  b-s-b-b h-pr-fl-ma p-l-10px t-a-l"
            Style="z-index: 99999999;"
          >
            <div className="w-and-h-50px  h-pr-fr-ma h-e c-p">
             <label for="menu" className="w-100 h-100 h-pr-fl-ma">             <img
              src={CloseHamburger}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Menu"
              onClick = {handleOpen}

            /> </label>
            </div>
          </div>)}
          
          
          {/* -------------- Hamburger Menu Button */}
        </div>
    
        </div>
    </Fragment>
  );
}
export default Footer
