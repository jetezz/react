import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import moment from "moment"
import Button from 'react-bootstrap/Button';



const Home = () => {

  const buttonStyle = {
    margin: "1px",
    };

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };

  const [posts,setPosts] = useState([])

  const cat = useLocation().search  
  
  const getPost = async() => {
    try{      
      const res = await axios.get(`http://localhost:8800/api/posts${cat}`)        
      setPosts(res.data)       
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getPost();
  },[cat])

  const handleDelete = async (postId) => {    
    try{
      await axios.delete(`http://localhost:8800/api/posts/${postId}`)    
      getPost();             
    }catch(err){
      console.log(err)
    }
  }

  return (
    // <div>
    //   <h1>Home</h1>     
    //   {posts.map((post) => (
    //     <div key={post.id}>
    //       <Link to={`/post/${post.id}`}>
    //         <h1>{post.name}</h1>
    //       </Link>
    //     </div>
    //   ))}       
    // </div>



    <div>
    <h1>Home</h1>  
    {posts.map((post) => (  
    <div key={post.id}> 
      <br/>
      <Card>  
      <Link to={`/post/${post.id}`} style={linkStyle}>
      <Card.Body>
        <Card.Title>{post.name}</Card.Title>
        <Card.Text>{post.text}</Card.Text>       
      </Card.Body>      
      </Link>
      <div>
        <Link to={`/write?edit=${post.id}`} state={post}><Button style={buttonStyle} variant="primary">Edit</Button></Link>
        <Button style={buttonStyle} variant="primary" onClick={() => {handleDelete(post.id)}}>Delete</Button>  
      </div> 
     
      <Card.Footer>      
        <small className="text-muted">{post.date && moment(post.date).fromNow()}</small>
      </Card.Footer>    
    </Card>    
    </div>
  
    ))}  
    </div>
    
  )
}

export default Home