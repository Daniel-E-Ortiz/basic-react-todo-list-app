import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { TodoItem } from "./todo-item";
import { TodoInput } from "./todo-input";
import { initList } from "../../constants/constants";

export const TodoList = () => {
  const [todoList, setTodoList] = useState(initList);
  const [id, setId] = useState(0);

  const addTodo = (name, description, complete = false) => {
    setId(id + 1);
    setTodoList([
      ...todoList,
      {
        id: id,
        name: name,
        description: description,
        complete: complete,
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };
  return (
    <ListGroup>
      {todoList.map((todo) => (
        <ListGroup.Item key={todo.id}>
          <TodoItem todo={todo} deleteTodo={deleteTodo} />
        </ListGroup.Item>
      ))}
      <ListGroup.Item>
        <TodoInput addTodo={addTodo} />
      </ListGroup.Item>
    </ListGroup>
  );
};
