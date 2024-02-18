import mongoose from "mongoose";

const user = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    age:{
        type:Number,    
        required:true
    },
    challenges:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"challenge"}
    ],
    rewards:[
        {type:String}
    ],
    totalPoint:{
        type : Number,
        default:0
    },
    clinic:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"clinic"
    }
    

})

export default mongoose.model("user",user)