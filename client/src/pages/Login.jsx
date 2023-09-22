import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

  const buttonStyle = {
    color: "red",
    };

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
  });

  const [err,setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  };

  const handleSubmit = async e => {
    
    e.preventDefault()
    try{   

      await axios.post("http://localhost:8800/api/auth/login",inputs)       

      navigate("/")
    }catch(err){       
      setError(err.response.data)
    }
  };





  return (
    // <div>
    //     <h1>Login</h1>
    //     <form>
    //         <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
    //         <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
    //         {err && <p>{err}</p>}             
    //         <button onClick={handleSubmit}>Login</button> 
    //         <span><Link to="/register">Register</Link></span>
    //     </form>
    // </div>

    <div className="container">
      <h1>Login</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='username' placeholder="Enter name" onChange={handleChange}/>      
      </Form.Group>  
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder='Password' name='password' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p>Don't have an account: <Link to="/register">Register</Link></p>
      {err && <p style={buttonStyle} >{err}</p>} 
      <Button variant="primary" onClick={handleSubmit} >
        Login
      </Button>
    </Form>
  </div>
  )
}

export default Login