import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate,useParams,Link } from 'react-router-dom'
import axios from 'axios';

function View() {
    const {id}=useParams();
    const navigate=useNavigate();
const[data,setData]=useState([]);
    useEffect( () => {
        axios.get(' http://localhost:4000/books/'+id)
        .then(response => setData(response.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        <h1>Book Details</h1>
       <div className='container' id="view">
            <p>Id: {data.id}</p>
            <p>Book Name: {data.bookName}</p>
            <p>ISBN Number: {data.isbn}</p>
            <p>Publication: {data.publication}</p>
            <p>Author Name: {data.authName}</p>
            <p>Date Of Birth: {data.dob}</p>
            <p>Biography: {data.bio}</p>
            <Link to='/' className='btn btn-primary'>Back</Link>
            </div>
       </div>
  )
}

export default View