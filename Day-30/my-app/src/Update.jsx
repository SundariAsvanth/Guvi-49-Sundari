import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const {id} =useParams();
    const[inputData,setInputData]=useState({
        id : id,
        name:'',
        email:''
    });

const navigate=useNavigate();

useEffect( () => {
        axios.get('http://localhost:4000/users/'+id)
        .then(response => setInputData(response.data))
        .catch(err  => console.log(err))
},[])


const handleSubmit = (event)  => {
    event.preventDefault();
    axios.put('http://localhost:4000/users/'+id, inputData)
    .then( response => {
        alert("Data updated successfully!!")
        navigate('/')
    });
}
  return (
    <>
    <h1>Update User Details</h1>
                <div className='container' id="update">
                <div>
  <label htmlFor="userId">ID</label>
  <input type="text" disabled name="userId" className='form-control' value={inputData.id}></input>
  </div>
  <div>
  <label htmlFor="userName">Name</label>
  <input type="text" name="userName" className='form-control'   value={inputData.name} onChange={e=>setInputData({...inputData,name:e.target.value})}></input>
  </div>
  <div>
  <label htmlFor="userEmail">Email</label>
  <input type="email" name="userEmail" className='form-control'  value={inputData.email} onChange={e=>setInputData({...inputData,email:e.target.value})}></input>
  </div>
<button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
</div>

</>
  )
}

export default Update