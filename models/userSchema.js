import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Name Is Required!"],
    minLength: [3, " Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [false, "Phone Is Required!"],
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },
  // nic: {
  //   type: String,
  //   required: [false, "NIC Is Required!"],
  //   minLength: [13, "NIC Must Contain Only 13 Digits!"],
  //   maxLength: [13, "NIC Must Contain Only 13 Digits!"],
  // },
  // dob: {
  //   type: Date,
  //   required: [true, "DOB Is Required!"],
  // },
  age: {
    type: String,
    required: [false, "Age Is Required!"],
  },
  address: {
    type: String,
    required: [false, "Address Is Required!"],
  },
  problem: {
    type: String,
    required: [false, "Problem Is Required!"],
  },
  password: {
    type: String,
    required: [false, "Password Is Required!"],
    // minLength: [8, "Password Must Contain At Least 8 Characters!"],
    select: false,
  },
  canEdit:{
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    required: [false, "User Role Required!"],
    enum: ["Patient", "Doctor", "Admin"],
  },
  doctorDepartment:{
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
