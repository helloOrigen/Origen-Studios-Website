import { Fragment } from "react";

import NavBar from "./components/navBar";
import NavBarBtn from "./components/navBarBtn";
import NavBarLogo from "./components/navBarLogo";
import contentViewer from "./components/contentViewer";
import contentBox from "./components/contentBox";
import Footer from "./components/Footer";
import OSBackground from "./assets/OS-Background-1.png";
import "./Styles/seed.css";

import Home from "./Views/home";
import Services from "./Views/services";

function App() {
  return (
    <Fragment>
      <div className="h-pr-fl-ma  w-100 h-100vh b-s-b-b of-h bg-blur">
        <div
          className=" l-0px r-0px t-0px b-0px m-a blurbganimation "
          style={{
            backgroundImage: `url(${OSBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        ></div>
        {/* FullHeight Container*/}

        <div className="h-pr-fl-ma w-100 h-15 b-s-b-b">
          {/* 15% Height Menu Container*/}
          <NavBar className="w-90 h-100 r-h-c h-pr-fl-ma">
            <NavBarLogo right></NavBarLogo>
            <NavBarBtn className="m-d-n" text={"Nosotros"}></NavBarBtn>
            <NavBarBtn className="m-d-n" text={"Estructura"}></NavBarBtn>
            <NavBarBtn className="m-d-n" text={"Servicios"}></NavBarBtn>
            <NavBarBtn className="m-d-n" text={"Planes"}></NavBarBtn>
            <NavBarBtn className="m-d-n" text={"Metodología"}></NavBarBtn>
            <NavBarBtn className="m-d-n" text={"Parámetros"}></NavBarBtn>
          </NavBar>
        </div>

        <div className="h-pr-fl-ma w-100 h-70  b-s-b-b of-n ">
          {/* 70% Height  Body Container*/}
          <div className="h-pr-fl-ma w-100 h-100  b-s-b-b of-n ">
            <div className="w-90 c-white h-100 p-l-10px p-r-10px r-h-c h-pr-fl-ma">
              {/* Todas las views se renderizan aquí*/}
              {/*<Home
                title="Te damos la bienvenida, estás en el origen..."
                subtitle="De tu nueva marca."
              />*/}
             
             <Services/>

            </div>
          </div>
        </div>

        <div className="h-pr-fl-ma w-100 h-15 b-s-b-b">
          {/* 15% Height Footer Container*/}
          <Footer className="w-90 h-100 r-h-c h-pr-fl-ma" />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
