import {getPathologys, addPathology, getPathologyById, updatePathology} from "../controller/pathologyController.js";
import express from "express";

import {
  isAdminAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post('/add', isAdminAuthenticated, addPathology);
router.get('/all', isAdminAuthenticated, getPathologys);
router.get('/:id',isAdminAuthenticated, getPathologyById);
router.put('/:id',isAdminAuthenticated, updatePathology);

export default router;
