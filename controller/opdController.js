import { Opd } from '../models/opdSchema.js';

// Fetch OPD details by patientId
export const getOpdByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;
    const opd = await Opd.find({ patientId }).populate("patientId");

    if (opd) {
      res.status(200).json(opd);
    } else {
      res.status(404).json({ message: 'OPD record not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create or update OPD details
export const upsertOpd = async (req, res) => {
  try {
    const { patientId } = req.params;
    const opdData = req.body;

    let opd = await Opd.create({ patientId, ...opdData, });
    console.log("🚀 ~ upsertOpd ~ opd:", opd)

    res.status(200).json(opd);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};