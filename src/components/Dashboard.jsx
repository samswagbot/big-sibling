import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
export default function Dashboard() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const db = getDatabase();

  const userDetails = ref(db, currentUser.uid);
  console.log(currentUser);
  onValue(
    userDetails,
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childKey, childData);
        // ...
      });
    },
    {
      onlyOnce: true,
    }
  );
  const [error, setError] = useState(``);
  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to  log out");
    }
  }
  return (
    <>
      <Card className="shadow mb-3">
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Name: </strong>
            {currentUser.displayName}
          </p>
          <p>
            <strong>Email: </strong>
            {currentUser.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {currentUser.displayName}
          </p>
        </Card.Body>
      </Card>
      <Card className="shadow">
        <Card.Body>
          <Card.Title>Actions</Card.Title>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Link to="/onboard" className="btn btn-primary w-100 mt-3">
            Mentorship Application
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
