import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import MobileMenu from "./components/mobileMenu";
import Notifier from "./components/notifier";

import fondo from "./assets/images/compressed/fondo-web.jpg";

import "./Styles/fixedcss/seed.min.css";



import * as Views from "./Views/index.jsx";

const App = () => {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    window.addEventListener("resize", appHeight);
    appHeight();

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="w-100 h-100 h-pr-fl-ma of-h ">
        <div id="modal-root" Style={{ zIndex: "9999999" }}></div>
        <div
          className="l-0px r-0px t-0px b-0px m-a"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
          }}
        ></div>
  <div className="h-pr-fl-ma w-100 h-70px b-s-b-b bg-d" Style={"z-index:99999;"}>
              <NavBar/>
        </div>

        <div className="h-pr-fl-ma h-80 w-100 min-h-80 b-s-b-b">
          <div className="h-pr-fl-ma w-100 h-100 b-s-b-b">
            <div className="w-100 c-white h-100 r-h-c h-pr-fl-ma of-auto">
              <Routes>
                <Route path="/" element={<Views.Home />} />
                <Route path="/services" element={<Views.Services />} />
                <Route path="/team" element={<Views.Team />} />

                <Route path="/tools/*" element={<Views.Tools />} />
                <Route path="/tools/Alojamiento" element={<Views.TLVAlojamiento />} />
                <Route path="/tools/Automatizacion" element={<Views.TLVAutomatizacion />} />
                <Route path="/tools/Conversion" element={<Views.TLVConversion />} />
                <Route path="/tools/Compresion" element={<Views.TLVCompresion />} />
                <Route path="/tools/Creacion" element={<Views.TLVCreacion />} />
                <Route path="/tools/Organizacion" element={<Views.TLVOrganizacion />} />
                <Route path="/tools/Recursos" element={<Views.TLVRecursos />} />

                <Route path="/sponsors" element={<Views.Sponsors />} />
                <Route path="/faq" element={<Views.FAQ />} />
                <Route path="/about" element={<Views.About />} />
                <Route path="/terms" element={<Views.Terms />} />
                <Route path="/cookies" element={<Views.Cookies />} />
                <Route path="/privacy" element={<Views.Privacy />} />

                <Route path="/plans" element={<Views.Plans />} />
                <Route path="/plans/:id" element={<Views.Plans />} />
                <Route path="/plans/contents" element={<Views.Contents />} />
                <Route path="/plans/identity" element={<Views.Identity  />} />
<Route path="/plans/identity/planes-mensuales" element={<Views.Identity mostrarUnicos={false} mostrarMensuales={true} />} />
<Route path="/plans/identity/planes-unicos" element={<Views.Identity mostrarUnicos={true} mostrarMensuales={false} />} />
                
                <Route path="/downloads" element={<Views.Downloads />} />
                <Route path="/downloads/:id" element={<Views.Downloads />} />
                <Route path="/downloads/identity" element={<Views.DLIdentity />} />
                <Route path="/downloads/contents" element={<Views.DLContents />} />
                <Route path="/downloads/consultancy" element={<Views.DLConsultancy />} />

                <Route path="/promo" element={<Views.Promo />} />
                <Route path="/jobs" element={<Views.Jobs />} />
                <Route path="/404" element={<Views.Page404 />} />
                <Route path="*" element={<Views.Page404 />} />
              </Routes>
            </div>
          </div>
          <Notifier
            className="w-80  UnderLineText"
            Accept
            text=" Utilizamos 🍪 cookies en este sitio para ofrecerle la mejor experiencia de usuario posible."
            link="/cookies"
            action="Saber más..."
          />
        </div>
        <MobileMenu />
        <div className="h-pr-fl-ma w-100 h-70px  b-s-b-b of-v b-0px m-p-f" style={{ zIndex: "9999" }}>
          <Footer className="w-100 h-100 r-h-c h-pr-fl-ma b-s-b-b bg-d" style={{ zIndex: "9999" }} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
