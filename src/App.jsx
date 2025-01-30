import "./App.css";

import { Button } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";
import { useState } from "react";

function App() {
  console.log(defaultTodos);
  const [todos, setTodos] = useState(defaultTodos); //State to store todos

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: "New Todo",
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo App Example</h1>
      <Button className="mt-2 mb-2" onClick={addTodo}>
        Add Todo
      </Button>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
