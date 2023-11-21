import express from "express";
import {
  createKuliah,
  getKuliahByToken,
  updateKuliah,
  deleteKuliah,
  getAll,
  readKuliahByAdmin,
} from "../controllers/kuliah.controller.js";

import midleware from "../middleware/user.midleware.js";
import {
  runValidation,
  validationKuliah,
} from "../validation/user.validation.js";

const router = express.Router();

// Rute untuk membuat data kuliah baru
router.post("/kuliah/:userId", validationKuliah, runValidation, createKuliah);

router.get("/kuliah/all", getAll);

// Rute untuk mendapatkan data kuliah berdasarkan ID pengguna
router.get("/kuliah", midleware, getKuliahByToken);

router.get("/kuliah/:userId", readKuliahByAdmin);

// Rute untuk memperbarui data kuliah
router.put("/kuliah/:userId", validationKuliah, runValidation, updateKuliah);

// Rute untuk menghapus data kuliah
router.delete("/kuliah/:userId", deleteKuliah);

export default router;
