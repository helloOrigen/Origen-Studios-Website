import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MobileMenu from "./components/MobileMenu";
import MobileMenuContent from "./components/MobileMenuContent";
import LoaderComponent from "./components/LoaderComponent";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";

import Notifier from "./components/notifier";

import fondo from "./assets/images/compressed/fondo-web.jpg";


import "./Styles/seed.css";

import * as Views from "./Views/index";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <div className="w-100 h-100vh h-pr-fl-ma of-n b-s-b-b">
      <LoaderComponent />
        <div id="modal-root" style={{ zIndex: "9999999" }}></div>
        <div
          className="l-0px r-0px t-0px b-0px m-a pa"
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
        <div className="w-80 h-80 tab-w-90 m-w-100 m-h-100   ns-br-r-1 h-pr-fl-ma centered of-h bg-d b-s-b-b ">
          <div className="h-pr-fl-ma w-100 h-70px b-s-b-b bg-d" Style={{ zIndex: "99999" }}>
            <NavBar />
          </div>

          <div className="h-pr-fl-ma h-80 w-100 min-h-80 b-s-b-b">
            <div className="h-pr-fl-ma w-100 h-100 b-s-b-b">
              <div className="w-100 c-white h-100 r-h-c h-pr-fl-ma of-auto">
                <Routes>
                  <Route path="/" element={<Views.Home />} />
                  <Route path="/services" element={<Views.Services />} />
                  <Route path="/team" element={<Views.Team />} />
                  <Route path="/sponsors" element={<Views.Sponsors />} />
                  <Route path="/faq" element={<Views.FAQ />} />
                  <Route path="/about" element={<Views.About />} />
                  <Route path="/terms" element={<Views.Terms />} />
                  <Route path="/cookies" element={<Views.Cookies />} />
                  <Route path="/privacy" element={<Views.Privacy />} />
                  <Route path="/concepts" element={<Views.Concepts />} />
                  <Route path="/plans" element={<Views.Plans />} />
                  <Route path="/plans/:id" element={<Views.Plans />} />
                  <Route path="/plans/contents" element={<Views.Contents />} />
                  <Route path="/plans/identity" element={<Views.Identity />} />
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
              className="w-80 UnderLineText"
              Accept
              text=" Utilizamos 🍪 cookies en este sitio para ofrecerle la mejor experiencia de usuario posible."
              link="/cookies"
              action="Saber más..."
            />
          </div>
          <div className="h-pr-fl-ma w-100 h-70px  b-s-b-b of-v b-0px m-p-f" style={{ zIndex: "9999" }}>
            <Footer className="m-d-n w-100 h-100 r-h-c h-pr-fl-ma b-s-b-b bg-d" style={{ zIndex: "9999" }} />
          </div>
        </div>
        <MobileMenu onToggleMenu={handleToggleMenu} isOpen={menuOpen} />
        <MobileMenuContent open={menuOpen} />
      </div>
    </BrowserRouter>
  );
};

export default App;
