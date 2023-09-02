import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const[inputData,setInputData]=useState({
        id:'',
        name:'',
        email:''
    });

const navigate=useNavigate();

const handleSubmit = (event)  => {
    event.preventDefault();
    axios.post('http://localhost:4000/users', inputData)
    .then( response => {
        alert("Data added successfully!!");
        navigate('/');
    });
}

  return (
<>
<h1>Enter User Details</h1>
                <div className='container' id="create">
                <div>
  <label htmlFor="userId">ID</label>
  <input type="text" id="userId" name="userId" className='form-control' placeholder="Enter Id" autoComplete="off" onChange={e=>setInputData({...inputData,id:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="userName">Name</label>
  <input type="text" id="userName" name="userName" className='form-control' placeholder="Enter Name" autoComplete="off" onChange={e=>setInputData({...inputData,name:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="userEmail">Email</label>
  <input type="email" id="userEmail" name="userEmail" className='form-control' placeholder="Enter Email" autoComplete="off" onChange={e=>setInputData({...inputData,email:e.target.value})}></input>
  </div>
<button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</div>
</>
  )

}

export default Create