import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbxB7wWk5L_B2iEiLDSQri1HpCP8WXF5K1pWB3eEN5ag08r1lNQk9UlRcovzwHVIIGVC/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        alert(data.msg);
      })
      .catch(err => console.log(err));
  };
  return (

    
    <Container style={{ width: "50%", height: "100vh", alignItems: "center", display: "flex", justifyContent: "center" }}>
      <Form style={{ textAlign: "left", backgroundColor: "gray", padding: "5%", borderRadius: "15px" }} ref={formRef} onSubmit={handleSubmit}>
        <h3>Contact Form</h3>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="Email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Description">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="Message" required />
        </Form.Group>
        <Button style={{ float: "right" }} variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default ContactForm;