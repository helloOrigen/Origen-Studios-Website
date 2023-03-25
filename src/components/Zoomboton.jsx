

import React, { useState } from "react";



function Zoomboton(props) {
  



  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom(zoom + 10);
    window.document.body.style.zoom = `${zoom + 10}%`;
  };

  const handleZoomOut = () => {
    setZoom(zoom - 10);
    window.document.body.style.zoom = `${zoom - 10}%`;
  };

  const handleClick = () => {
    window.location.reload();
  };
  const {
    className,
      
    
      } = props;
  return (
    <div className={` ${className} h-pr-fr-ma  p-10px flexbox r-v-c`}>
      <button onClick={handleZoomIn} className="c-white  f-w-bo p-l-10px p-r-10px  m-r-5px m-l-5px h-pr-fl-ma w-a  ns-bg-e h-e-ghost-e t-03s  h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e d-i-f f-f-Gilroy" >+</button>
      <button onClick={handleZoomOut} className="c-white  f-w-bo p-l-10px p-r-10px  m-r-5px m-l-5px h-pr-fl-ma w-a  ns-bg-e h-e-ghost-e t-03s  h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e d-i-f f-f-Gilroy" >-</button>
      <button onClick={handleClick} className="c-white  f-w-bo p-l-10px p-r-10px   m-l-5px h-pr-fl-ma w-a  ns-bg-e h-e-ghost-e t-03s  h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e d-i-f f-f-Gilroy" >Reload</button>
     

    </div>
  );
}

export default Zoomboton;