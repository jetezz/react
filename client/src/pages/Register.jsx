import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = e => {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:8800/api/auth/register",inputs)
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  //console.log(inputs)

  return (
    <div>
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
            <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
            <input required type="password" placeholder='password' name='password' onChange={handleChange}/>            
            <button onClick={handleSubmit}>Login</button> 
            <span><Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register