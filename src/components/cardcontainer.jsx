import React from "react";
import "../Styles/seed.css";

export default function CardContainer(props) {
  const { children } = props;

  return (
    <>
      <div className="card-mosaic m-b-20px  ">
        {children}
      </div>
    </>
  );
}
