import React from "react";
import "./Agua.css";
// const propriedades = props
// const temperatura = propriedades.temperatura

// const { temperatura } = props
export default function Agua({ temperatura }) {
  return (
    <div className="agua" data-temperatura={temperatura}>
      {temperatura}
    </div>
  );
}
