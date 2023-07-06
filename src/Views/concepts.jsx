import React, { Fragment, useState } from "react";
import { Title, Box, Btn  } from "../components/index";

import {
  MessageWriting,
} from "../components/icons";


import Inverter from "../assets/images/concepts/1.png";
import Pixxard from "../assets/images/concepts/2.png";
import Citro from "../assets/images/concepts/3.png";
import WomanSecrets from "../assets/images/concepts/4.png";
import UpTheGrade from "../assets/images/concepts/5.png";
import TechZen from "../assets/images/concepts/6.png";
import BoxCom from "../assets/images/concepts/7.png";
import ShelbyWallace from "../assets/images/concepts/8.png";
import Diamond from "../assets/images/concepts/9.png";
import Chorus from "../assets/images/concepts/10.png";
import Adventer from "../assets/images/concepts/11.png";
import Film from "../assets/images/concepts/12.png";
import Adon from "../assets/images/concepts/13.png";
import FarmaFlex from "../assets/images/concepts/14.png";
import Diwine from "../assets/images/concepts/15.png";
import Cellerion from "../assets/images/concepts/16.png";
import MVDynamics from "../assets/images/concepts/17.png";
import GrandWizzard from "../assets/images/concepts/18.png";
import Solido from "../assets/images/concepts/19.png";
import Termal from "../assets/images/concepts/20.png";
import Playa from "../assets/images/concepts/21.png";
import Austral from "../assets/images/concepts/22.png";
import Pixzr from "../assets/images/concepts/23.png";
import LosVendedores from "../assets/images/concepts/24.png";
import Echizo from "../assets/images/concepts/25.png";
import Awacate from "../assets/images/concepts/26.png";
import Morphosxs from "../assets/images/concepts/27.png";
import Oxi2 from "../assets/images/concepts/28.png";
import Cohiba from "../assets/images/concepts/29.png";
import TheNewCronics from "../assets/images/concepts/30.png";
import Points from "../assets/images/concepts/31.png";
import Zonda from "../assets/images/concepts/32.png";
import CalaAndGari from "../assets/images/concepts/33.png";
import Lucha from "../assets/images/concepts/34.png";
import CompraVentas from "../assets/images/concepts/35.png";
import Paraiso from "../assets/images/concepts/36.png";
import AVCapital from "../assets/images/concepts/37.png";
import Scope from "../assets/images/concepts/38.png";
import MasterBlack from "../assets/images/concepts/39.png";
import Heronier from "../assets/images/concepts/40.png";
import OnLine from "../assets/images/concepts/41.png";
import RedactTactic from "../assets/images/concepts/42.png";
import Baldia from "../assets/images/concepts/43.png";
import Huy from "../assets/images/concepts/44.png";
import Touch from "../assets/images/concepts/45.png";
import Carbon from "../assets/images/concepts/46.png";
import Montana from "../assets/images/concepts/47.png";
import ShipBank from "../assets/images/concepts/48.png";
import FoxSearch from "../assets/images/concepts/49.png";
import PillowWillow from "../assets/images/concepts/50.png";
import ClipCoin from "../assets/images/concepts/51.png";
import Focus from "../assets/images/concepts/52.png";
import CiaroGiglo from "../assets/images/concepts/53.png";
import Makro from "../assets/images/concepts/54.png";
import MasterLeague from "../assets/images/concepts/55.png";
import Completo from "../assets/images/concepts/56.png";
import GoldenEggs from "../assets/images/concepts/57.png";
import TianZun from "../assets/images/concepts/58.png";
import Samawi from "../assets/images/concepts/59.png";
import WorkSchool from "../assets/images/concepts/60.png";
import SoundPoint from "../assets/images/concepts/61.png";
import CasaNueva from "../assets/images/concepts/62.png";
import MontanaAirport from "../assets/images/concepts/63.png";
import Marazzo from "../assets/images/concepts/64.png";
import Redentor from "../assets/images/concepts/65.png";
import ViwMap from "../assets/images/concepts/66.png";

const imageList = [
  { image: Inverter,  status: "Disponible" },
  { image: Pixxard,  status: "Disponible" },
  { image: Citro,  status: "Disponible" },
  { image: WomanSecrets,  status: "Disponible" },
  { image: UpTheGrade,  status: "Disponible" },
  { image: TechZen,  status: "Disponible" },
  { image: BoxCom,  status: "Disponible" },
  { image: ShelbyWallace,  status: "Disponible" },
  { image: Diamond,  status: "Disponible" },
  { image: Chorus,  status: "Disponible" },
  { image: Adventer,  status: "Disponible" },
  { image: Film,  status: "Disponible" },
  { image: Adon,  status: "Disponible" },
  { image: FarmaFlex,  status: "Disponible" },
  { image: Diwine,  status: "Disponible" },
  { image: Cellerion,  status: "Disponible" },
  { image: MVDynamics,  status: "Disponible" },
  { image: GrandWizzard,  status: "Disponible" },
  { image: Solido,  status: "Disponible" },
  { image: Termal,  status: "Disponible" },
  { image: Playa,  status: "Disponible" },
  { image: Austral,  status: "Disponible" },
  { image: Pixzr,  status: "Disponible" },
  { image: LosVendedores,  status: "Disponible" },
  { image: Echizo,  status: "Disponible" },
  { image: Awacate,  status: "Disponible" },
  { image: Morphosxs,  status: "Disponible" },
  { image: Oxi2,  status: "Disponible" },
  { image: Cohiba,  status: "Disponible" },
  { image: TheNewCronics,  status: "Disponible" },
  { image: Points,  status: "Disponible" },
  { image: Zonda,  status: "Disponible" },
  { image: CalaAndGari,  status: "Disponible" },
  { image: Lucha,  status: "Disponible" },
  { image: CompraVentas,  status: "Disponible" },
  { image: Paraiso,  status: "Disponible" },
  { image: AVCapital,  status: "Disponible" },
  { image: Scope,  status: "Disponible" },
  { image: MasterBlack,  status: "Disponible" },
  { image: Heronier,  status: "Disponible" },
  { image: OnLine,  status: "Disponible" },
  { image: RedactTactic,  status: "Disponible" },
  { image: Baldia,  status: "Disponible" },
  { image: Huy,  status: "Disponible" },
  { image: Touch,  status: "Disponible" },
  { image: Carbon,  status: "Disponible" },
  { image: Montana,  status: "Disponible" },
  { image: ShipBank,  status: "Disponible" },
  { image: FoxSearch,  status: "Disponible" },
  { image: PillowWillow,  status: "Disponible" },
  { image: ClipCoin,  status: "Disponible" },
  { image: Focus,  status: "Disponible" },
  { image: CiaroGiglo,  status: "Disponible" },
  { image: Makro,  status: "Disponible" },
  { image: MasterLeague,  status: "Disponible" },
  { image: Completo,  status: "Disponible" },
  { image: GoldenEggs,  status: "Disponible" },
  { image: TianZun,  status: "Disponible" },
  { image: Samawi,  status: "Disponible" },
  { image: WorkSchool,  status: "Disponible" },
  { image: SoundPoint,  status: "Disponible" },
  { image: CasaNueva,  status: "Disponible" },
  { image: MontanaAirport,  status: "Disponible" },
  { image: Marazzo,  status: "Disponible" },
  { image: Redentor,  status: "Disponible" },
  { image: ViwMap,  status: "Disponible" },
  
];


export default function Concepts(props) {
  const [concepts, setConcepts] = useState(imageList);

  const conceptosDisponibles = concepts.filter((concept) => concept.status === "Disponible").length;
  const conceptosActuales = concepts.length;

  const handleStatusChange = (index, status) => {
    const updatedConcepts = [...concepts];
    if (status === "vendido") {
      updatedConcepts[index].status = "vendido";
    }
    setConcepts(updatedConcepts);
  };

  return (
    <Fragment>
      <div className="w-95 r-h-c h-a h-pr-fl-ma   b-s-b-b m-t-20px">
        <div className="w-100 bg-d h-a h-pr-fl-ma  m-b-20px m-d-b p-10px ns-br-r-2 b-s-b-b ">
        <div className="w-100  h-a h-pr-fl-ma p-20px ">
          <Title h1="Conceptos" className=" noselect w-100 t-a-c m-t-100px m-b-100px" />
        </div>
        <div className="w-100  h-a h-pr-fl-ma m-d-b ns-bg-e ns-br-r-2 b-s-b-b  p-10px">
          <Title h4="Solicitenos cualquiera de estos conceptos como base para crear su logo, contactanos en:" className="w-100 t-a-c noselect m-b-10px" />
          <Title h3="hello@OrigenStudios.com" className="w-a  t-a-c bg-d ns-br-r-2 p-10px" />

        </div>
        </div>
        <div className="w-100 r-h-c h-a h-pr-fl-ma p-20px m-b-20px noselect b-s-b-b">
          <div className="w-a m-w-100 h-a h-pr-fl-ma bg-d f-w-bo f-f-Gilroy br-r-50px p-10px r-h-c flexbox">
            <div className="flexbox">
              <div className="h-pr-fl-ma p-10px">Conceptos Disponibles:</div>
              <div className="h-pr-fl-ma p-10px bg-g-green br-r-50px">{conceptosDisponibles}</div>
            </div>
            <div className="flexbox">
              <div className="h-pr-fl-ma p-10px">Conceptos Actuales:</div>
              <div className="h-pr-fl-ma p-10px ns-bg-e br-r-50px">{conceptosActuales}</div>
            </div>
          </div>
        </div>



      <div className="w-100 h-a h-pr-fl-ma polka ns-br-r-2 p-10px b-s-b-b noselect m-b-20px">
        <div className="w-100 h-a p-5px box-container noselect m-b-20px  b-s-b-b  ">
        {concepts.map((concept, index) => (
              <Box
                key={index}
                Disponible={concept.status}
                image={concept.image}
                alt="Conceptos"
                number={index + 1}
                onStatusChange={(status) => handleStatusChange(index, status)}
              />
            ))}
        </div>
      </div>

       {/* COORDINAR REUNIÓN AHORA */}
       <div className="w-100 m-w-100 r-h-c h-a h-pr-fl-ma f-f-Gilroy bg-d bg-d bg-d ns-br-r-1  ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-100px">
          <div className="w-100 h-pr-fl-ma bg-d p-20px d-i-f m-d-b">
            <div className="w-70 m-w-100 h-pr-fl-ma t-a-c f-w-bo ns-f-s-medium noselect ">
              {" "}
              Coordinemos una reunión hoy mismo y hagamos realidad su nueva marca!
            </div>
            <div className="w-a h-pr-fl-ma m-w-100 p-20px flexbox">
              {" "}
              <Btn
                className="ns-bg-e f-w-bo r-h-c "
                text="Coordinar reunión &nbsp;"
                enlace={
                  "https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                }
              >
                <div className="w-25px   h-25px m-5px h-pr-fl-ma">
                  <img
                 
                    className="w-100 h-100 h-pr-fl-ma "
                    Style="stroke: #ffffff !important;"
                    src={MessageWriting}
                    alt="Coordinar"
                  />
                </div>
              </Btn>
            </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}
