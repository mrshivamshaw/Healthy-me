import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
  clinicName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clinicData: {
    type:String,  // Change the type to ObjectId
    default: 'file',  // Reference the name of the model storing file information
  },
});

export default mongoose.model("clinic", clinicSchema);
