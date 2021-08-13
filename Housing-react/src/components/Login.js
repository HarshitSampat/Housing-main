
import Navbar1 from "../components/Navbar";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/login.css";
import axios from 'axios'
import Helmet from 'react-scripts'

export default function Login({ }) {
  <Helmet>
    <title>Login</title>
  </Helmet>
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
      return email.length > 0 && password.length > 0;
    }

 async function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
   const data = {
      "email":email,
      "password":password
    }
   const res = await axios.post("http://localhost:3001/api/user/login", data)
   console.log(res);
  }

  return (<>
    <Navbar1 className="my-5"></Navbar1>
    <div className="Login mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            className="ml-5"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
    </>
  );
}