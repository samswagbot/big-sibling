import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function ExperienceQuestions({
  prevStep,
  nextStep,
  values,
  handleFormData,
  setValidated,
  validated,
}) {
  const { discussionTopics } = values;

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
      <h3 className="mb-4">EXPERIENCE</h3>
      <Row className="mb-3">
        <Form.Group controlId="yearsBeingTrans">
          <Form.Control
            as="select"
            required
            className="py-3"
            onChange={(e) => handleFormData("yearsBeingTrans", e)}
            aria-label="How many years have you identified as transgender? "
          >
            <option value="">
              How many years have you identified as transgender?
            </option>
            <option value="0-1">0-1</option>
            <option value="2-3">2-3</option>
            <option value="3-5">3-5</option>
            <option value="5-10">5-10</option>
            <option value="10+">10+</option>
          </Form.Control>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please choose the option above
          </Form.Control.Feedback>
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
          {discussionTopics.includes("Topic is not listed") && (
            <Form.Control
              type="text"
              placeholder="Please write your topic.."
              onChange={(e) => handleFormData("discussionTopicNotList", e)}
              className="mt-4"
            />
          )}
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={prevStep}>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </Form>
  );
}
