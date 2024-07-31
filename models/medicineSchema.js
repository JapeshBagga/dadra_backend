import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  category: { type: String, required: false },
  // lotSize: { type: Number, required: true },
  quantity: { type: Number, required: true },
  expiryDate: { type: Date, required: false },
  mfdDate: { type: Date, required: false },
  fssaiNo: { type: String, required: false },
});

export const Medicine = mongoose.model("medicine", medicineSchema);
