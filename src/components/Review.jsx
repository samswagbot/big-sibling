import React from "react";
import { Card } from "react-bootstrap";

export default function Review({ values }) {
  const {
    fullName,
    age,
    city,
    state,
    pronouns,
    genderIdentity,
    sexualIdentity,
    yearsBeingTrans,
    discussionTopics,
    proximity,
    preferredMethod,
    mentor,
  } = values;
  return (
    <>
      <h2 className="mb-4 text-center">Congrats!</h2>
      <Card>
        <Card.Header as="h3">Confirmation</Card.Header>
        <Card.Body style={{ textAlign: "left" }}>
          <p>
            <strong>Full name :</strong> {fullName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>City :</strong> {city}{" "}
          </p>
          <p>
            <strong>State :</strong> {state}{" "}
          </p>
          <p>
            <strong>Pronouns :</strong> {pronouns}{" "}
          </p>
          <p>
            <strong>Gender Identity :</strong> {genderIdentity}{" "}
          </p>
          <p>
            <strong>Sexual Identity :</strong> {sexualIdentity}{" "}
          </p>
          <p>
            <strong>Years in Transition :</strong> {yearsBeingTrans}{" "}
          </p>
          <p>
            <strong>Topics Interested In Discussing :</strong>{" "}
            {discussionTopics.map((topic) => (
              <span key={topic}>{topic}, </span>
            ))}{" "}
          </p>
          <p>
            <strong>Mentorship Status :</strong> {mentor ? "Mentor" : "Mentee"}{" "}
          </p>
          <p>
            <strong>Proximity Importance :</strong> {proximity}{" "}
          </p>
          <p>
            <strong>Preffered Method of Contact:</strong> {preferredMethod}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
