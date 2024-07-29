import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Is Required!"],
    // minLength: [3, " Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    // required: [true, "Email Is Required!"],
    // validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [false, "Phone Is Required!"],
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },
  age: {
    type: String,
    // required: [true, "Age Is Required!"],
  },
  gender: {
    type: String,
    // required: [true, "Gender Is Required!"],
  },
  address: {
    type: String,
    // required: [true, "Address Is Required!"],
  },
  problem: {
    type: String,
    required: [true, "Problem Is Required!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",}
},{
  timestamps:true
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
