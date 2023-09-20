import React from 'react'
import Axios from "axios"


const apiBack = ()=>{
  console.log("entra")
  Axios.post("/create",{
    name:'holaaa'
  })
}

const Home = () => {
  return (
    <div>Home
      <button onClick={apiBack}>API

      </button>
      
    </div>
    
  )
}

export default Home