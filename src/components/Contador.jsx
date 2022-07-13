import React, { useState, useEffect } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // O que será executado quando o evento for iniciado
    console.log("Componente iniciado");
    const intervalo = setInterval(() => {
      setContador((valor) => valor + 1);
    }, 1000);
    // Contar de um em um segundo (1000ms)

    return () => {
      // O que será executado quando o evento de destruição
      // do componente for iniciado
      console.log("Componente destruído");
      // Desinscrição de evento
      clearInterval(intervalo);
    };
    // O array de condições para os eventos acima
  }, []);

  // O array vazio indica que o useEffect
  // executará apenas uma vez na inicialização do componente

  return <div>Contador: {contador} </div>;
}
