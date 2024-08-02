
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Pathology } from "../models/pathology.js";

export const addPathology = catchAsyncErrors(async (req, res, next) => {
    const exist = await Pathology.findOne({name: req.body.name.trim()});
    if(exist)  return res.status(404).json({ error: 'Lab Test already exist' });

    const test = new Pathology(req.body);
    await test.save();
    res.status(200).json({
      success: true,
      message: "Lab Test Added!",
    });
  });

  export const getPathologys = catchAsyncErrors(async (req, res, next) => {
    const tests = await Pathology.find();
    res.status(200).json(tests);
  });

  export const getPathologyById = catchAsyncErrors(async (req, res, next) => {
      const test = await Pathology.findById(req.params.id);
      if (!test) return res.status(404).json({ error: 'Lab Test not found' });
      res.status(200).json(test);
    
  });

  export const updatePathology = catchAsyncErrors(async (req, res, next) => {    
    // const exist = await Pathology.findOne({name: req.body.name});
    // if(exist)  return res.status(404).json({ error: 'Lab Test already exist' });

      const test = await Pathology.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, upsert : true});
      if (!test) {
        return res.status(404).json({ error: 'Lab Test not found' });
      }
      res.status(200).json(test);
    
  });