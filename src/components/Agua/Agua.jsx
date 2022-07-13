import React from "react";

import "./Agua.css";

export default function Agua(props) {
  return (
    <div className="agua" data-temperatura={props.temperatura}>
      {props.temperatura}
    </div>
  );
}
