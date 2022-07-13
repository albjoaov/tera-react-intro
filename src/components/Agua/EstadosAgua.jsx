import React, { useState } from "react";
import Titulo from "./Titulo";
import Agua from "./Agua";

export default function EstadosAgua() {
  const [temperatura, setTemperatura] = useState(0);

  return (
    <div>
      <Titulo texto={"Estados da Água"}></Titulo>
      <button onClick={() => setTemperatura(0)}>Temperatura 0</button>
      <button onClick={() => setTemperatura(15)}>Temperatura 15</button>
      <button onClick={() => setTemperatura(100)}>Temperatura 100</button>

      <Agua temperatura={temperatura} />
    </div>
  );
}
