import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {

  const [validated,setValidated]=useState(false);

  const handleSubmit=(event)=>{

    const form=event.currentTarget;

    if(!form.checkValidity()){

      event.preventDefault();
      event.stopPropagation();

    }else{

      event.preventDefault();

      alert("Message Sent Successfully!");

    }

    setValidated(true);

  };

  return(

    <section className="contact">

      <div className="contact-box">

        <h2>Contact Us</h2>

        <p>
          We'd love to hear from you. Send us your questions,
          feedback, or coffee orders.
        </p>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >

          <Form.Group className="mb-3">

            <Form.Label>Name</Form.Label>

            <Form.Control
              required
              type="text"
              placeholder="Enter your name"
            />

            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Email</Form.Label>

            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
            />

            <Form.Control.Feedback type="invalid">
              Enter a valid email.
            </Form.Control.Feedback>

          </Form.Group>

          <Form.Group className="mb-4">

            <Form.Label>Message</Form.Label>

            <Form.Control
              required
              as="textarea"
              rows={5}
              placeholder="Write your message"
            />

            <Form.Control.Feedback type="invalid">
              Enter your message.
            </Form.Control.Feedback>

          </Form.Group>

          <Button
            type="submit"
            className="submit-btn"
          >
            Send Message
          </Button>

        </Form>

      </div>

    </section>

  );

}