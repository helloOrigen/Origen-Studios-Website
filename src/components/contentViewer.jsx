import React, { Fragment } from "react";
import "../Styles/seed.css";

export default function contentViewer(props) {
  const { className, children } = props;

  return (
    <Fragment>
      <div className={` ${className} h-pr-fl-ma r-h-c b-s-b-b `}>
        {/* container */}

        {children}
      </div>
    </Fragment>
  );
}
