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
  "/kerja/:userId",
  upload,
  validationKerja,
  runValidation,
  createKerja
);
router.get("/kerja/all", readAllKerja);
router.get("/kerja", midleware, readKerjaByToken);
router.get("/kerja/:userId", readKerjaByAdmin);
router.put(
  "/kerja/:userId",
  upload,
  validationKerja,
  runValidation,
  updateKerja
);
router.delete("/kerja/:userId", deleteKerja);

export default router;
