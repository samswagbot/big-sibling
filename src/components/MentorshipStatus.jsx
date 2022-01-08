import { Form, Button } from "react-bootstrap";
export default function MentorshipStatus({ setMentor, nextStep, prevStep }) {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Form onSubmit={submitFormData}>
      <Form.Label
        htmlFor="mentor"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Are you interested in a mentorship or mentoring?
      </Form.Label>
      <Form.Group
        className="mb-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Form.Check
          inline
          onClick={() => setMentor(false)}
          type="radio"
          label="Mentee"
          name="mentor"
        />
        <Form.Check
          inline
          onClick={() => setMentor(true)}
          type="radio"
          label="Mentor"
          name="mentor"
        />
      </Form.Group>
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
