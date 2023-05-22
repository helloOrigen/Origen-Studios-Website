import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes personalizados
import NavBar from './components/navBar';
import Footer from './components/Footer';
import MobileMenu from './components/mobileMenu';
import Notifier from './components/notifier';

// Estilos y recursos
import Background2 from './assets/images/compressed/background-2.jpg';
import './Styles/seed.css';
import './Styles/home.css';
import './Styles/firefly.css';

// Vistas
import * as Views from "./Views/index.jsx";
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()



function App() {
  

  return (
    <BrowserRouter>

    <Fragment>
 
       <div className="h-pr-fl-ma w-100 h-100vh of-y-n of-h">
        
      <div className=" l-0px r-0px t-0px b-0px m-a "
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
        >
          <div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
          </div> 
       
        {/* FullHeight Container*/}

        <div className="h-pr-fl-ma w-100 h-10 b-s-b-b  ">
          {/* 15% Height Menu Container*/}
          <div className="d-n m-d-b w-100 c-white h-a  bg-black f-f-Gilroy ns-f-s-nano  t-a-c" Style="position:fixed;">
            OrigenStudios.com | Somos el origen de su marca. | &reg; 2023
          </div>
          <NavBar/>
        </div>
        

        <div className="h-pr-fl-ma w-100 h-80 b-s-b-b of-n ">
          {/* 70% Height  Body Container*/}
          <div className="h-pr-fl-ma w-100 h-100  b-s-b-b of-n  ">
            <div className="w-90 c-white h-100 r-h-c h-pr-fl-ma ">
              {/* Todas las views se renderizan aquí*/} <MobileMenu className="p-a"/>

              <Routes> 
        
          <Route exact path="/" element={<Views.Home/>} />
            <Route exact  path="/services" element={<Views.Services />} />
           <Route exact path="/team" element={<Views.Team/>} />
           <Route exact path="/tools" element={<Views.Tools/>} />
           <Route exact path="/design" element={<Views.Design/>} />
           <Route exact path="/sponsors" element={<Views.Sponsors/>} />
           <Route exact path="/marketing" element={<Views.Marketing/>} />
           <Route exact path="/faq" element={<Views.FAQ/>} />
           <Route exact path="/about" element={<Views.About/>} />
           <Route exact path="/terms" element={<Views.Terms/>} />
           <Route exact path="/cookies" element={<Views.Cookies/>} />
           <Route exact path="/privacy" element={<Views.Privacy/>} />

           <Route exact path="/plans" element={<Views.Plans/>} />
           <Route exact path="/plans/:id" element={<Views.Plans/>} />
           <Route  path="/plans/posts" element={<Views.Posts/>} />
           <Route  path="/plans/identity" element={<Views.Identity/>} />
           <Route  path="/plans/campaign" element={<Views.Campaign/>} />

           <Route exact path="/process" element={<Views.Process/>} />
           <Route exact path="/gallery" element={<Views.Gallery/>} />
           <Route exact path="/promo" element={<Views.Promo/>} />
           <Route exact path="/jobs" element={<Views.Jobs/>} />
           <Route path="/*" element={<Views.Page404/>} />
           <Route path="404"component={<Views.Page404/>} />
           

           </Routes>
           <div
          className="h-pr-fl-ma w-100 h-10   t-1s b-s-b-b of-n  "
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
          className="h-pr-fl-ma w-100 h-10 b-s-b-b of-v"
         
        > 
          <Footer className="w-100 h-100 r-h-c h-pr-fl-ma " />
          </div>
      </div>
 
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
