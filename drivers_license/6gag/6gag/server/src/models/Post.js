import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    lable : String,
    image : String,
    description: String
}) 

export const PostModel = mongoose.model("post", PostSchema)