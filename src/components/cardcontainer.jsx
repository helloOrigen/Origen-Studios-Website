import React from "react";


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
