import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'
import moment from "moment"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom' 





const Write = () => {

  const handleChange = e => {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  const state = useLocation().state

  const navigate = useNavigate();

  
  const [inputs, setInputs] = useState({
    name:state?.name || "",   
    text:state?.text || "",
    date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  })
  
  const handleSubmit = async e => {
    try{
      e.preventDefault()      
      if(state){
        await axios.put(`http://localhost:8800/api/posts/${state.id}`,inputs)
      }else{
         await axios.post(`http://localhost:8800/api/posts`,inputs)          
      }        
      
      navigate("/")      
    }catch(err){
      console.log(err)
    }
  }

  return (
    // <div>      
    //   <h1>Write</h1>
    //     <form>
    //         <input required value={inputs.name} type="text" placeholder='name' name='name' onChange={handleChange}/>           
    //         <button type='button' onClick={handleSubmit}>Post</button>             
    //     </form> 
    // </div>

    <div className="container">
      <h1>Write</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={inputs.name} name='name' placeholder="Enter Title" onChange={handleChange}/>      
      </Form.Group>  
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" value={inputs.text} name='text' placeholder="Enter Text" onChange={handleChange}/>      
      </Form.Group>             
      <Button variant="primary" onClick={handleSubmit} >
        Push
      </Button>
    </Form>
  </div>
    
  )
}

export default Write