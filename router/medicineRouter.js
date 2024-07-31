import {getMedicines, addMedicine, getMedicineById, updateMedicine} from "../controller/medicineController.js";
import express from "express";

import {
  isAdminAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post('/add', isAdminAuthenticated, addMedicine);
router.get('/all', isAdminAuthenticated, getMedicines);
router.get('/:id',isAdminAuthenticated, getMedicineById);
router.put('/:id',isAdminAuthenticated, updateMedicine);

export default router;
