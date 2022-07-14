import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Roteador from "./Roteador";
import NavBar from "./components/NavBar/Navbar";

import "./index.css";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Roteador />
    </BrowserRouter>
  </React.StrictMode>
);
