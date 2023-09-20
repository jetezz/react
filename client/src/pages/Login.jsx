import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder='username'/>
            <input required type="password" placeholder='password'/>            
            <button>Login</button> 
            <span><Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login