import React, { Fragment} from "react";
import "../Styles/seed.css";
import { Link } from "react-router-dom";
import NavBarBtn from "./navBarBtn";
import "../Styles/home.css";
import BannerMenu from "../assets/images/promo/casos-de-exito-banner-menu.gif"
 const mobileMenu=()=> {
 

  return (

    <Fragment>


  <input type="checkbox" id="menu"/> 
  <ul className="w-100 " Style="position: fixed; left:0px; right:0px; top: 0px; bottom: 0px; z-index: 99998;">
 
 <div
        className={`d-n m-d-b of-auto  bg-linear-b-t-menu`}
        Style="position: fixed; left:0px; right:0px; top: 0px; bottom: 0px; z-index: 99998;"
      >
        
        <div className="w-100 h-a r-v-b  h-pr-fl-ma">
          <Link to="/team" className="h-e   selected">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: #666666;"
            >
              <NavBarBtn  className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Nosotros"}></NavBarBtn>
            </div>
          </Link>
     
          <Link to="/services" className="h-e selected">
            {" "}
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: #666666;"
            >
              <NavBarBtn className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Servicios"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/plans" className="h-e selected">
            {" "}
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: #666666;"
            >
              <NavBarBtn  className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Planes"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/process" className="h-e selected">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: #666666;"
            >
              <NavBarBtn  className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Procedimiento"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/gallery" className="h-e selected">
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: #666666;"
            >
              <NavBarBtn news className="b w-100 h-100 h-pr-fl-ma p-10px p-t-30px" text={"Galería"}></NavBarBtn>
            </div>
          </Link>
         
          <Link to="/promo"className="h-e selected" >
            <div
              className="w-100 h-a h-pr-fl-ma hover-underline-animation  "
              Style="border-bottom: 1px solid; border-color: #666666;"
            >
              <NavBarBtn  news className="w-100 h-100 h-pr-fl-ma p-10px p-t-30px b" text={"Promociones"}></NavBarBtn>
            </div>
          </Link>
          <Link to="/promo" className="h-e selected" >
          <div
className="w-100 h-a h-pr-fl-ma p-b-10px p-t-10px "

><div className="m-t-20px m-b-30px w-100 h-100px h-pr-fl-ma t-a-c b-s-b-b hover-underline-animation "><div className="h-pr-fl-ma w-a h-a centered "><img src={BannerMenu} className="w-100 h-100 h-pr-fl-ma" Style="object-fit: contain;" alt="" /> </div> </div></div>   </Link>
        </div>
    </div>

     </ul>
   
     </Fragment>
  );
}


export default mobileMenu
