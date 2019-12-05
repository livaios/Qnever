import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="center">
        <br/>
        <br/>
        <br/>
        <div className="center">
            <h1>
                Welcome to Qnever
            </h1>
            <h2>
                Where you never have to wait in line again
            </h2>
        </div>
        <br/>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email </FormLabel>
          <br/>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <br/>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <br/>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <br/>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
      <br/>
      <div className="center">
        <Button block bsSize="large" type ="submit">
            Signup
        </Button> 
      </div>
    </div>
  );
}