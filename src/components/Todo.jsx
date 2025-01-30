import "./Todo.css";

import { Button } from "react-bootstrap";

export default function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="todo">
      <p className={todo.completed ? "todo-title-completed " : ""}>
        {todo?.title}
      </p>
      <div className="btn-group">
        <Button
          variant="outline-primary"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="outline-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
