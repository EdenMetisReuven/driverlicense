import { PostModel } from "../models/Post.js";
import express from "express";
import multer from "multer";
import path from "path"


export const postRouter = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, "../client/public")
    },
    filename: (req, file, cd) =>{

        cd(null,file.fieldname +"_"+ Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({storage: storage})

postRouter.post('/logup', upload.single('image'), async (req,res)=>{
    try{

        console.log(req.file.filename)
        const {lable, description} = req.body
        const user = await PostModel.create({lable: lable, image: req.file.filename, description: description})
        res.json(user);
        
    }
    catch(err){
        res.json(err)
    }
})

// postRouter.post('/login', (req, res)=>{
//     const {email, password} = req.body;
//     PostModel.findOne({email: email})
//     .then(user => {
//         if(user){
//           if(user.password === password){
//             res.json("Sucsses")
//         } else {
//             res.json("The password incorrect")
//         }
//     } else {
//         res.json("The user is not exist [Singup first]")
//     }

//     })
// })

postRouter.get('', (req,res)=>{
    PostModel.find()
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