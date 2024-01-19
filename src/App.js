import React from "react";
import Container from "react-bootstrap/Container";
import { TodoList } from "./components/todo/todo-list";

function App() {
  return (
    <Container>
      <h1>Todo List:</h1>
      <TodoList />
    </Container>
  );
}

export default App;
