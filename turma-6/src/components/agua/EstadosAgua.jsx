import React, { useState } from "react";
import Agua from "./Agua";

export default function EstadosAgua() {
  const [temperatura, setTemperatura] = useState(0);

  return (
    <>
      <h1>Estados da Água</h1>
      <button onClick={() => setTemperatura(0)}>Temperatura 0</button>
      <button onClick={() => setTemperatura(50)}>Temperatura 50</button>
      <button onClick={() => setTemperatura(100)}>Temperatura 100</button>
      <Agua temperatura={temperatura} />
    </>
  );
}
