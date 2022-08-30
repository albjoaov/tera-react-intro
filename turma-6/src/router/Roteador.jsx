import React from "react";
import { Route, Routes } from "react-router-dom";
import EstadosAgua from "../components/agua/EstadosAgua";
import TrocaTema from "../components/TrocaTema/TrocaTema";
import Counter from "../components/counter/Counter";
import Todo from "../components/todo/todo";
import { TemaProvider } from "../components/TrocaTema/TemaContext";

export default function Roteador() {
  return (
    <Routes>
      <Route path="/agua" element={<EstadosAgua />}></Route>
      <Route path="/counter" element={<Counter />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route
        path="/troca-tema"
        element={
          <TemaProvider>
            <TrocaTema />
          </TemaProvider>
        }
      ></Route>
    </Routes>
  );
}
