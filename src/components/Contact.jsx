import { Form, Row, Button } from "react-bootstrap";

export default function Contact({
  prevStep,
  nextStep,
  handleFormData,
  mentor,
  setValidated,
  validated,
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
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();
      nextStep();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={(e) => submitFormData(e)}>
      <h3 className="mb-3">CONTACT</h3>
      <Row className="mb-4">
        <h4 className="mb-3" htmlFor="proximity">
          How important is physical proximity to your{" "}
          {mentor ? "mentor" : "mentee"}?
        </h4>
        <Form.Group>
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
          <Form.Control
            required
            className="py-3"
            as="select"
            aria-label="Preferred Method"
            onChange={(e) => handleFormData("preferredMethod", e)}
          >
            <option value="">What is your preferred method of contact?</option>
            {methodOfContact.map((answers) => {
              return (
                <option key={answers} value={answers}>
                  {answers}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please choose the option above
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {mentor && (
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>
              If you've had previous as a mentor, what was most beneficial part
              of that mentorship?
            </Form.Label>
            <Form.Control
              onChange={(e) => handleFormData("benefiticalPart", e)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Row>
      )}
      <Row className="mb-4">
        <h4 htmlFor="productLike">
          How important do you think this product would be?
        </h4>
        <Form.Group>
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
