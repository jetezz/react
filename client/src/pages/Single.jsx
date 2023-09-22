import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import moment from "moment"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Single = () => {

  const [post,setPost] = useState({})

  const buttonStyle = {
    margin: "1px",
    };

  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2]  

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`)       
        setPost(res.data)       
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  },[postId])

  const handleDelete = async () => {
    try{
      await axios.delete(`http://localhost:8800/api/posts/${postId}`)       
      navigate("/")      
    }catch(err){
      console.log(err)
    }
  }

  return (
    // <div>
    //   <h1>Single</h1>
    //   <div>
    //     <h1>{post.name}</h1>
    //     <h2>{post.date && moment(post.date).fromNow()}</h2>
    //     <Link to={`/write?edit=${post.id}`} state={post}>
    //       <p> edit </p>
    //     </Link>
    //     <p onClick={handleDelete}> delete </p>
    //   </div>  
    // </div>

    <div>
      <h1>Single</h1>
      <Card>
        <Card.Header>{post.name}</Card.Header>
        <Card.Body>         
          <Card.Text>{post.text}</Card.Text>
          <Link to={`/write?edit=${post.id}`} state={post}><Button style={buttonStyle} variant="primary">Edit</Button></Link>
          <Button style={buttonStyle} variant="primary" onClick={handleDelete}>Delete</Button>   
        </Card.Body>
      </Card>
    </div>
    
  )
}

export default Single