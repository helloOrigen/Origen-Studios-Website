import { Fragment } from "react";
import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
import NavBar from "./components/navBar";
import contentViewer from "./components/contentViewer";
import ContentBox from "./components/contentBox";
import Footer from "./components/Footer";
import OSBackground from "./assets/OS-Background-1.png";
import "./Styles/seed.css";

import Home from "./Views/home";
import Services from "./Views/services";
import Team from "./Views/Team";

function App() {
  return (
    <BrowserRouter>

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
          <NavBar/>
        </div>
        

        <div className="h-pr-fl-ma w-100 h-70  b-s-b-b of-n ">
          {/* 70% Height  Body Container*/}
          <div className="h-pr-fl-ma w-100 h-100  b-s-b-b of-n ">
            <div className="w-90 c-white h-100  p-r-10px r-h-c h-pr-fl-ma m-t">
              {/* Todas las views se renderizan aquí*/}
              <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route exact  path="/services" element={<Services />} />
           <Route path="/team" element={<Team/>} />
        </Routes>

            </div>
          </div>
        </div>

        <div className="h-pr-fl-ma w-100 h-15 b-s-b-b">
          {/* 15% Height Footer Container*/}
          <Footer className="w-90 h-100 r-h-c h-pr-fl-ma" />
        </div>
      </div>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
