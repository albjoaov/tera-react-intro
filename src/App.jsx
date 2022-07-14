import React from "react";
import { Routes, Route } from "react-router-dom";
import Agua from "./components/Agua";
import Contador from "./components/Contador";
import Todo from "./components/Todo";
import TrocaTema from "./components/TrocaTema";
import TemaProvider from "./components/TrocaTema/TemaContext";

export default function App() {
  return (
    <Routes>
      <Route path="/agua" element={<Agua />} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/todo" element={<Todo />} />
      <Route
        path="/troca-tema"
        element={
          <TemaProvider>
            <TrocaTema />
          </TemaProvider>
        }
      />
    </Routes>
  );
}
