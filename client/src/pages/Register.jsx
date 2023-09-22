import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  })
  const [err,setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/register",inputs)      
      navigate("/login")
    }catch(err){     
      setError(err.response.data)
    }
  }  


  return (
    // <div>
    //     <h1>Register</h1>
    //     <form>
    //         <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
    //         <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
    //         <input required type="password" placeholder='password' name='password' onChange={handleChange}/> 
    //           {err && <p>{err}</p>}    
    //         <button onClick={handleSubmit}>Login</button> 
    //         <span><Link to="/login">Login</Link></span>
    //     </form>
    // </div>
    <div className="container">
      <h1>Register</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='username' placeholder="Enter name" onChange={handleChange}/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder='Password' name='password' onChange={handleChange} />
      </Form.Group>
      <p>Have an account: <Link to="/login">Login</Link></p>
      <Button variant="primary" onClick={handleSubmit} >
        Register
      </Button>
    </Form>
  </div>
  )
}

export default Register