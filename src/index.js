import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo from "./components/Todo";
import Contador from "./components/Contador";
// import TrocaTema from "./components/TrocaTema";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provedor> */}
    {/* <TrocaTema /> */}
    <Contador />
    <Todo />
    {/* </Provedor> */}
  </React.StrictMode>
);
