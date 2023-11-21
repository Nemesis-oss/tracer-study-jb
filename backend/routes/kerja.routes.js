import express from "express";

import {
  createKerja,
  deleteKerja,
  readAllKerja,
  readKerjaByAdmin,
  readKerjaByToken,
  updateKerja,
} from "../controllers/kerja.controller.js";
import {
  runValidation,
  validationKerja,
} from "../validation/user.validation.js";
import midleware from "../middleware/user.midleware.js";
const router = express.Router();

router.post("/kerja/:userId", validationKerja, runValidation, createKerja);
router.get("/kerja/all", readAllKerja);
router.get("/kerja", midleware, readKerjaByToken);
router.get("/kerja/:userId", readKerjaByAdmin);
router.put("/kerja/:userId", validationKerja, runValidation, updateKerja);
router.delete("/kerja/:userId", deleteKerja);

export default router;
