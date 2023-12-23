import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataAction, loginAction } from "../redux/actions";
import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "../styles/LoginStyle.css";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const userCurrent = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (token) {
      dispatch(getUserDataAction());
    }
  }, [token]);

  useEffect(() => {
    if (userCurrent) {
      navigate("/main");
    }
  }, [userCurrent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
    const body = { email, password };
    dispatch(loginAction(JSON.stringify(body)));
  };

  return (
    <Container id="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <label>Indirizzo email</label>
          <Form.Control
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Inserisci l'indirizzo email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </Form.Group>
        <Form.Group>
          <label>Password</label>
          <Form.Control
            type="password"
            
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        </div>
        <Button type="submit">
          LOGIN
        </Button>
        <Link to="/register">
          <Button>REGISTRATI</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default LoginPage;
