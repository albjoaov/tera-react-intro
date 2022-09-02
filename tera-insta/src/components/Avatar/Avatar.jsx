import React, { useState } from "react";

export default function Avatar({ clicavel, imgSrc }) {
  const [clicado, setClicado] = useState(false);

  function handleAvatarClick() {
    if (clicavel) {
      setClicado(!clicado);
    }
  }

  return (
    <>
      <button
        className={`user__thumb ${clicado ? "user__thumb--hasNew" : ""}`}
        onClick={handleAvatarClick}
      >
        <span className="user__thumb__wrapper">
          <img src={imgSrc} alt="Avatar do Usuário" />
        </span>
      </button>
    </>
  );
}
