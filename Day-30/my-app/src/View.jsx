import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate,useParams,Link } from 'react-router-dom'
import axios from 'axios';

function View() {
    const {id}=useParams();
    const navigate=useNavigate();
const[data,setData]=useState([]);
    useEffect( () => {
        axios.get(' http://localhost:4000/users/'+id)
        .then(response => setData(response.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        <h1>User Details</h1>
       <div className='container' id="view">
            <p>Id: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <Link to='/' className='btn btn-primary'>Back</Link>
            </div>
       </div>
  )
}

export default View