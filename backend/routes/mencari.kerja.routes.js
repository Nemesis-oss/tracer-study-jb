import express from "express";
import {
  createMencariKerja,
  deleteMencariKerja,
  readAllMencariKerja,
  readSingleMencariKerja,
  updateMencariKerja,
} from "../controllers/mencari.kerja.controller.js";
import midleware from "../middleware/user.midleware.js";
const router = express.Router();
import {
  runValidation,
  validationMencariKerja,
} from "../validation/user.validation.js";

router.post(
  "/mencari-kerja/:userId",
  validationMencariKerja,
  runValidation,
  createMencariKerja
);
router.get("/mencari-kerja/all", readAllMencariKerja);
router.get("/mencari-kerja", midleware, readSingleMencariKerja);
router.put(
  "/mencari-kerja/:userId",
  validationMencariKerja,
  runValidation,
  updateMencariKerja
);

router.delete("/mencari-kerja/:userId", deleteMencariKerja);

export default router;
