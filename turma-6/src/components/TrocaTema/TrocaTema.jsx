import React, { useContext } from "react";
import { TemaContext } from "./TemaContext";
import Titulo from "./Titulo";

export default function TrocaTema() {
  // const contexto = useContext(TemaContext);
  const { escuro, tema, toggle } = useContext(TemaContext);

  return (
    <>
      <Titulo
        valor={"TrocaTema"}
        style={{
          backgroundColor: tema.backgroundColor,
          color: tema.color,
        }}
      />
      <header
        style={{
          backgroundColor: tema.backgroundColor,
        }}
      >
        <button onClick={toggle}>
          Clique aqui para alterar o tema para {!escuro ? "escuro" : "claro"}
        </button>
      </header>
    </>
  );
}
