import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

export default function UserDetails({ nextStep, handleFormData, values }) {
  const { fullName, age, city } = values;

  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Form onSubmit={submitFormData}>
      <Row>
        <Form.Group className="mb-3" controlId="fullName">
          <FloatingLabel
            controlId="fullName"
            label="Full Name"
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              placeholder="Enter your name.."
              onChange={(e) => handleFormData("fullName", e)}
              defaultValue={fullName}
            />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="age">
          <FloatingLabel controlId="age" label="Age" className="mb-3">
            <Form.Control
              required
              type="number"
              placeholder="How old are you?"
              onChange={(e) => handleFormData("age", e)}
              defaultValue={age}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} controlId="city">
          <FloatingLabel controlId="city" label="City" className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="Where are you located?"
              onChange={(e) => handleFormData("city", e)}
              defaultValue={city}
            />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="pronouns">
            <Form.Select
              aria-label="Pronouns"
              onChange={(e) => handleFormData("pronouns", e)}
            >
              <option>Pronouns</option>
              <option value="He/Him,His">He/Him,His</option>
              <option value="She/Her/Hers">She/Her/Hers</option>
              <option value="They/Them/Their">They/Them/Their</option>
              <option value="My pronouns are not listed">
                My pronouns are not listed
              </option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="genderIdentity">
            <Form.Select
              aria-label="Gender Identity"
              onChange={(e) => handleFormData("genderIdentity", e)}
            >
              <option>Gender Identity</option>
              <option value="Transman">Transman</option>
              <option value="Transwoman">Transwoman</option>
              <option value="Non-binary">Non-binary</option>
              <option value="My gender identity are not listed">
                My gender identity are not listed
              </option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="sexualIdentity">
            <Form.Select
              aria-label="Sexual Identity"
              onChange={(e) => handleFormData("sexualIdentity", e)}
            >
              <option>Sexual Identity</option>
              <option value="Queer">Queer</option>
              <option value="Straight">Straight</option>
              <option value="Gay">Gay</option>
              <option value="Bisexual">Bisexual</option>
              <option value="Pansexual">Pansexual</option>
              <option value="My sexual identity are not listed">
                My sexual identity are not listed
              </option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit" size="lg" className="w-100">
        Next
      </Button>
    </Form>
  );
}
