import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home() {
    const[data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect( () => {
        axios.get(' http://localhost:4000/users')
        .then(response => setData(response.data))
        .catch(err => console.log(err))
    },[])

    function handleDelete(id) {
       const confirm =  window.confirm("Do you really want to delete it?");
        if(confirm){
        axios.delete('http://localhost:4000/users/'+id)
        .then(response => {
            alert("Data deleted successfully");
            navigate('/');
        })
    }
}

  return (
    <div>
        <div className='container' id='home'>
            <h2>List of Users</h2>
            <Link to="/create" className="btn btn-success">Add User Details</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>
                            <Link to={`/update/${d.id}`} className="btn btn-primary">Update</Link>
                            <Link  className="btn btn-danger" onClick={e => handleDelete(d.id)}>Delete</Link>
                            <Link to={`/view/${d.id}`} className='btn btn-secondary'>View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home