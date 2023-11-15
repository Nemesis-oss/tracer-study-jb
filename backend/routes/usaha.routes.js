import express from "express";
import {
  createUsaha,
  deleteUsaha,
  readAllUsaha,
  readSingleUsaha,
  updateUsaha,
} from "../controllers/usaha.controller.js";
import midleware from "../middleware/user.midleware.js";
import {
  runValidation,
  validationUsaha,
} from "../validation/user.validation.js";

const router = express.Router();

router.post("/usaha/:userId", validationUsaha, runValidation, createUsaha);
router.get("/usaha/all", readAllUsaha);
router.get("/usaha", midleware, readSingleUsaha);
router.put("/usaha/:userId", validationUsaha, runValidation, updateUsaha);

router.delete("/usaha/:userId", deleteUsaha);

export default router;
