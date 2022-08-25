import React, { useState, useEffect, useRef } from "react";

export default function Todo() {
  const KEY_NAME = "todos";
  // Hook useState
  // Criação do estado da aplicação
  const [todoList, setTodoList] = useState([]);
  // const estado = useState([]);
  // const todoList = estado[0]
  // const setTodoList = estado[1]

  // todoList = [1,2,3] NÃO FUNCIONA
  // setTodoList([1,2,3]) FUNCIONA

  // Ciclo de vida da aplicação
  // useEffect(funcaoCallback, ArrayDeDependencia)
  const funcaoDeRetorno = () => console.log("Componente foi destruído!");
  const callback = () => {
    // execução no início
    console.log("Olá, executei apenas uma vez, quando iniciado!");
    const todosDoLocalStorage = localStorage.getItem(KEY_NAME);
    const todosExistentes = JSON.parse(todosDoLocalStorage) || [];
    setTodoList(todosExistentes);
    return funcaoDeRetorno; // execução apenas na destruição do componente
  };
  useEffect(callback, []); // array de dependencia que vai dizer quando o hook sera executado
  // array vazio significa a execução do callback apenas uma vez ao iniciar o componente

  function addTodoNaDom(event) {
    event.preventDefault();
    const novoTodo = inputRef.current.value;
    const novosValoresDeTodo = [...todoList, novoTodo];
    localStorage.setItem(KEY_NAME, JSON.stringify(novosValoresDeTodo));
    setTodoList(novosValoresDeTodo);
    inputRef.current.value = "";
  }

  const inputRef = useRef();

  return (
    <div>
      <h1>Todo Application</h1>
      <ul>
        {
          // todoList = [1, 2, 3]
          // retorno = [<li>1</li>, <li>2</li>, <li>3</li>]
          todoList.map((todo) => (
            <li key={todo}>{todo}</li>
          ))
        }
      </ul>
      <form onSubmit={addTodoNaDom}>
        <input type="text" ref={inputRef} />
        <input type="submit" value="Adicionar novo TODO" />
      </form>
    </div>
  );
}
