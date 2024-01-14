import mongoose from 'mongoose'

const challengeSchema = new mongoose.Schema({
    challengeName:{
        type : String,
        required:true,
    },
    point:{
        type : Number,
        required:true
    },
    startDate:{ 
        type:Date,
        default:Date.now,
        
    },
    endDate:{ 
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model("challenge",challengeSchema)