import React, { Fragment } from "react";



export default function SubMenu(props) {
  const { children } = props;

  return (
    <Fragment>
            <div className="w-100 h-50px h-pr-fl-ma blur b-s-b-b flexbox of-h">{children}</div>
           
    </Fragment>
  );
}
