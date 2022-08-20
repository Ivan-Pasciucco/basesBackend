import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";

const {Schema, model} = mongoose;
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true ,
        trim: true ,
        unique : true ,
        lowercase: true ,
        index: {unique:true},
    },
    password: {
        type: String,
        required: true,
    }
})



export const User = mongoose.model("User", userSchema)