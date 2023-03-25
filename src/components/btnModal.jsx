import React, { useState } from "react";
import Zoomboton from "../components/Zoomboton";
function BtnModal(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const {
    children,
    className,
      } = props;

  return (
    <div  className={` ${className} h-pr-fr-ma  p-10px of-v r-v-c`}>
         <button onClick={toggleVisibility} className="c-white  f-w-bo p-l-10px p-r-10px  m-r-5px m-l-5px h-pr-fl-ma w-a  ns-bg-e h-e-ghost-e t-03s  h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e d-i-f f-f-Gilroy" >Ajustes</button>

      {isVisible && <div  Style="top: 50px; width: 250px; height: 300px; left: 0px; right: 0px; margin: auto; position: absolute; background: red; p-20px; z-index: 99992;"> {children}<Zoomboton className="h-pr-fr-ma"/></div>}
    </div>
  );
}

export default BtnModal;



