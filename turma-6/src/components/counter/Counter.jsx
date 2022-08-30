import React, { useState, useEffect } from "react";

export default function Counter() {
  const [goodCounter, setGoodCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  useEffect(() => {
    console.log("Executar algo quando o componente for iniciado");
    const goodInterval = setInterval(() => {
      setGoodCounter((valorAntigo) => valorAntigo + 1);
    }, 1000);

    setInterval(() => {
      setBadCounter((valorAntigo) => valorAntigo + 1);
    }, 1000);

    return () => {
      // clean up function
      console.log("função que será executada assim que o componente morrer");
      clearInterval(goodInterval);
    };
  }, []);
  // []: Ele executa apenas uma vez quando o componente é iniciado
  // != [] (diferente de vazio): Ele vai executar sempre que algum elemento no array for modificado

  return (
    <div>
      <div>Good Counter: {goodCounter}</div>
      <div>Bad Counter: {badCounter} </div>
    </div>
  );
}
