import React, { Fragment, useState } from "react";
import AdSense from "react-adsense";
import Title from "../components/title";
import Btn from "../components/btn";
import Adsense from "../components/Adsense";

import {
    DLContents,
    DLConsultancy,
    DLIdentity,
} from "./index.jsx";


const Downloads = () => {
  const [selectedView, setSelectedView] = useState("");
  const handleViewClick = (viewName) => {
    setSelectedView(viewName);
  };
  return (
    <Fragment>
      <div className="w-100 h-a h-pr-fl-ma b-s-b-bs t-a-c m-d-b  m-t-100px m-b-50px ">
        <div className="w-80 m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b m-b-20px ">
          <Title h1="Descargas"></Title>
         
        </div>

      </div>

      <div className="w-95 r-h-c h-a h-pr-fl-ma b-s-b-b m-d-b bg-d-t  m-d-b f-f-Gilroy ">
      <div className="w-20 m-w-100 h-a m-d-n h-pr-fl-ma p-10px bg-d">
      <Adsense  slot="9886328101" googleAdId="ca-pub-6375603115544403"/>
      </div>
        <div className="w-60 m-w-70 h-a h-pr-fl-ma p-10px">
        {selectedView === "Identidad" && <DLIdentity/>}
        {selectedView === "Contenido" && <DLContents/>}
        {selectedView === "Consultoría" && <DLConsultancy/>}
  
       
        </div>
        <div className="w-20 m-w-30 h-a h-pr-fl-ma bg-d p-10px">

        <div className="w-100 m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b flexbox m-d-b ">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b  m-d-b">
            <Btn
              className="w-100 m-w-100 p-l-20px p-r-20px p-10px  f-w-bo bg-d m-b-5px"
              click={() => handleViewClick("Identidad")}
              text="Identidad"
            ></Btn>
            <Btn
              className="w-100 m-w-100 p-l-20px p-r-20px p-10px  f-w-bo bg-d m-b-5px"
              click={() => handleViewClick("Contenido")}
              text="Contenido"
            ></Btn>
            <Btn
              className="w-100 m-w-100 p-l-20px p-r-20px p-10px  f-w-bo bg-d m-b-5px"
              click={() => handleViewClick("Consultoría")}
              text="Consultoría"
            ></Btn>
       
         
          </div>
        </div>




        <div className="w-100 m-w-100 h-a h-pr-fl-ma bg-d p-10px">
        <Adsense  slot="9886328101" googleAdId="ca-pub-6375603115544403"/></div>
           </div>
           <div className="w-100 h-a d-n m-d-b h-pr-fl-ma p-10px bg-d">
           <Adsense  slot="9886328101" googleAdId="ca-pub-6375603115544403"/></div>
      </div>
        {/*  // !                           ADS                         */}
        <div className="w-95 r-h-c m-w-90 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma ">
        <Adsense  slot="9886328101" googleAdId="ca-pub-6375603115544403"/>

        </div>
      </div>
      <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
    </Fragment>
  );
};

export default Downloads;
