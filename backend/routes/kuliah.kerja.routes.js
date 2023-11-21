import express from "express";
import {
  createKuliahKerja,
  deleteKuliahKerja,
  readAllKuliahKerja,
  readKuliahKerjaByAdmin,
  readSingleKuliahKerja,
  updateKuliahKerja,
} from "../controllers/kuliah.kerja.controller.js";
import {
  validationKuliahKerja,
  runValidation,
} from "../validation/user.validation.js";

import midleware from "../middleware/user.midleware.js";

const router = express.Router();

router.post(
  "/kuliah-kerja/:userId",
  validationKuliahKerja,
  runValidation,
  createKuliahKerja
);
router.get("/kuliah-kerja/all", readAllKuliahKerja);
router.get("/kuliah-kerja", midleware, readSingleKuliahKerja);
router.get("/kuliah-kerja/:userId", readKuliahKerjaByAdmin);
router.put(
  "/kuliah-kerja/:userId",
  validationKuliahKerja,
  runValidation,
  updateKuliahKerja
);
router.delete("/kuliah-kerja/:userId", deleteKuliahKerja);

export default router;
