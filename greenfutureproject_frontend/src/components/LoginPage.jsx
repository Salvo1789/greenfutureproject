import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataAction, loginAction } from "../redux/actions";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to="/register" className="btn btn-primary">
          <Button>Register</Button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
