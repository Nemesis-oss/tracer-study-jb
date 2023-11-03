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
  check("nama", "Nama tidak boleh kosong!").notEmpty(),
  check("tanggal_lahir", "Tanggal lahir tidak boleh kosong!").notEmpty(),
  check("nomor_ijazah", "Nomor ijazah tidak boleh kosong!").notEmpty(),
  check("jurusan", "Jurusan tidak boleh kosong!").notEmpty(),
  check("angkatan", "Angkatan tidak boleh kosong!").notEmpty(),
  check("email", "Email tidak boleh kosong!").notEmpty().isEmail().withMessage("Email harus valid!"),
  check("nomor_WA", "Nomor WA tidak boleh kosong!").notEmpty(),
  check("username", "Username tidak boleh kosong!").notEmpty().isLowercase().withMessage("Username harus huruf kecil!"),
  check("password", "Password tidak boleh kosong!").notEmpty().isLength({ min: 8 }).withMessage("Password minimal 8 karakter!"),
];

export const validationLogin = [
  check("username", "Username tidak boleh kosong!").notEmpty(),
  check("password", "Password tidak boleh kosong!").notEmpty()
]

export const validationResetPassword = [
  check("password", "Password tidak boleh kosong!").notEmpty().isLength({ min: 8 }).withMessage("Password minimal 8 karakter!"),
]

export const validationUpdate = [
  check("nama", "Nama tidak boleh kosong!").notEmpty(),
  check("tanggal_lahir", "Tanggal lahir tidak boleh kosong!").notEmpty(),
  check("jurusan", "Jurusan tidak boleh kosong!").notEmpty(),
  check("angkatan", "Angkatan tidak boleh kosong!").notEmpty(),
  check("email", "Email tidak boleh kosong!").notEmpty().isEmail().withMessage("Email harus valid!"),
  check("nomor_WA", "Nomor WA tidak boleh kosong!").notEmpty(),
  check("username", "Username tidak boleh kosong!").notEmpty().isLowercase().withMessage("Username harus huruf kecil!"),
  check("password", "Password tidak boleh kosong!").notEmpty().isLength({ min: 8 }).withMessage("Password minimal 8 karakter!"),
]
