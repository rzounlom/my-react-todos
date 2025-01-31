import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  console.log(todos);

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id}>
          <Todo
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
