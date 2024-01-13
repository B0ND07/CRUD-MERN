import React, { useContext, useState } from "react";
import { Newcontext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Update = () => {
  const navigate = useNavigate();
  const [user] = useContext(Newcontext);
  const { index } = useParams();
  const users = user.find((u) => u._id === index);
  console.log("users", users);

  if (!users) {
    return <div>Error: Data not found</div>;
  }

  const [input, setInput] = useState({
    Name: users.Name,
    Age: users.Age,
    Place: users.Place,
  });

  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  async function handleForm() {
    const display = await axios.put(
      `http://localhost:5000/update/${index}`,
      input
    );
    console.log(display);
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
            value={input.Name}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="Age"
            value={input.Age}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Place</Form.Label>
          <Form.Control
            type="text"
            name="Place"
            value={input.Place}
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

export default Update;
