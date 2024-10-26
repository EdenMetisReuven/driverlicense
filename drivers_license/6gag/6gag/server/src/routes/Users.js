import {UserModel} from "../models/Employee.js"
import express from "express";

export const router = express.Router()

router.post('/logup', (req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const user = await UserModel.findOne({email: email})
    .then(user => {
        if(user){
          if(user.password === password){
            res.json("Sucsses")
        } else {
            res.json("The password incorrect")
        }
    } else {
        res.json("The user is not exist [Singup first]")
    }

    })
})

router.get('', (req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//module.exports = router

// app.get('/Users:password', (req,res)=>{
//     const password = req.params.password;
//     UserModel.find(password)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// }) 