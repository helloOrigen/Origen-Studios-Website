import React, { Fragment } from "react";

import ContentBox from "../components/contentBox";
import Title from "../components/title";
import Btn from "../components/btn";
import ImageComponent from "../components/ImageComponent";
import GoogleAd from "../components/GoogleAd";

import CreateIcon from "../assets/icons/create.svg";

const Plans = ({ children }) => {
  return (
    <Fragment>
      <div className="w-95 r-h-c m-w-100 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <Title
          h1="Todos los planes"
          className="w-100 t-a-c m-t-100px m-b-100px"
        ></Title>

        <div className="w-90 h-pr-fl-ma h-100 b-s-b-b r-h-c flexbox j-c-c  tab-d-b m-d-b">
          {/* //green PLANES: 1 - PLANES DE MARCA */}
          <div className="w-25 tab-w-50 m-w-100 h-a h-pr-fl-ma p-5px  ns-bg-darkgreen">
            <div className="w-100 h-a h-pr-fl-mab-s-b-b ">
              <div className="w-100 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
                <ImageComponent
                  className="w-and-h-150px b-s-b-b  h-pr-fl-ma ns-bg-darkgreen ns-br-r-1"
                  imageUrl={CreateIcon}
                ></ImageComponent>
                <Title
                  h4="IDENTIDAD DE MARCA"
                  className="p-10px w-100 t-a-c  ns-br-r-1"
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <ContentBox
                    className="w-100 t-a-c ns-bg-darkgreen f-w-bo p-10px"
                    text="Ideal para su emprendimiento/empresa."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes únicos"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Para ocasiones especiales, y/o puntualidades."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes Mensuales"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Te acompañamos en todo el mes."
                  ></ContentBox>

                  <Btn
                    className="w-100 p-20px f-w-bo m-t-20px ns-bg-darkgreen "
                    text="Ver más..."
                    enlace="/plans/identity"
                  ></Btn>
                  <ContentBox
                    className="w-100 t-a-c m-t-5px f-w-bo "
                    Style="font-size: 10px;"
                  >
                    OrigenStudios.com/plans/identity
                  </ContentBox>
                </div>
              </div>
            </div>
          </div>

          {/* //blue PLANES: 2 - PLANES DE CONTENIDO */}

          <div className="w-25 tab-w-50 m-w-100 h-a h-pr-fl-ma p-5px  ns-bg-blue ">
            <div className="w-100 h-a h-pr-fl-mab-s-b-b ">
              <div className="w-100 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
                <ImageComponent
                  className="w-and-h-150px b-s-b-b  h-pr-fl-ma ns-bg-blue ns-br-r-1"
                  imageUrl={CreateIcon}
                ></ImageComponent>
                <Title
                  h4="CREACIÓN DE CONTENIDO"
                  className="p-10px w-100 t-a-c  ns-br-r-1"
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <ContentBox
                    className="w-100 t-a-c ns-bg-blue f-w-bo p-10px"
                    text="Ideal para su emprendimiento/empresa."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes únicos"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Para ocasiones especiales, y/o puntualidades."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes Mensuales"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Te acompañamos en todo el mes."
                  ></ContentBox>

                  <Btn
                    className="w-100 p-20px f-w-bo m-t-20px ns-bg-blue "
                    text="Ver más..."
                    enlace="/plans/posts"
                  ></Btn>
                  <ContentBox
                    className="w-100 t-a-c m-t-5px f-w-bo "
                    Style="font-size: 10px;"
                  >
                    OrigenStudios.com/plans/posts
                  </ContentBox>
                </div>
              </div>
            </div>
          </div>

          {/* //blue PLANES: 2 - PLANES DE CONTENIDO */}

          <div className="w-25 tab-w-50 m-w-100 h-a h-pr-fl-ma p-5px  ns-bg-violet ">
            <div className="w-100 h-a h-pr-fl-mab-s-b-b ">
              <div className="w-100 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
                <ImageComponent
                  className="w-and-h-150px b-s-b-b  h-pr-fl-ma ns-bg-violet ns-br-r-1"
                  imageUrl={CreateIcon}
                ></ImageComponent>
                <Title
                  h4="ASESORÍA (proximamente)"
                  className="p-10px w-100 t-a-c  ns-br-r-1"
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <ContentBox
                    className="w-100 t-a-c ns-bg-violet f-w-bo p-10px"
                    text="Ideal para su emprendimiento/empresa."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes únicos"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Para ocasiones especiales, y/o puntualidades."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes Mensuales"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Te acompañamos en todo el mes."
                  ></ContentBox>

                  <Btn
                    className="w-100 p-20px f-w-bo m-t-20px ns-bg-violet "
                    text="Ver más..."
                    enlace="/plans/specials"
                  ></Btn>
                  <ContentBox
                    className="w-100 t-a-c m-t-5px f-w-bo "
                    Style="font-size: 10px;"
                  >
                    OrigenStudios.com/plans/specials
                  </ContentBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  // !                           ADS                         */}
      <div className="w-95 r-h-c m-w-90 h-a h-pr-fl-ma  m-d-b  b-s-b-b m-b-20px">
        <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma ">
          <GoogleAd slot="9886328101" googleAdId="ca-pub-6375603115544403" />
        </div>
      </div>

      <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
    </Fragment>
  );
};

export default Plans;
