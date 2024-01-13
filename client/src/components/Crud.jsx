import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from"axios"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom'
import { Newcontext } from "../App";


const Crud = () => {
    const [user,setUser] = useContext(Newcontext)

const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete/" + id)
      .then((res) => {
        // setUser((user) => user.filter((item) => item._id !== id));
        const filteredData=user.filter((item) => item._id !== id)
        setUser(filteredData)
        console.log("res",res);

      })
      .catch((err) => console.log(err));
  };

    useEffect(() => {
        const fetchData=async()=>{
        try{
         const response=await axios.get("http://localhost:5000/get")
            
            setUser(response.data)
            console.log(user)
        }catch(err){
            console.log(err)
        }
    }
        fetchData()
      
    }, [])
    
    // useEffect(() => {
    //     // This useEffect runs whenever the 'user' state changes
    //     console.log("User state:", user);
    //   }, [user]);
    
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Actions</th>
          </tr>
        </thead>
        {user.map((display,index)=>{
            return(
        <tbody key={index}>
          <tr>
            <td>{display.Name}</td>
            <td>{display.Age}</td>
            <td>{display.Place}</td>
            <td><ButtonGroup>
                <Link to={`/view/${index}`}><Button variant="primary">View</Button></Link>
                <Link to={`/update/${display._id}`}><Button variant="success">Edit</Button></Link>
      <Button onClick={()=>handleDelete(display._id)} variant="danger">Delete</Button>
    </ButtonGroup></td>
          </tr>
        </tbody>
)})}
      </Table>
      <Link to={`/create`}><Button variant="warning">Create</Button></Link>

    </div>
  );
};

export default Crud;

