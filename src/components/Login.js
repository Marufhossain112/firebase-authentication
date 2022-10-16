import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
// import app from "./firebase.init";
// const auth = getAuth(app);
const Login = () => {
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const handleForm = (e) => {
    setSuccess(false);
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setPassword(error.message);
      });
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPassword("Please Provide at leaset two parameters");
      return;
    }
    if (password.length < 6) {
      setPassword("Please Provide at leaset six digits passwords");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPassword("Please add at least one special character");
      return;
    }
    setPassword("");
  };

  return (
    <div>
      <div className="w-50 mx-auto">
        <h2 className="text-primary ">Please Login !!!</h2>
        <Form onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <p className="text-danger">{password}</p>
          {success && (
            <p className="text-success">You have submitted successfully.</p>
          )}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p>
          <small>
            Are You New Here, Please Register{" "}
            <Link to="/register">Register</Link>{" "}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
