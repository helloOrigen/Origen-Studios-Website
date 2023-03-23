import React from 'react'
import { Fragment } from "react";
import Typewriter from "typewriter-effect";
import OSLogoSymbol from "../assets/logo/OS-Logo-Symbol-White-Svg.svg";
import CardContainer from "../components/cardcontainer";
import Card from "../components/card";
const Sponsors = () => {
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 40,
   
    
});

  return (
  <Fragment>

<div className="w-100 h-100 h-pr-fl-ma ">
  <div className="w-100 h-100  t-a-c f-f-Gilroy ns-f-s-medium">
  <div className="w-100 h-a r-v-c">
<Typewriter 
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Buscando información')
                    .pauseFor(1000)
                    .typeString('.')
                    .pauseFor(1000)
                    .typeString('.')
                    .pauseFor(1000)
                    .typeString('.')
                    .pauseFor(1000)
                    .deleteAll(10)
                    .typeString('"Sponsors" En construcción. <br/> Disculpe las molestias.')
                    .pauseFor(200)

                    .start();
                }} options={{ delay: 80, }}
              />
               
              </div>    </div>

              

</div>


    </Fragment>
  
 
  )
}

export default Sponsors