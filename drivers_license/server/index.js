import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {UserModel} from "./models/Employee.js"

mongoose.connect('mongodb://127.0.0.1:27017/driverslicense')

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000

app.get('/getUsers:password', (req,res)=>{
    const password = req.params.password;
    UserModel.find(password)
    .then(users => res.json(users))
    .catch(err => res.json(err))
}) 
app.post('/register', (req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
          if(user.password === password){
            res.json("Sucsses")
        } else {
            res.json("The password in incorrect")
        }
    } else {
        res.json("The user is not exist [Singup first]")
    }

    })
})

app.get('/getUsers', (req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(port, () =>{
    console.log(` listening on http://localhost:${port}`)
})