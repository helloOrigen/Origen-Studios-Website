import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBarLogo from "../components/navBarLogo";
import NavBarBtn from "../components/navBarBtn";
import NavSubItem from "../components/NavSubItem";
import Btn from "../components/btn";
import SearchComponent from "./SearchComponent";



const navBar = () => {
  
  return (
    <Fragment>
         {/* LOGO CENTRAL */}

       
      <div className="w-95 h-100 r-h-c h-pr-fl-ma  d-i-f" >
      <div className="w-100px m-w-200px  tab-w-200px h-pr-fl-ma h-a  b-s-b-b" Style="z-index: 30;">
        <Link to="/">
          <NavBarLogo   />
        </Link>
        </div>
      <div className="w-100  h-pr-fl-ma  r-v-c f-w-n-w h-70px tab-d-n ">
      <Link to="/">
          <NavBarBtn className=" m-d-n noselect" text={"Inicio"}></NavBarBtn>
        </Link>
        <Link to="/team">
          <NavBarBtn className="m-d-n noselect" text={"Nosotros"}>
           {/*    <NavSubItem text="Equipo" enlace=""></NavSubItem>
            <NavSubItem text="História" enlace=""></NavSubItem>
            <NavSubItem text="Propósito" enlace=""></NavSubItem>
            <NavSubItem text="Experiencia" enlace=""></NavSubItem>
            <NavSubItem text="Sponsors" enlace=""></NavSubItem>*/}
          </NavBarBtn>
        </Link>
        
        <Link  to="/services">
           
          <NavBarBtn className="m-d-n noselect" text={"Servicios"}></NavBarBtn>
         
        </Link>
    {/*     <Link  to="/services">
           
           <NavBarBtn className="m-d-n noselect" text={"Soluciones"}>
           <NavSubItem text="Generación IA" enlace=""></NavSubItem>
             <NavSubItem text="Streaming & Cast" enlace=""></NavSubItem>
             <NavSubItem text="Identidad Gráfica" enlace=""></NavSubItem>
             <NavSubItem text="Contenido para redes" enlace=""></NavSubItem>
             <NavSubItem text="Anuncios Publicitarios" enlace=""></NavSubItem>
             </NavBarBtn>
          
         </Link>*/}

        <Link to="/plans">
           
          <NavBarBtn className="m-d-n noselect" text={"Planes"}>
          <NavSubItem text="Planes de Identidad" enlace="/plans/identity" className="ns-bg-darkgreen c-white"></NavSubItem>
            <NavSubItem text="Planes de Contenidos" enlace="/plans/contents" className="ns-bg-blue c-white"></NavSubItem>



          </NavBarBtn>
        </Link>
        
         <Link to="/tools"><NavBarBtn className="m-d-n noselect" text={"Herramientas"}>
      


  
            </NavBarBtn></Link> 
       
        <Link to="/promo"><NavBarBtn className="m-d-n noselect" text={"Promos"} news></NavBarBtn></Link>
        </div>

      {/*  <div className="w-a  h-pr-fl-ma bg-green r-v-c f-w-n-w h-70px tab-d-n ">
<SearchComponent></SearchComponent>
        </div> */}






   {/* BOTON CONTACTO */}
   <div className="w-30 m-d-n h-pr-fl-ma h-100 tab-d-n">
    <div className="w-a h-a h-pr-fr-ma r-v-c ">
   <Btn className="w-200px h-pr-fr-ma  p-l-20px p-r-20px p-10px  f-w-bo  br-s-solid br-c-white br-r-50px" enlace="https://wa.me/message/QEHFJE3NEAVTE1" text="Contacto"></Btn>
   </div>
          </div>
         {/*  <BtnModal></BtnModal> */}
      </div>
    </Fragment>
  );
};

export default navBar;
