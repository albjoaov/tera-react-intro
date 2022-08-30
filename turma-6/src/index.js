import React from "react";
import ReactDOM from "react-dom/client";
import NavMenu from "./components/NavMenu/NavMenu";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Roteador from "./router/Roteador";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu />
      <Roteador />
    </BrowserRouter>
  </React.StrictMode>
);
