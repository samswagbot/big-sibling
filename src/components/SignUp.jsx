import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [error, setError] = useState(``);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Opps! This email already exists");
          break;
        case "auth/weak-password":
          setError("A password must contain 6 of more characters");
          break;
        default:
          setError("Failed to create an account");
          console.error(err.code);
      }
    }
    setLoading(false);
    navigate("/");
  }

  return (
    <>
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-center ">SIGNUP</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control required ref={emailRef} type="email" />
            </Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control required ref={passwordRef} type="password" />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                required
                ref={passwordConfirmationRef}
                type="password"
              />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100 mt-4">
              SUBMIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
        Already have an account? <Link to="/login">LOG IN</Link>
      </div>
    </>
  );
}
