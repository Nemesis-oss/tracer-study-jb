import express from "express";
import {
  createUsaha,
  deleteUsaha,
  readAllUsaha,
  readSingleUsaha,
  readUsahaByAdmin,
  updateUsaha,
} from "../controllers/usaha.controller.js";
import midleware from "../middleware/user.midleware.js";
import {
  runValidation,
  validationUsaha,
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

router.post("/usaha/:userId", upload,validationUsaha, runValidation, createUsaha);
router.get("/usaha/all", readAllUsaha);
router.get("/usaha", midleware, readSingleUsaha);
router.get("/usaha/:userId", readUsahaByAdmin);
router.put("/usaha/:userId", upload, validationUsaha, runValidation, updateUsaha);

router.delete("/usaha/:userId", deleteUsaha);

export default router;