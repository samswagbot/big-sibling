import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";


export default function UserDetails({
  nextStep,
  handleFormData,
  values,
  validated,
  setValidated,
}) {
  const {
    fullName,
    age,
    city,
    pronouns,
    genderIdentity,
    sexualIdentity,
    state,
  } = values;

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
      <h3 className="mb-4">USER DETAILS</h3>
      <Row>
        <Form.Group className="mb-3" controlId="fullName">
          <FloatingLabel
            controlId="fullName"
            label="Full Name"
            className="mb-2"
          >
            <Form.Control
              required
              type="text"
              placeholder="Enter your name.."
              onChange={(e) => handleFormData("fullName", e)}
              defaultValue={fullName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your full name
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="age">
          <FloatingLabel controlId="age" label="Age" className="mb-4">
            <Form.Control
              required
              type="number"
              placeholder="How old are you?"
              onChange={(e) => handleFormData("age", e)}
              defaultValue={age}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your age
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="city">
            <FloatingLabel controlId="city" label="City" className="mb-2">
              <Form.Control
                required
                type="text"
                placeholder="Enter your city.."
                onChange={(e) => handleFormData("city", e)}
                defaultValue={city}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide your city
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="state">
            <FloatingLabel controlId="state" label="State" className="mb-2">
              <Form.Control
                required
                type="text"
                placeholder="Enter your state.."
                onChange={(e) => handleFormData("state", e)}
                defaultValue={state}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide your state
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Group controlId="pronouns">
            <Form.Control
              as="select"
              required
              aria-label="Pronouns"
              onChange={(e) => handleFormData("pronouns", e)}
              className="py-3"
            >
              <option value="">Pronouns</option>
              <option value="He/Him,His">He/Him,His</option>
              <option value="She/Her/Hers">She/Her/Hers</option>
              <option value="They/Them/Their">They/Them/Their</option>
              <option value="My pronouns are not listed">
                My pronouns are not listed
              </option>
              <option value="I do not use any pronouns">
                I do not use any pronouns
              </option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your pronouns
            </Form.Control.Feedback>
            {pronouns === "My pronouns are not listed" && (
              <>
                <Form.Control
                  required
                  type="text"
                  placeholder="Please type in your pronouns.."
                  onChange={(e) => handleFormData("pronounsNotListed", e)}
                  className="mt-4"
                />
              </>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Group controlId="genderIdentity">
            <Form.Control
              required
              as="select"
              aria-label="Gender Identity"
              onChange={(e) => handleFormData("genderIdentity", e)}
              className="py-3"
            >
              <option value="">Gender Identity</option>
              <option value="Transman">Transman</option>
              <option value="Transwoman">Transwoman</option>
              <option value="Non-binary">Non-binary</option>
              <option value="My gender identity are not listed">
                My gender identity are not listed
              </option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your gender identity
            </Form.Control.Feedback>
            {genderIdentity === "My gender identity are not listed" && (
              <>
                <Form.Control
                  required
                  type="text"
                  placeholder="Please type in your gender identity.."
                  onChange={(e) => handleFormData("genderIdentityNotListed", e)}
                  className="mt-4"
                />
              </>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Group controlId="sexualIdentity">
            <Form.Control
              className="py-3"
              required
              as="select"
              aria-label="Sexual Identity"
              onChange={(e) => handleFormData("sexualIdentity", e)}
            >
              <option value="">Sexual Identity</option>
              <option value="Queer">Queer</option>
              <option value="Straight">Straight</option>
              <option value="Gay">Gay</option>
              <option value="Bisexual">Bisexual</option>
              <option value="Pansexual">Pansexual</option>
              <option value="My sexual identity are not listed">
                My sexual identity are not listed
              </option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your sexual identity
            </Form.Control.Feedback>
            {sexualIdentity === "My sexual identity are not listed" && (
              <>
                <Form.Control
                  required
                  type="text"
                  placeholder="Please type in your gender identity.."
                  onChange={(e) => handleFormData("sexualIdentityNotListed", e)}
                  className="mt-4"
                />
              </>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Button
        variant="primary"
        type="submit"
        className="float-end mt-2"
        size="lg"
      >
        Next
      </Button>
    </Form>
  );
}
