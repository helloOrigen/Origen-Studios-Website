import React from "react";
import PropTypes from "prop-types";

const Box = ({ image, number, Disponible }) => {
  const boxStyle = {
    backgroundColor: Disponible === "vendido" ? "#ed293e" : Disponible === "Disponible" ? "#00b894" : "",
  };

  return (
    <div className="box-container b-s-b-b">
      <div className="box  bg-green h-e noselect bg-d ns-b-c-e-h ns-br-r-2 b-s-b-b ">
      
<div className="box-inside  p-a m-a b-s-b-b ">
        {Disponible && (
          <div
            className="m-a h-a l-10px t-10px b-s-b-b p-a m-a ns-f-s-normal f-f-Gilroy f-w-bo p-l-10px p-r-10px ns-br-r-1 b-s-b-b"
            style={boxStyle}
          >
            {Disponible}
          </div>
        )}
        {number && (
          <div  className="m-a b-10px r-10px h-a b-s-b-b p-a m-a ns-bg-e ns-f-s-normal f-f-Gilroy f-w-bo p-l-10px p-r-10px ns-br-r-1">
            {number}
          </div>
        )}</div>
        <div className="p-20px w-100">
      <img src={image} alt="Box Image" className="box-image b-s-b-b" /></div>
      </div>
    </div>
  );
};

Box.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.string,
  Disponible: PropTypes.string,
};

export default Box;
