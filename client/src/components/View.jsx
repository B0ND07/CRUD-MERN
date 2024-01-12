import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Newcontext } from '../App'

const View = () => {
    const [user] = useContext(Newcontext)
    console.log(user)
    let {index}=useParams()
    const viewData=user[index]

    console.log("para,",viewData)
  return (
    <div>
        <h1>Name: {viewData.Name}</h1>
        <h1>Age: {viewData.Age}</h1>
        <h1>Place: {viewData.Place}</h1>
    </div>
  )
}

export default View