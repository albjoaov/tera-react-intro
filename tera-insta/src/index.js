import React from "react";
import ReactDOM from "react-dom/client";

import "./css/normalize.css";
import "./css/main.css";
import "./css/fontawesome.min.css";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
