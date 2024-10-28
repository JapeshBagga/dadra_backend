
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import {Medicine} from "../models/medicineSchema.js";

export const addMedicine = catchAsyncErrors(async (req, res, next) => {
  const exist = await Medicine.findOne({name: req.body.name.trim()});
  if(exist)  return res.status(404).json({ error: 'Medicine already exist' });

  const medicine = new Medicine(req.body);
  await medicine.save();
  res.status(200).json({
    success: true,
    message: "Medicine Added!",
  });
});

export const getMedicines = catchAsyncErrors(async (req, res, next) => {
  const medicines = await Medicine.find();
  res.status(200).json(medicines);
});

export const getMedicineById = catchAsyncErrors(async (req, res, next) => {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) return res.status(404).json({ error: 'Medicine not found' });
    res.status(200).json(medicine);
  
});

export const updateMedicine = catchAsyncErrors(async (req, res, next) => {    
  // const exist = await Medicine.findOne({name: req.body.name});
  // if(exist)  return res.status(404).json({ error: 'Medicine already exist' });

    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, upsert : true});
    if (!medicine) {
      return res.status(404).json({ error: 'Medicine not found' });
    }
    res.status(200).json(medicine);
  
});

export const updateMedicineQuantity = catchAsyncErrors(async (req, res, next) => {
      let medicines = req.body;
      await medicines.forEach(async (medicine) => {        
        const updatedMedicine = await Medicine.findOneAndUpdate(
          { name: medicine.name },
          { $inc: { quantity: -medicine.quantity } },
          { new: true, useFindAndModify: false, runValidators: true, upsert : true}
        );

        if (!updatedMedicine) {
          console.log(`Medicine not found: ${medicine.name}`);
        }
      });
      
      res.status(200).json({success: true, message: "Medicine quantity updated!"});
});