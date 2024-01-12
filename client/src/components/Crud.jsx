import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from"axios"

const Crud = () => {
  const [user, setUser] = useState([])

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
    useEffect(() => {
        // This useEffect runs whenever the 'user' state changes
        console.log("User state:", user);
      }, [user]);
    
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
        {user.map((display)=>{
            return(
        <tbody>
          <tr>
            <td>{display.Name}</td>
            <td>{display.Age}</td>
            <td>{display.Place}</td>
            <td></td>
          </tr>
        </tbody>
)})}
      </Table>
    </div>
  );
};

export default Crud;
