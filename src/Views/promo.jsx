import React, { Fragment } from "react";
import PromoTitulo from "../assets/images/promo/casos-de-exito-titulo.svg";
import PromoOferta from "../assets/images/promo/casos-de-exito-oferta.svg";
import PromoInfo from "../assets/images/promo/casos-de-exito-info.svg";
import ContentBox from "../components/contentBox";
import { Link } from "react-router-dom";
import Btn from "../components/btn";
import MessageWriting from "../assets/icons/message_writing.svg";

import Thumbnail1 from "../assets/images/promo/thumbnail-1.jpg";
import Thumbnail2 from "../assets/images/promo/thumbnail-2.jpg";

import Thumbnail3 from "../assets/images/promo/thumbnail-3.jpg";

import Thumbnail4 from "../assets/images/promo/thumbnail-4.jpg";

const Promo = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto  of-x-hidden p-20px">
        <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
          <img
            src={PromoTitulo}
            alt=""
            className="w-100 h-100 h-pr-fl-ma"
            Style="object-fit: contain;"
          />
        </div>
        <div className="m-d-n d-b w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
          <img
            src={PromoOferta}
            alt=""
            className="w-100 h-100 h-pr-fl-ma"
            Style="object-fit: contain;"
          />
        </div>
        <div className="m-d-b d-n w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-50px">
          <img
            src={PromoOferta}
            alt=""
            className="w-100 h-100 h-pr-fl-ma"
            Style="object-fit: contain; transform:scale(1.5);"
          />
        </div>

        {/* PANEL IZQUIERDO */}

        {/* PANEL DERECHO */}
        <div className="m-w-100 w-80 r-h-c h-a h-pr-fl-ma b-s-b-b  m-t-50px  p-10px">
          {/* BLOQUE RESPONSIVE 1 */}
          <div className="w-100 h-a h-pr-fl-ma p-10px bg-black-node-o-70 blur ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
            <div
              className="m-w-100 w-300px h-200px h-pr-fl-ma "
              Style="z-index: 123;"
            >
              <img
                src={Thumbnail1}
                alt=""
                className="w-100 h-100 h-pr-fl-ma h-e-scale"
                Style="object-fit: cover;"
              />
            </div>
            <div className="m-w-100 w-80 h-200px m-h-300px h-pr-fl-ma bg-black ">
              <div className="m-w-100 w-90 centered p-20px">
                <ContentBox
                  className=""
                  number={"1"}
                  title={"LOGOTIPO:"}
                  text={
                    "Producimos su nueva y mejorada imagen de marca, o le actualizamos la que ya posee. Se incluyen todos los parámetros de rendimiento, calidad y revisión con Inteligencia Artificial."
                  }
                />
              </div>
            </div>
          </div>

          {/* BLOQUE RESPONSIVE 2 */}
          <div className="w-100 h-a h-pr-fl-ma p-10px bg-black-node-o-70 blur ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
            <div
              className="m-w-100 w-300px h-200px h-pr-fl-ma "
              Style="z-index: 123;"
            >
              <img
                src={Thumbnail2}
                alt=""
                className="w-100 h-100 h-pr-fl-ma h-e-scale"
                Style="object-fit: cover;"
              />
            </div>
            <div className="m-w-100 w-80 h-200px m-h-300px h-pr-fl-ma bg-black ">
              <div className="m-w-100 w-90 centered p-20px">
                <ContentBox
                  className=""
                  number={"2"}
                  title={"MANUAL DE USO:"}
                  text={
                    "El manual de uso incluye los detalles más importantes para la implementación de su marca. Conozca los márgenes, composición tipográfica, colores, casos de uso y prohibiciones."
                  }
                />
              </div>
            </div>
          </div>

          {/* BLOQUE RESPONSIVE 3 */}
          <div className="w-100 h-a h-pr-fl-ma p-10px bg-black-node-o-70 blur ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
            <div
              className="m-w-100 w-300px h-200px h-pr-fl-ma "
              Style="z-index: 123;"
            >
              <img
                src={Thumbnail3}
                alt=""
                className="w-100 h-100 h-pr-fl-ma h-e-scale"
                Style="object-fit: cover;"
              />
            </div>
            <div className="m-w-100 w-80 h-200px m-h-300px  h-pr-fl-ma bg-black ">
              <div className="m-w-100 w-90 centered p-20px">
                <ContentBox
                  className=""
                  number={"3"}
                  title={"PUBLICIDAD MASIVA:"}
                  text={
                    "Publicaremos (con su permiso) nuestro caso de éxito y la colaboración con su marca en todas nuestras redes sociales y por supuesto en nuestra web OrigenStudios.com. Puede extender este plazo haciéndose nuestro “Sponsor”."
                  }
                />
              </div>
            </div>
          </div>

          {/* BLOQUE RESPONSIVE 4 */}
          <div className="w-100 h-a h-pr-fl-ma p-10px bg-black-node-o-70 blur ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
            <div
              className="m-w-100 w-300px h-200px  h-pr-fl-ma "
              Style="z-index: 123;"
            >
              <img
                src={Thumbnail4}
                alt=""
                className="w-100 h-100 h-pr-fl-ma h-e-scale"
                Style="object-fit: cover;"
              />
            </div>
            <div className="m-w-100 w-80 h-200px m-h-300px h-pr-fl-ma bg-black ">
              <div className="m-w-100 w-90 centered p-20px">
                <ContentBox
                  className=""
                  number={"4"}
                  title={"ASESORÍA DE MARCA:"}
                  text={
                    "Tendrá acceso a (1) consulta de asesoría de marca completamente personalizada durante el primer mes posterior a la creación de su Logo. Gratis por única vez sin costo mendiante esta promoción única."
                  }
                />
              </div>
            </div>
          </div>
        </div>

{/* COORDINAR REUNIÓN AHORA */}
<div className="w-100 h-a h-pr-fl-ma p-10px">
<div className="w-80 m-w-100 r-h-c h-a h-pr-fl-ma f-f-Gilroy p-10px bg-black-node-o-70 blur ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
<div className="w-100 h-pr-fl-ma bg-black p-20px d-i-f m-d-b">
<div className="w-70 m-w-100 h-pr-fl-ma ns-f-s-medium"> Coordina una reunión hoy mismo <br /> y haga despegar su marca!</div>
<div className="w-a h-pr-fl-ma m-w-100 p-20px flexbox ">  <Btn
                    className=""
                    text="Coordinar reunión &nbsp;"
                    enlace={"https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"}
                  >
                    <div className="w-25px h-25px m-5px h-pr-fl-ma">
                      <img
                        src={MessageWriting}
                        className="w-100 h-100 h-pr-fl-ma"
                        Style="stroke: #ffffff !important;"
                        alt="Coordinar"
                      />
                    </div>
                  </Btn></div>
</div>
</div>
</div>


        <div className="w-50 h-50px h-pr-fl-ma b-s-b-b p-20px">&nbsp;</div>
      </div>
    </Fragment>
  );
};

export default Promo;
