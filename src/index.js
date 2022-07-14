import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TrocaTema from "./components/TrocaTema/TrocaTema";
import TemaProvider from "./components/TrocaTema/TemaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TemaProvider>
      <TrocaTema />
    </TemaProvider>
  </React.StrictMode>
);
