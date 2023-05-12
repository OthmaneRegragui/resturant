import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../styles/Contact.css";

function Contact() {
  return (
    <Card>
      <Card.Header>Contact</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              controlId="formEmail"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              controlId="formMessage"
              placeholder="Text ..."
              rows={5}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-grid ">
            <Button variant="outline-light" size="lg" rows={3}>
              Send
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Contact;
