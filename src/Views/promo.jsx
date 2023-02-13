

import React, { Fragment } from "react";
import PromoTitulo from "../assets/images/promo/casos-de-exito-titulo.svg"
import PromoOferta from "../assets/images/promo/casos-de-exito-oferta.svg"
import PromoInfo from "../assets/images/promo/casos-de-exito-info.svg"
import { Link } from "react-router-dom";


const Promo = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto  of-x-hidden p-20px">
      <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
        
        <img src={PromoTitulo} alt="" className="w-100 h-100 h-pr-fl-ma" Style="object-fit: contain;"/>




    </div>
    <div className="m-d-n d-b w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
        
        <img src={PromoOferta} alt="" className="w-100 h-100 h-pr-fl-ma" Style="object-fit: contain;"/>




    </div>
    <div className="m-d-b d-n w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
        
        <img src={PromoOferta} alt="" className="w-100 h-100 h-pr-fl-ma" Style="object-fit: contain; transform:scale(1.5);"/>




    </div>
    <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
        

    <div className="w-80 d-b m-d-n r-h-c h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
    <Link to="/process">
        <img src={PromoInfo} alt="" className="w-100  h-e-scale c-p h-100 h-pr-fl-ma" Style="object-fit: contain;"/>

        </Link>



    </div>
    <div className="m-d-b d-n w-50 h-80px h-pr-fl-ma b-s-b-b p-20px">
        

&nbsp;



        </div>
    <div className="w-90 d-n m-d-b r-h-c h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
        <Link to="/process">
        <img src={PromoInfo} alt="" className="w-100  h-e-scale c-p h-100 h-pr-fl-ma" Style="object-fit: contain; transform:scale(1.2);"/>

        </Link>


    </div>
        
                </div>
        <div className="w-50 h-50px h-pr-fl-ma b-s-b-b p-20px">
        

&nbsp;



        </div>




      </div>

    </Fragment>
  );
};

export default Promo;
