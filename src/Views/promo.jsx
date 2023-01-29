import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";
import PromoTitulo from "../assets/images/promo/casos-de-exito-titulo.svg"
import PromoOferta from "../assets/images/promo/casos-de-exito-oferta.svg"

const Promo = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto p-20px">
      <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-20px">
        
        <img src={PromoTitulo} alt="" className="w-100 h-100 h-pr-fl-ma" Style="object-fit: contain;"/>




    </div>
    <div className="m-d-n d-b w-100 h-a h-pr-fl-ma b-s-b-b p-20px">
        
        <img src={PromoOferta} alt="" className="w-100 h-100 h-pr-fl-ma" Style="object-fit: contain;"/>




    </div>
    <div className="m-d-b d-n w-100 h-a h-pr-fl-ma b-s-b-b p-20px">
        
        <img src={PromoOferta} alt="" className="w-100 h-100 h-pr-fl-ma" Style="object-fit: cover;"/>




    </div>

        <div className="w-50 h-a h-pr-fl-ma b-s-b-b p-20px">
        





        </div>




      </div>

    </Fragment>
  );
};

export default Promo;
