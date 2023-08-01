const mongoose= require("mongoose");

// Defining Schema
const userSchema= new mongoose.Schema({

    name: {type: String, required: true},
    email: {type:String,required: true},
    password: {type:String,required:true},

})

// Model
const UserModel= mongoose.model("user",userSchema);

module.exports= UserModel;