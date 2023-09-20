import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)

app.listen(8800,()=>{
    console.log("open at port 8800")
})
