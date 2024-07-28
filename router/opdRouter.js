import { getOpdByPatientId, upsertOpd } from '../controller/opdController.js';
import {
    isAdminAuthenticated,
    isPatientAuthenticated,
  } from "../middlewares/auth.js";
import express from "express";

const router = express.Router();

router.get('/:patientId',isAdminAuthenticated, getOpdByPatientId);
router.post('/:patientId',isAdminAuthenticated, upsertOpd);

export default router;
