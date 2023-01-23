import React from 'react'
import { Fragment } from "react";
import{Redirect, BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/navBar";


import Notifier from "./components/notifier";
import Footer from "./components/Footer";
import MobileMenu from './components/mobileMenu';
import OSBackground from "./assets/OS-Background-1.png";
import Wallpaper1 from './assets/images/wallpaper-1.png';
import Wallpaper2 from './assets/images/wallpaper-2.png';
import Wallpaper3 from './assets/images/wallpaper-3.png';
import Wallpaper4 from './assets/images/wallpaper-4.png';
import Wallpaper5 from './assets/images/wallpaper-5.png';
import Wallpaper6 from './assets/images/wallpaper-6.png';
import Wallpaper7 from './assets/images/wallpaper-7.png';
import Wallpaper8 from './assets/images/wallpaper-8.png';

import "./Styles/seed.css";
import "./Styles/home.css";


import Home from "./Views/home";
import Services from "./Views/services";
import Team from "./Views/Team";
import Design from "./Views/design";
import Marketing from "./Views/marketing";
import Dev from "./Views/dev";
import FAQ from "./Views/faq";
import About from "./Views/about";
import Terms from "./Views/terms";
import Privacy from "./Views/privacy";
import Cookies from "./Views/cookies";
import Plans from "./Views/plans";
import Page404 from "./Views/page404";
import Process from "./Views/process";
function App() {
  return (
    <BrowserRouter>

    <Fragment>
      <div className="h-pr-fl-ma w-100 h-100vh b-s-b-b of-h ">
      
        <div
          className=" l-0px r-0px t-0px b-0px m-a "/*blurbganimation */
          style={{
            backgroundImage: `url(${Wallpaper8})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
          }}
        ></div>
       <div className="l-0px r-0px t-0px b-0px m-a bg-linear-b-t"
       style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
      }}></div>
        {/* FullHeight Container*/}

        <div className="h-pr-fl-ma w-100 m-h-10 h-15 b-s-b-b ">
          {/* 15% Height Menu Container*/}
          <NavBar/>
        </div>
        

        <div className="h-pr-fl-ma w-100 h-70 m-h-80  b-s-b-b of-n  ">
          {/* 70% Height  Body Container*/}
          <div className="h-pr-fl-ma w-100 h-100  b-s-b-b of-n  ">
            <div className="w-90 c-white h-100   r-h-c h-pr-fl-ma ">
              {/* Todas las views se renderizan aquí*/} {/*<MobileMenu/>*/} 

           
               <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route exact  path="/services" element={<Services />} />
           <Route path="/team" element={<Team/>} />
           <Route path="/design" element={<Design/>} />
           <Route path="/dev" element={<Dev/>} />
           <Route path="/marketing" element={<Marketing/>} />
           <Route path="/faq" element={<FAQ/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/terms" element={<Terms/>} />
           <Route path="/cookies" element={<Cookies/>} />
           <Route path="/privacy" element={<Privacy/>} />
           <Route path="/plans" element={<Plans/>} />
           <Route path="/process" element={<Process/>} />
           <Route path="/**" element={ <Route path="/page404" element={<Page404/>} /> }/>
           
</Routes>
            </div>
          </div>
        </div>

        <div className="h-pr-fl-ma w-100 h-15 m-h-10  t-1s b-s-b-b of-n  ">
     {/*<Notifier title="Politica de cookies" text="Nosotros y terceros seleccionados utilizamos cookies o tecnologías similares con fines técnicos y, con su consentimiento, para otras finalidades según se especifica en la cookie policy. Denegar el consentimiento puede provocar que características relacionadas no estén disponibles.
Utilice el botón “Aceptar” para dar su consentimiento. Utilice el botón “Rechazar” o cierre esta nota informativa para continuar sin aceptar." action="Conozca nuestras poltiicas de cookies."/>*/}
          {/* 15% Height Footer Container*/}
          <Footer className="w-90 h-100 r-h-c h-pr-fl-ma" />
        </div>
      </div>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
