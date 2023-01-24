import React, { Fragment } from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";
import OSLogotipo from '../assets/logo/OS-logotipo-m-white-transparent_svg.svg';

import MenuHamburger from "../assets/icons/menu_hamburger.svg";
export default function Footer(props) {
  const { className } = props;

  return (
    <Fragment>
      <div className={` ${className} h-pr-fl-ma w-80  h-100 m-h-80 b-s-b-b  `}>
        {/* Footer */}
       
        <div
          className="w-100 r-h-c h-100 h-pr-fl-ma b-s-b-b d-i-f "
          Style="font-size: 10px; color: white; line-height: 15px; "
        > {/* Block 1 --------------- */}
          <div className="m-d-n w-25  h-100  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px">
          <div className="p-t-10px w-100 m-d-n">&nbsp;</div>
            {/* Bloque 1 - 25% height */}
            <b>
              OrigenStudios<sup Style="font-size:75%;  top: -0.28em;">®</sup>
            </b>
            &zwj;&nbsp;Company
            <br />
            2023&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;©&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;Todos&nbsp;&zwj;los&nbsp;&zwj;derechos&nbsp;&zwj;reservados.
            <br />
            <a
              href="mailto:hello@origenstudios.com"
              alt="Comuníquese con nosotros!"
            >
              <span className="hover-underline-animation">
                hello@origenstudios.com
              </span>
            </a> 
            <br />
            Montevideo, Uruguay.
          </div>
          {/* --------------- Block 1 */}
          {/* Block 2 --------------- */}
          <div className="m-d-n w-20 h-100   b-s-b-b h-pr-fl-ma p-r-10px t-a-l">
          <div className="p-t-10px w-100 m-d-n">&nbsp;</div>
            {/* Bloque 2 - 25% height */}
             <Link to="/">
              <span className="hover-underline-animation">
                Próximos eventos.
              </span>
            </Link>
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Agendar consultas.
              </span>
            </Link>
            <br />
            <Link to="/carreers">
              <span className="  hover-underline-animation">
                Empleos y pasantías.
              </span>
            </Link> 
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Planes de beneficencia.
              </span>
            </Link> 
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Planes cooperativos.
              </span>
            </Link> 
            <br />
          </div>{/* --------------- Block 2 */}
          {/* Block 3 --------------- */}
          <div className="m-d-n w-20 h-100  b-s-b-b h-pr-fl-ma p-l-10px  t-a-l">
          <div className="p-t-10px w-100 m-d-n">&nbsp;</div>
            {/* Bloque 3 - 25% height */}
            <Link to="/about">
              <span className="hover-underline-animation">
                Nuestra empresa.
              </span>
            </Link> 
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Metodología y producción.
              </span>
            </Link> 
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Recursos estratégicos.
              </span>
            </Link> 
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Generación de oportunidades.
              </span>
            </Link> 
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Casos de éxito.
              </span>
            </Link> 
            <br />
          </div>  {/* --------------- Block 3 */}
            {/* Block 4 --------------- */}
          <div className="m-w-40 w-20 h-100  b-s-b-b h-pr-fl-ma p-r-10px p-l-10px t-a-l">
             <div className="p-t-10px w-100 m-d-n">&nbsp;</div>
            {/* Bloque 4 - 25% height */}
            <Link to="/faq">
              <span className="  hover-underline-animation">
                Preguntas frecuentes.
              </span>
            </Link> 
            <br />
            <Link to="/terms">
              <span className="  hover-underline-animation">
                Términos y condiciones.
              </span>
            </Link> 
            <br />
            <Link to="/privacy">
              <span className="  hover-underline-animation">
                Políticas de privacidad.
              </span>
            </Link> 
            <br />
            <Link to="/cookies" className="m-d-n">
              <span className=" hover-underline-animation">
                Uso de cookies.
              </span>
            </Link> 
            <br />
          </div> {/* --------------- Block 4 */}

 {/* Block 5 DESKTOP ONLY --------------- */}
 <div className="m-d-n  w-20 h-100 b-s-b-b h-pr-fl-ma ">
             

          <div className="h-pr-fr-ma w-120px r-v-c h-25px  t-1s b-s-b-b">
            <img className="w-100 h-100 p-r m-a r-v-c" Style="object-fit: contain;" src={OSLogotipo} alt="OS-LOGOTIPO"/></div></div>
{/* --------------- Block 5*/}
          
         

          {/* MOBILE ONLY */}
           {/* Block 5 --------------- */}
          <div className="d-n m-d-b w-40  h-100  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px t-a-l">
          <div className="p-t-10px w-100 m-d-n">&nbsp;</div>
            {/* Bloque 2 - 25% height */}
             <Link to="/">
              <span className="hover-underline-animation">
                Próximos eventos.
              </span>
            </Link>
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Agendar consultas.
              </span>
            </Link>
            <br />
             <Link to="/">
              <span className="  hover-underline-animation">
                Empleos y pasantías.
              </span>
            </Link> 
           
          </div>{/* --------------- Block 5 */}

          {/* Hamburger Menu Button --------------- */}
          
          <div
            className="d-n m-d-b w-20  h-100  b-s-b-b h-pr-fl-ma p-l-10px t-a-l"
            Style="z-index: 99999999;"
          >
            <div className="w-and-h-50px  h-pr-fr-ma h-e c-p">
             <label for="menu" className="w-100 h-100 h-pr-fl-ma">             <img
              src={MenuHamburger}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Menu"
            /> </label>
            </div>
          </div>{/* -------------- Hamburger Menu Button */}
        </div>
    
      </div>
      <div
        className="d-n m-d-b w-100 h-20 h-pr-fl-ma f-f-Gilroy t-a-c"
        Style="background: #000000; font-size: 10px; font-color: white; z-index: 9999999;"
      >
        <div className="w-100 h-h-pr-fl-ma r-v-c " Style="color: white; t-a-c">
          2023‍&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;&zwj;©‍&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;&zwj;
          <span className="f-w-bo">
            OrigenStudios<sup>&reg;</sup>
          </span>
          &zwj;&nbsp;&zwj;Company&zwj;&nbsp;&zwj;-&zwj;&nbsp;&zwj;Todos&zwj;&nbsp;&zwj;los&zwj;&nbsp;&zwj;derechos&zwj;&nbsp;&zwj;reservados.
        </div>
      </div>
    </Fragment>
  );
}
