import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function UpdateProfile() {
  const {
    currentUser,
    changeEmail,
    changePassword,
    changePhoneNumber,
    changeDisplayName,
  } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState(``);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const phoneRef = useRef();
  const displayNameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(changeEmail(emailRef.current.value));
    }

    if (passwordRef.current.value !== currentUser.password) {
      promises.push(changePassword(passwordRef.current.value));
    }
    if (phoneRef.current.value !== currentUser.phone) {
      promises.push(changePhoneNumber(phoneRef.current.value));
    }

    if (displayNameRef.current.value !== currentUser.displayName) {
      promises.push(changeDisplayName(displayNameRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header title="User Details" />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                defaultValue={currentUser.email}
                required
                ref={emailRef}
                type="email"
              />
            </Form.Group>
            <Form.Group id="password" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Leave blank to keep the same"
                ref={passwordRef}
                type="password"
              />
            </Form.Group>
            <Form.Group id="password-confirm" className="mt-2">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                placeholder="Leave blank to keep the same"
                ref={passwordConfirmationRef}
                type="password"
              />
            </Form.Group>
            <Form.Group id="phone" className="mt-2">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="enter phone number"
                ref={phoneRef}
                type="tel"
                as="input"
              />
            </Form.Group>
            <Form.Group id="displayName" className="mt-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="name"
                ref={displayNameRef}
                type="text"
              />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100 mt-4">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
}
