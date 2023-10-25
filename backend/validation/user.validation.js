import { check, validationResult } from "express-validator";

export const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      status: false,
      message: errors.array()[0].msg,
    });
  }
  next();
};

export const validationDaftar = [
  check("nama", "nama tidak boleh kosong").notEmpty(),
  check("tanggal_lahir", "tanggal lahir tidak boleh kosong").notEmpty(),
  check("nomor_ijazah", "nomor ijazah tidak boleh kosong").notEmpty(),
  check("jurusan", "jurusan tidak boleh kosong").notEmpty(),
  check("angkatan", "angkatan tidak boleh kosong").notEmpty(),
  check("email", "email tidak boleh kosong").notEmpty().isEmail().withMessage("email harus valid"),
  check("nomor_WA", "nomor WA tidak boleh kosong").notEmpty(),
  check("username", "username tidak boleh kosong").notEmpty().isLowercase().withMessage("username harus huruf kecil"),
  check("password", "password tidak boleh kosong").notEmpty().isLength({ min: 8 }).withMessage("password minimal 8 karakter"),
];

export const validationLogin = [
  check("username", "username tidak boleh kosong").notEmpty(),
  check("password", "password tidak boleh kosong").notEmpty()
]
