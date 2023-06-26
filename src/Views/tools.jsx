import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Adsense from "../components/Adsense";
import Title from "../components/title";
import Btn from "../components/btn";
import {
  TLVAlojamiento,
  TLVCreacion,
  TLVCompresion,
  TLVConversion,
  TLVRecursos,
  TLVOrganizacion,
  TLVAutomatizacion,
} from "./index";

const Tools = () => {
  const { id } = useParams();
  const [selectedView, setSelectedView] = useState(id || "");

  useEffect(() => {
    setSelectedView(id || "");
  }, [id]);

  const handleViewClick = (viewName) => {
    setSelectedView(viewName);
  };

  return (
    <Fragment>
      <div className="w-100 h-a h-pr-fl-ma b-s-b-bs t-a-c m-d-b  m-t-100px m-b-50px ">
      <div className="w-100 h-500px h-pr-fl-ma bg-d b-s-b-b">
        <div className="w-100 h-a h-pr-fl-ma r-v-c">
      <Title className=" ns-c-e" h2="Sección en construcción"></Title>
      <Title className="" h3="Disculpe las molestias."></Title></div>
      </div>
      </div>
      {/* <div className="w-100 h-a h-pr-fl-ma b-s-b-bs t-a-c m-d-b  m-t-100px m-b-50px ">
        <div className="w-80 m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b m-b-20px ">
          <Title h1="Herramientas"></Title>
          <Title h3=""></Title>
        </div>

        <div className="w-a m-w-80 r-h-c h-a h-pr-fl-ma b-s-b-b flexbox m-d-b ">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b flexbox m-d-b">
          <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-b-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Alojamiento")}
              text="Alojamiento"
            ></Btn>
             <Btn
              className="w-200px m-w-100 p-l-20px p-r-20px p-10px m-b-5px f-w-bo br-s-solid br-c-white br-r-50px"
              text="Automatización"
              click={() => handleViewClick("Automatización")}
            ></Btn>
            <Btn
              className="w-200px m-w-100 p-l-20px p-r-20px p-10px m-b-5px f-w-bo br-s-solid br-c-white br-r-50px"
              text="Compresión"
              click={() => handleViewClick("Compresion")}
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-b-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Creación & Edición")}
              text="Creación & Edición"
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-b-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Compresión")}
              text="Compresión"
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-b-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Recursos")}
              text="Recursos"
            ></Btn>
          
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-b-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Organización")}
              text="Organización"
            ></Btn>
          </div>
        </div>
      </div>

      <div className="w-95 r-h-c h-a h-pr-fl-ma b-s-b-b m-d-b bg-d-t  m-d-b f-f-Gilroy ">
        <div className="w-70 m-w-100 h-a h-pr-fl-ma p-10px">
          {selectedView === "Alojamiento" && <TLVAlojamiento />}
          {selectedView === "Automatizacion" && <TLVAutomatizacion />}
          {selectedView === "Compresion" && <TLVCompresion />}
          {selectedView === "Conversion" && <TLVConversion />}
          {selectedView === "Creación & Edición" && <TLVCreacion />}
          {selectedView === "Organización" && <TLVOrganizacion />}
          {selectedView === "Recursos" && <TLVRecursos />}

          <Adsense  slot="9886328101" googleAdId="ca-pub-6375603115544403"/>
        </div>
        <div className="w-30 m-w-100 h-a h-pr-fl-ma  p-10px">
          <div className="w-100 m-w-100 h-a h-pr-fl-ma bg-d p-10px">
          <Adsense  slot="9886328101" googleAdId="ca-pub-6375603115544403"/>
          </div>
        </div>
      </div>
*/}
      <div className="w-95 r-h-c m-w-90 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma ">
        <Adsense  slot="9886328101" googleAdId="ca-pub-6375603115544403"/>
        </div>
      </div>
      <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
    </Fragment>
  );
};

export default Tools;
