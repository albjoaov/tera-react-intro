import { useState, useEffect, useRef } from "react";

const Todo = () => {
  // Estado
  const [todos, setTodos] = useState([]);

  // Data Binding
  // como faríamos no JS puro: const input = document.querySelector("[name='todo']")
  const inputText = useRef();

  // Ciclo de Vida
  useEffect(() => {
    console.log("Componente Construído!");
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
    return () => {
      console.log("Componente Destruído!");
    };
  }, []);

  // Eventos
  function addTodo(event) {
    event.preventDefault();
    const novoTodo = inputText.current.value;
    const novosValoresDoTodo = [...todos, novoTodo];
    setTodos(novosValoresDoTodo);
    localStorage.setItem("todos", JSON.stringify(novosValoresDoTodo));
    inputText.current.value = "";
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Escreve o seu TODO" ref={inputText} />
        <input type="submit" value="Novo TODO" />
      </form>
    </div>
  );
};

export default Todo;
