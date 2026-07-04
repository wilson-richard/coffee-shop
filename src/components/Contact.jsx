import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); 
      alert("Form submitted successfully!");
    }

    setValidated(true);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
          />

          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>

          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
          />

          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>

          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Enter your message"
          />

          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Please enter your message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="dark" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}