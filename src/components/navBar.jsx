import React from "react";

import "../Styles/seed.css";

export default function navBar(props) {
  const { className, children } = props;

  return (
    <>
      <div className={` ${className} h-pr-fl-ma w-a p-10px h-100 b-s-b-b `}>
        {/* navBar*/}

        {children}
      </div>
    </>
  );
}
