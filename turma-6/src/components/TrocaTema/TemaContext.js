import React, { useState } from "react";

const temas = {
  claro: {
    backgroundColor: "white",
    color: "black",
  },
  escuro: {
    backgroundColor: "black",
    color: "white",
  },
};

const estadoInicial = {
  ehEscuro: true,
  tema: temas.escuro,
  toggle: () => {},
};

const TemaContext = React.createContext(estadoInicial);
const LOCAL_STORAGE_KEY_THEME = "theme";

function TemaProvider({ children }) {
  const temaAtual = localStorage.getItem(LOCAL_STORAGE_KEY_THEME) === "true";
  const [escuro, setEscuro] = useState(temaAtual);

  const tema = escuro ? temas.escuro : temas.claro;

  const toggle = () => {
    const temaTrocado = !escuro;
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, JSON.stringify(temaTrocado));
    setEscuro(temaTrocado);
  };

  // Construção de um alicerce para os valores providos para um componente filho
  return (
    <TemaContext.Provider value={{ escuro, tema, toggle }}>
      {/* {props.children} */}
      {children}
    </TemaContext.Provider>
  );
}

export { TemaContext, TemaProvider };
