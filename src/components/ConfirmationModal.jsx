import { Modal, Button } from "react-bootstrap";

export default function ConfirmationModal(props) {
  const { mentor, onHide } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Big Sibling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Congrats!</h4>
        <p>
          You've submitted an application to become a
          {mentor ? "Mentor" : "Mentee"} at Big Sibling. You will receive an
          email confirmation shortly.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
