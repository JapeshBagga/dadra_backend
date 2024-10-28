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
      // enum:["Tablet", "Capsule", "Syrup"]
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
    ref: "Appointment",
    required: true,
  },
  bp: {
    type: String,
    required: [true, "Provide A Valid BP!"]
  },
  spo2: {
    type: String,
    required: [true, "Provide A Valid SPO2!"]
  },
  rbs: {
    type: String,
    required: [true, "Provide A Valid RBS!"]
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
  investigation: {
    type: String,
    required: [true, "Provide A Valid Investigation!"],
  },
  complain: {
    type: String,
    required: [true, "Provide A Valid complain!"],
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
  }
},{
    timestamps:true
  });

export const Opd = mongoose.model("Opd", opdSchema);

