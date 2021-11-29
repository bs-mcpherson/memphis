import React, { useState } from 'react';

export const Navigation = (props) => {
  let [isVisible, setIsVisible] = useState(props.isVisible);
  return(
    <>
    <div style={isVisible ? {"display": "block"} : {"display":"none"}} className="main-menu">
      <ul>
        <li onClick={props.click1}>{props.nav1}</li>
        <li onClick={props.click2}>{props.nav2}</li>
        <li onClick={props.click3}>{props.nav3}</li>
      </ul>
    </div>
    </>
  );
};
