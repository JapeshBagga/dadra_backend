import mongoose from "mongoose";

const pathologySchema = new mongoose.Schema({
  name: { type: String, required: true, },
  value_observed: { type: String, required: false },
  // lotSize: { type: Number, required: true },
//   lab: { type: String, required: true },
  unit: { type: String, required: false },
  normal_range: { type: String, required: false },
  // price: { type: String, required: false },
//   fssaiNo: { type: String, required: false },
});

export const Pathology = mongoose.model("pathology", pathologySchema);
