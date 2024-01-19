import React, { useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export const TodoInput = ({ addTodo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(name, description);
    setName("");
    setDescription("");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text>Todo Name</InputGroup.Text>
              <Form.Control
                required
                value={name}
                type="text"
                name="name"
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text>Todo Description</InputGroup.Text>
              <Form.Control
                required
                value={description}
                type="text"
                name="description"
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <Button variant="primary" size="sm" type="submit">
              <AddCircleIcon />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
