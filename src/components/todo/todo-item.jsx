import React, { useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import DeleteForever from "@mui/icons-material/DeleteForever";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./css/todo-item.css";

export const TodoItem = ({ todo, deleteTodo }) => {
  const [crossOut, setCrossOut] = useState(false);
  return (
    <Container>
      <Row>
        <Col className={crossOut && "strike"}>{todo.name}</Col>
        <Col className={crossOut && "strike"}>{todo.description}</Col>
        <Col>
          <ButtonGroup size="sm">
            <Button variant="success" onClick={() => setCrossOut(!crossOut)}>
              <CheckIcon />
            </Button>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
              <DeleteForever />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};
