import mongoose, {Schema} from "mongoose";

const dosageSchema = new Schema({
  quantity: {
    type: String,
    required: [true, "Provide A Valid BP!"],
  },
  type: {
    type: String,
    enum:["tab", "ml","l", "cap"]
  },
});

const medicineSchema = new Schema({
    category: {
      type: String,
      required: [true, "Provide A Category!"],
      enum:["Tablet", "Capsule", "Syrup"]
    },
    name: {
      type: String,
      required: [true, "Provide A Valid BP!"],
    },
    dosage: {
      type: dosageSchema,
      required: [true, "Provide A Valid BP!"],
    },
    dose_interval: {
      type: String,
    },
    dose_duration: {
        type: String,
    },
    instruction: {
        type: String,
    },
  });

const opdSchema = new Schema({
  opdId: {
    type: String,
    required: true,
    // minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "appointment",
    required: true,
  },
  bp: {
    type: String,
    required: [true, "Provide A Valid BP!"]
  },
  rr: {
    type: String,
  },
  temperature: {
    type: String,
    required: [true, "Provide A Valid BP!"],
  },
  diagonsis: {
    type: String,
    required: [true, "Provide A Valid BP!"],
  },
  medicines: {
    type: [
        medicineSchema
    ],
    required: [true, "Provide A Valid BP!"],
  },
  advice: {
    type: String,
    required: [true, "Provide A Valid BP!"],
  },
});

export const Opd = mongoose.model("Opd", opdSchema);
