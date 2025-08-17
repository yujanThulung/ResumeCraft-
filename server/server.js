import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import connectDB from './config/db.js';
import { user } from "./routes/index.route.js";

dotenv.config();

const app = express();

await connectDB();


app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true,
    }
));


app.use(cookieParser());
app.use(express.json());
app.use('/api/user', user);




app.get('/', (req, res)=>{
    res.send("Server is ready");
})



const PORT = Number(process.env.PORT) || 8000;
   
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});



