import React from 'react'
import { Fragment } from "react";
import{ BrowserRouter, Routes, Route } from "react-router-dom";
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
import Tools from "./Views/tools";
import Design from "./Views/design";
import Marketing from "./Views/marketing";
import Sponsors from "./Views/sponsors";
import FAQ from "./Views/faq";
import About from "./Views/about";
import Terms from "./Views/terms";
import Privacy from "./Views/privacy";
import Cookies from "./Views/cookies";

import Plans from "./Views/plans";
import Posts from "./Views/posts";
import Identity from "./Views/identity";
import Campaign from "./Views/campaign";

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

        <div className="h-pr-fl-ma w-100 m-h-5 h-10 b-s-b-b  ">
          {/* 15% Height Menu Container*/}
          <NavBar/>
        </div>
        

        <div className="h-pr-fl-ma w-100 h-85 b-s-b-b of-n ">
          {/* 70% Height  Body Container*/}
          <div className="h-pr-fl-ma w-100 h-100  b-s-b-b of-n  ">
            <div className="w-90 c-white h-100 r-h-c h-pr-fl-ma ">
              {/* Todas las views se renderizan aquí*/} <MobileMenu className="p-a"/>

              <Routes> 
        
          <Route exact path="/" element={<Home/>} />
            <Route exact  path="/services" element={<Services />} />
           <Route exact path="/team" element={<Team/>} />
           <Route exact path="/tools" element={<Tools/>} />
           <Route exact path="/design" element={<Design/>} />
           <Route exact path="/sponsors" element={<Sponsors/>} />
           <Route exact path="/marketing" element={<Marketing/>} />
           <Route exact path="/faq" element={<FAQ/>} />
           <Route exact path="/about" element={<About/>} />
           <Route exact path="/terms" element={<Terms/>} />
           <Route exact path="/cookies" element={<Cookies/>} />
           <Route exact path="/privacy" element={<Privacy/>} />

           <Route exact path="/plans" element={<Plans/>} />
           <Route exact path="/plans/:id" element={<Plans/>} />
           <Route  path="/plans/posts" element={<Posts/>} />
           <Route  path="/plans/identity" element={<Identity/>} />
           <Route  path="/plans/campaign" element={<Campaign/>} />

           <Route exact path="/process" element={<Process/>} />
           <Route exact path="/gallery" element={<Gallery/>} />
           <Route exact path="/promo" element={<Promo/>} />
           <Route exact path="/jobs" element={<Jobs/>} />
           <Route path="/*" element={<Page404/>} />
           <Route path="404"component={<Page404/>} />
           

           </Routes>
           <div
          className="h-pr-fl-ma w-100 h-10 m-h-10  t-1s b-s-b-b of-n  "
         Style="z-index: 13060324;"
        > 
          <Notifier className="w-40" Accept
            title="Politica de cookies"
            text={` ${" Utilizamos cookies en nuestro sitio web para ofrecerle la mejor experiencia de usuario posible. Si continúa utilizando nuestro sitio web o nuestros servicios, acepta su uso."}`}
            link="/cookies"
            action="Más información."
          />
        </div>
            </div>
          </div>
        </div>
        <div
          className="h-pr-fl-ma w-100 h-5 m-h-10  t-1s b-s-b-b of-n  "
         
        > 
        
          <Footer className="w-90 h-100 r-h-c h-pr-fl-ma bg-black" />
          </div>
      </div>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
