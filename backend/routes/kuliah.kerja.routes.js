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

router.post(
  "/kuliah-kerja/:userId",
  upload,
  validationKuliahKerja,
  runValidation,
  createKuliahKerja
);
router.get("/kuliah-kerja/all", readAllKuliahKerja);
router.get("/kuliah-kerja", midleware, readSingleKuliahKerja);
router.get("/kuliah-kerja/:userId", readKuliahKerjaByAdmin);
router.put(
  "/kuliah-kerja/:userId",
  upload,
  validationKuliahKerja,
  runValidation,
  updateKuliahKerja
);
router.delete("/kuliah-kerja/:userId", deleteKuliahKerja);

export default router;