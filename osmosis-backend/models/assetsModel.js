

const mongoose= require("mongoose");

// Defining Schema
const userSchema= new mongoose.Schema({

    name: {type: String, required: true},
    email: {type:String,required: true},
    password: {type:String,required:true},
    tc: {type: Boolean,required:true}

})

// Model
const UserModel= mongoose.model("assets",userSchema);

module.exports= UserModel;