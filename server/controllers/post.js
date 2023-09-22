import { query } from "express"
import { db } from "../db.js"

export const getPosts = (req,res)=>{
   const q = req.query.cat 
   ? `SELECT * FROM posts WHERE cat = ?`
   : "SELECT * FROM posts"
   
    db.query(q,[req.query.cat], (err,data)=>{            
        if(err) return res.send(err)

        return res.status(200).json(data)
    })
}

export const getPost = (req,res)=>{
    const q = "SELECT * FROM posts WHERE id=?"

    db.query(q,[req.params.id], (err,data)=>{
        if(err) return res.send(err)
    
        return res.status(200).json(data[0])
    })
    
}

export const addPost = (req,res)=>{   
    const q = "INSERT INTO posts(name,date,text) VALUES (?)"

    const values = [
        req.body.name,
        req.body.date,
        req.body.text,
    ]    

    db.query(q,[values], (err,data)=>{
        if(err) return res.send(err)
    
        return res.status(200).json('Post has been created.')
    })
}

export const deletePost = (req,res)=>{
    const q = "DELETE FROM posts WHERE id=?"

    db.query(q,[req.params.id], (err,data)=>{
        if(err) return res.send(err)
    
        return res.status(200).json(data[0])
    })
}

export const updatePost = (req,res)=>{
    const postId = req.params.id
    const q = "UPDATE posts SET name=?, text=? WHERE id = ? "

    
    const values = [
        req.body.name,
        req.body.text
    ]   
    
    db.query(q,[...values,postId], (err,data)=>{
        if(err)  return res.send(err)
    
        return res.status(200).json('Post has been updated.')
    })
}
