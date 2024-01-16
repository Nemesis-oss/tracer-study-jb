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

import multer from "multer";
import path from "path";

// Konfigurasi multer untuk menangani upload gambar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // Sesuaikan dengan direktori penyimpanan gambar Anda
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  // Periksa ekstensi file
  const allowedExtensions = [".png", ".jpg", ".jpeg"];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Hanya diperbolehkan file dengan ekstensi .png, .jpg, dan .jpeg"
      )
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single("gambar");

const router = express.Router();

// Rute untuk membuat data kuliah baru
router.post(
  "/kuliah/:userId",
  upload,
  validationKuliah,
  runValidation,
  createKuliah
);

router.get("/kuliah/all", getAll);

// Rute untuk mendapatkan data kuliah berdasarkan ID pengguna
router.get("/kuliah", midleware, getKuliahByToken);

router.get("/kuliah/:userId", readKuliahByAdmin);

// Rute untuk memperbarui data kuliah
router.put(
  "/kuliah/:userId",
  upload,
  validationKuliah,
  runValidation,
  updateKuliah
);

// Rute untuk menghapus data kuliah
router.delete("/kuliah/:userId", deleteKuliah);

export default router;
