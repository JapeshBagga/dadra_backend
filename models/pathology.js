import mongoose from "mongoose";

const pathologySchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  case_id: { type: String, required: false },
  // lotSize: { type: Number, required: true },
//   lab: { type: String, required: true },
  sample_collected_date: { type: Date, required: false },
  expected_date: { type: Date, required: false },
//   fssaiNo: { type: String, required: false },
});

export const Pathology = mongoose.model("pathology", pathologySchema);
