import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
    clinicName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },clinicData:{
        type: Buffer,  // Use Buffer type for binary data
        default: Buffer.from([]) 
    }
})

export default mongoose.model("clinic",clinicSchema)