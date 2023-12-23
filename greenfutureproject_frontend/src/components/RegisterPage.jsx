import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../redux/actions";
import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";

const RegisterPage = () => {

    const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {username, password, email, nome, cognome };
    dispatch(registerAction(JSON.stringify(body)));
    navigate("/");
  };

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <Form.Group controlId="formName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your surname"
          value={cognome}
          onChange={(e) => setCognome(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Button type="submit">
        REGISTER
      </Button>
    </Form>
        </Container>
    )
}

export default RegisterPage