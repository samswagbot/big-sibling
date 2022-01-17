import { Form, Button } from "react-bootstrap";

export default function MentorshipStatus({
  setMentor,
  nextStep,
  prevStep,
  setValidated,
  validated,
}) {
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
    <Form noValidate validated={validated} onSubmit={submitFormData}>
      <h3 className="mb-4">MENTORSHIP ROLE</h3>
      <h4
        htmlFor="mentor"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Are you interested in a mentorship or mentoring?
      </h4>
      <Form.Group
        className="my-3"
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
          required
          feedback="Required"
          feedbackType="invalid"
        />
      </Form.Group>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={prevStep}>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </Form>
  );
}
