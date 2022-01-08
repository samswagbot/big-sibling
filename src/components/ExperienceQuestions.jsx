import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function ExperienceQuestions({
  prevStep,
  nextStep,
  values,
  handleFormData,
}) {
  const topics = [
    "Binding",
    "Coming Out",
    "Bottom Surgery",
    "Top Surgery",
    "Dating",
    "Navigating HealthCare Systems",
    "Name Change",
    "Dysphoria",
    "Family",
    "Sexuality",
    "Non Binary Erasure",
    "Topic is not listed",
  ];
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Form onSubmit={submitFormData}>
      <Row className="mb-3">
        <Form.Group controlId="yearsBeingTrans">
          <Form.Select
            onChange={(e) => handleFormData("yearsBeingTrans", e)}
            aria-label="How many years have you identified as transgender? "
          >
            <option>How many years have you identified as transgender? </option>
            <option value="0-1">0-1</option>
            <option value="2-3">2-3</option>
            <option value="3-5">3-5</option>
            <option value="5-10">5-10</option>
            <option value="10+">10+</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Label htmlFor="discussionTopics" className="mb-3">
          What discussion topics are you interested in talking about?
        </Form.Label>
        <Col lg={true}>
          {topics.map((topic) => {
            return (
              <Form.Check
                onChange={(e) => handleFormData("discussionTopics", e)}
                key={topic}
                inline
                label={topic}
                type="checkbox"
                id="discussionTopics"
                className="mb-3"
                value={topic}
              />
            );
          })}
        </Col>
      </Row>
      <Row className="my-3">
        <Form.Group>
          <FloatingLabel label="What are you looking to gain out of this experience?">
            <Form.Control
              onChange={(e) => handleFormData("gainExperience", e)}
              as="textarea"
              rows={3}
            />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="primary" onClick={prevStep}>
          Previous
        </Button>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
}
