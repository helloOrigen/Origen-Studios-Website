import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdSense from "react-adsense";
import Title from "../components/title";
import Btn from "../components/btn";
import {
  TLVAITools,
  TLVMarketing,
  TLVDesign,
  TLVMusic,
  TLVProductivity,
  TLVDevelopment,
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
        <div className="w-80 m-w-100 r-h-c h-a h-pr-fl-ma b-s-b-b m-b-20px ">
          <Title h1="Herramientas"></Title>
          <Title h3=""></Title>
        </div>

        <div className="w-a m-w-80 r-h-c h-a h-pr-fl-ma b-s-b-b flexbox m-d-b ">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b flexbox m-d-b">
            <Btn
              className="w-200px m-w-100 p-l-20px p-r-20px p-10px m-5px f-w-bo br-s-solid br-c-white br-r-50px"
              text="Productividad"
              click={() => handleViewClick("Productivity")}
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Herramientas IA")}
              text="Herramientas IA"
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Diseño")}
              text="Diseño & Multimedia"
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Producción Musical")}
              text="Producción Musical"
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Desarrollo")}
              text="Desarrollo Web"
            ></Btn>
            <Btn
              className="w-200px m-w-100  p-l-20px p-r-20px p-10px m-5px f-w-bo  br-s-solid br-c-white br-r-50px"
              click={() => handleViewClick("Marketing")}
              text="Marketing Digital"
            ></Btn>
          </div>
        </div>
      </div>

      <div className="w-95 r-h-c h-a h-pr-fl-ma b-s-b-b m-d-b bg-d-t  m-d-b f-f-Gilroy ">
        <div className="w-70 m-w-100 h-a h-pr-fl-ma p-10px">
          {selectedView === "Productivity" && <TLVProductivity />}
          {selectedView === "Herramientas IA" && <TLVAITools />}
          {selectedView === "Diseño" && <TLVDesign />}
          {selectedView === "Producción Musical" && <TLVMusic />}
          {selectedView === "Desarrollo" && <TLVDevelopment />}
          {selectedView === "Marketing" && <TLVMarketing />}

          <AdSense.Google
            className="adsbygoogle-Tools-1"
            client="ca-pub-6375603115544403"
            slot="9886328101"
            style={{ display: "block" }}
            format="auto"
            responsive="true"
          />
        </div>
        <div className="w-30 m-w-100 h-a h-pr-fl-ma  p-10px">
          <div className="w-100 m-w-100 h-a h-pr-fl-ma bg-d p-10px">
            <AdSense.Google
              className="adsbygoogle-Tools-2"
              client="ca-pub-6375603115544403"
              slot="9886328101"
              style={{ display: "block" }}
              format="auto"
              responsive="true"
            />
          </div>
        </div>
      </div>

      <div className="w-95 r-h-c m-w-90 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma ">
          <AdSense.Google
            className="adsbygoogle-Tools-3"
            client="ca-pub-6375603115544403"
            slot="9886328101"
            style={{ display: "block" }}
            format="auto"
            responsive="true"
          />
        </div>
      </div>
      <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
    </Fragment>
  );
};

export default Tools;
