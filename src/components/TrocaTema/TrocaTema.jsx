import React, { useContext } from "react";
import { TemaContexto } from "./TemaContext";

export default function TrocaTema() {
  const { tema, escuro, toggle } = useContext(TemaContexto);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: tema.backgroundColor, color: tema.color }}
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: tema.backgroundColor,
            color: tema.color,
          }}
        >
          Clique aqui para trocar o tema para {!escuro ? "escuro" : "claro"}
        </button>
      </header>
    </div>
  );
}
