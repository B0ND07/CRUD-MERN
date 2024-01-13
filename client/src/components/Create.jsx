import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ Name: "", Age: "", Place: "" });

  function handleInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }

  async function handleForm() {
 
    const display = await axios.post("http://localhost:5000/create", formData);

    console.log(display.data);
    navigate("/");
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="Age"
            value={formData.Age}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Place</Form.Label>
          <Form.Control
            type="text"
            name="Place"
            value={formData.Place}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
