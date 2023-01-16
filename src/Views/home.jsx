import React, { Fragment } from "react";
import Wallpaper1 from "../assets/images/wallpaper-1.png";
import Wallpaper2 from "../assets/images/wallpaper-2.png";
import Wallpaper3 from "../assets/images/wallpaper-3.png";
import Wallpaper4 from "../assets/images/wallpaper-4.png";
import Wallpaper5 from "../assets/images/wallpaper-5.png";
import Wallpaper6 from "../assets/images/wallpaper-6.png";
import Wallpaper7 from "../assets/images/wallpaper-7.png";
import Wallpaper8 from "../assets/images/wallpaper-8.png";
import "../Styles/seed.css";
import "../Styles/home.css"
export default function Home() {
  return (
    <>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b flexbox">
        <div className="m-w-100 w-50 h-100  b-s-b-b  p-r-10px">
          <div className="w-100 h-a h-pr-fl-ma r-v-c b-s-b-b">
            <h1
              className="f-f-Gilroy c-white r-v-c h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 50px; line-height: 55px;"
            >
              <b>Le damos la bienvenida...</b>{" "}
            </h1>
            <h1
              className="f-f-Gilroy c-white r-v-c h-a p-l-10px b-s-b-b m-a"
              Style="font-size: 25px; line-height: 30px;"
            >
              <b>Se encuentra en el origen de su nueva marca.</b>
            </h1>

            <span className="m-a b-s-b-b divider "></span>
          </div>
        </div>
        <div className="m-d-n w-50 h-100 b-s-b-b ">
          <div className="w-50 h-100 h-pr-fl-ma  b-s-b-b ">
            <div class="pictures">
              <img src={Wallpaper1} alt="" className="w-100 h-100 h-pr-fl-ma picture" />
              <img src={Wallpaper2} alt="" className="w-100 h-100 h-pr-fl-ma picture" />
              <img src={Wallpaper3} alt="" className="w-100 h-100 h-pr-fl-ma picture" />
              <img src={Wallpaper4} alt="" className="w-100 h-100 h-pr-fl-ma picture" />
              <img src={Wallpaper5} alt="" className="w-100 h-100 h-pr-fl-ma picture" />
              <img src={Wallpaper6} alt="" className="w-100 h-100 h-pr-fl-ma picture" />
              <img src={Wallpaper7} alt="" className="w-100 h-100 h-pr-fl-ma picture" />
              <img src={Wallpaper8} alt="" className="w-100 h-100 h-pr-fl-ma picture" />


            </div>
          </div>


        </div>
      </div>
    </>
  );
}
