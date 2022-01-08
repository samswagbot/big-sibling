import { Form, Row, FloatingLabel, Button } from "react-bootstrap";

export default function Contact({
  prevStep,
  nextStep,
  values,
  handleFormData,
  mentor,
}) {
  const methodOfContact = [
    "Text",
    "Email",
    "Video Call",
    "Phone Call",
    "Social Media",
  ];
  const importance = ["not important", "neutral", "very important"];

  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Form onSubmit={submitFormData}>
      <Row>
        <Form.Label
          htmlFor="proximity"
          style={{ display: "flex", justifyContent: "center" }}
        >
          How important is proximity to your {mentor ? "mentor" : "mentee"}?
        </Form.Label>
        <Form.Group
          className="mb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {importance.map((answers) => {
            return (
              <Form.Check
                key={answers}
                inline
                type="radio"
                onChange={(e) => handleFormData("proximity", e)}
                label={answers}
                name="blah"
                value={answers}
              />
            );
          })}
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group controlId="preferredMethod">
          <Form.Select
            aria-label="Preferred Method"
            onChange={(e) => handleFormData("preferredMethod", e)}
          >
            <option>What is your preferred method of contact?</option>
            {methodOfContact.map((answers) => {
              return (
                <option key={answers} value={answers}>
                  {answers}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Row>
      {mentor && (
        <Row className="mb-3">
          <Form.Group>
            <FloatingLabel
              label=" If you've had previous as a mentor, what was most beneficial part of
      that mentorship?"
            >
              <Form.Control
                onChange={(e) => handleFormData("benefiticalPart", e)}
                as="textarea"
                rows={3}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
      )}
      <Row>
        <Form.Label
          htmlFor="productLike"
          style={{ display: "flex", justifyContent: "center" }}
        >
          How important do you think this product would be?
        </Form.Label>
        <Form.Group
          className="mb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {importance.map((answers) => {
            return (
              <Form.Check
                key={answers}
                inline
                type="radio"
                onChange={(e) => handleFormData("productLike", e)}
                label={answers}
                value={answers}
              />
            );
          })}
        </Form.Group>
      </Row>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="primary" onClick={prevStep}>
          Previous
        </Button>

        <Button variant="primary" type="submit">
          Finish
        </Button>
      </div>
    </Form>
  );
}
