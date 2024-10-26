import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {router} from './routes/Users.js';
import { postRouter } from "./routes/Post.js";

mongoose.connect('mongodb://127.0.0.1:27017/driverslicense')

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000

app.use('/user',router)

app.use('/post', postRouter)

app.listen(port, () =>{
    console.log(` listening on http://localhost:${port}`)
})