import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const {id} =useParams();
    
    const[inputData,setInputData]=useState({
        id:id,
        bookName:'',
        isbn:'',
        publication:'',
        authName:'',
        dob:'',
        bio:''
            });

const navigate=useNavigate();

useEffect( () => {
        axios.get('http://localhost:4000/books/'+id)
        .then(response => setInputData(response.data))
        .catch(err  => console.log(err))
},[])


const handleSubmit = (event)  => {
    event.preventDefault();
    axios.put('http://localhost:4000/books/'+id, inputData)
    .then( response => {
        alert("Data updated successfully!!")
        navigate('/')
    });
}
  return (
    <>
              
    <h1>Update Book Details</h1>
                <div className='container' id="create">
                <div>
  <label htmlFor="bookId">ID</label>
  <input type="number" id="bookId" name="bookId" disabled className='form-control' placeholder="Cannot Change Id" autoComplete="off" onChange={e=>setInputData({...inputData,id:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="bookName">Book Name</label>
  <input type="text" id="bookName" name="bookName" required className='form-control' placeholder="Enter Book Name" autoComplete="off" onChange={e=>setInputData({...inputData,bookName:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="isbn">ISBN Number</label>
  <input type="number" id="isbn" name="isbn" required className='form-control' placeholder="Enter ISBN Number" autoComplete="off" onChange={e=>setInputData({...inputData,isbn:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="publication">Publication</label>
  <input type="date" id="publication" name="publication" required className='form-control' placeholder="Enter publication date" autoComplete="off" onChange={e=>setInputData({...inputData,publication:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="authName">Author Name</label>
  <input type="text" id="authName" name="authName" required className='form-control' placeholder="Enter Author Name" autoComplete="off" onChange={e=>setInputData({...inputData,authName:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="dob">Date Of Birth</label>
  <input type="date" id="dob" name="dob" required className='form-control' placeholder="Enter Author DOB" autoComplete="off" onChange={e=>setInputData({...inputData,dob:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="bio">Biography</label>
  <input type="text" id="bio" name="bio" required className='form-control' placeholder="Enter Author biography" autoComplete="off" onChange={e=>setInputData({...inputData,bio:e.target.value})}></input>
  </div>

<button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
</div>

</>
  )
}

export default Update