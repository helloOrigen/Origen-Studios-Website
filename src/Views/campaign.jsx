import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Campaign = () => {
  return (
    <Fragment>
          <div className="w-100 h-500px b-s-b-b h-pr-fl-ma bg-black of-h">
          <div className="w-100 h-a b-s-b-b h-pr-fl-ma centered t-a-c">
            <span className="w-100 h-a h-pr-fl-ma ns-f-s-big m-ns-f-s-big f-f-Gilroy ">Sección en construcción...</span>
            <span className="w-100 h-a h-pr-fl-ma ns-f-s-medium m-ns-f-s-medium f-f-Gilroy ns-c-e">Disculpe las molestias.</span>
           <Link to="/"><div className="w-100 h-a h-pr-fl-ma  m-t-40px"> <span className="w-a h-a h-pr-fl-ma r-h-c ns-f-s-medium m-ns-f-s-medium f-f-Gilroy c-white h-e-style hover-underline-animation"> ← Volver al inicio</span></div>
           </Link> 
       
            </div>
          </div>
 

    </Fragment>
  );
};

export default Campaign;