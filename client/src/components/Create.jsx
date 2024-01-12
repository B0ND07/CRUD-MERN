import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Newcontext } from '../App';
import axios from 'axios';

const Create = () => {
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
        const display=await axios.post("http://localhost:5000/create",formData)

        console.log(display.data)
      navigate("/");
    }
  
    return (
      <div>
        <form>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInput}
          />
          <br />
          <label>Age</label>
          <br />
          <input
            type="text"
            name="Age"
            value={formData.Age}
            onChange={handleInput}
          />
          <br />
          <label>Place</label>
          <br />
          <input
            type="text"
            name="Place"
            value={formData.Place}
            onChange={handleInput}
          />
          <br />
          <br />
          <input type="button" onClick={handleForm} value="Add"></input>
        </form>
      </div>
    );
}

export default Create