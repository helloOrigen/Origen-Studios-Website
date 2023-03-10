import React from 'react'
import { Fragment } from "react";
import{ BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import MobileMenu from './components/mobileMenu';
import Background1 from './assets/images/compressed/background-1.jpg';
import Background2 from './assets/images/compressed/background-2.jpg';
import "./Styles/seed.css";
import "./Styles/home.css";
import Notifier from "./components/notifier";


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
import Gallery from "./Views/gallery";
import Promo from "./Views/promo";
import Jobs from "./Views/jobs";

function App() {
  


  return (
    <BrowserRouter>

    <Fragment>
      <div className="h-pr-fl-ma w-100 h-100vh b-s-b-b of-h of-y-n ">
      
        <div
          className=" l-0px r-0px t-0px b-0px m-a "/*blurbganimation */
          style={{
            backgroundImage: `url(${Background2})`,
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
        

        <div className="h-pr-fl-ma w-100 h-70 m-h-80 p-20px  b-s-b-b of-n  ">
          {/* 70% Height  Body Container*/}
          <div className="h-pr-fl-ma w-100 h-100  b-s-b-b of-n  ">
            <div className="w-90 c-white h-100 r-h-c h-pr-fl-ma ">
              {/* Todas las views se renderizan aqu??*/} <MobileMenu className="p-a"/>

              <Routes> 
          
          <Route exact path="/" element={<Home/>} />
            <Route exact  path="/services" element={<Services />} />
           <Route exact path="/team" element={<Team/>} />
           <Route exact path="/design" element={<Design/>} />
           <Route exact path="/dev" element={<Dev/>} />
           <Route exact path="/marketing" element={<Marketing/>} />
           <Route exact path="/faq" element={<FAQ/>} />
           <Route exact path="/about" element={<About/>} />
           <Route exact path="/terms" element={<Terms/>} />
           <Route exact path="/cookies" element={<Cookies/>} />
           <Route exact path="/privacy" element={<Privacy/>} />
           <Route exact path="/plans" element={<Plans/>} />
           <Route exact path="/process" element={<Process/>} />
           <Route exact path="/gallery" element={<Gallery/>} />
           <Route exact path="/promo" element={<Promo/>} />
           <Route exact path="/jobs" element={<Jobs/>} />
           <Route path="/*" element={<Page404/>} />
           <Route path="404"component={<Page404/>} />
           

           </Routes>
           <div
          className="h-pr-fl-ma w-100 h-15 m-h-10  t-1s b-s-b-b of-n  "
          Style="z-index: 13060324;"
        >
          <Notifier
            title="Politica de cookies"
            text="Nosotros y terceros seleccionados utilizamos cookies o tecnolog??as similares con fines t??cnicos y, con su consentimiento, para otras finalidades seg??n se especifica en la cookie policy. Denegar el consentimiento puede provocar que caracter??sticas relacionadas no est??n disponibles.
         Utilice el bot??n ???Aceptar??? para dar su consentimiento. Utilice el bot??n ???Rechazar??? o cierre esta nota informativa para continuar sin aceptar."
            link="/cookies"
            action="Conozca nuestras poltiicas de cookies."
          />
        </div>
            </div>
          </div>
        </div>

        
          <Footer className="w-90 h-15vh r-h-c h-pr-fl-ma" />
       
      </div>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
