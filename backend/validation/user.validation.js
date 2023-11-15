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
  check("email", "Email tidak boleh kosong!")
    .notEmpty()
    .isEmail()
    .withMessage("Email harus valid!"),
  check("nomor_WA", "Nomor WA tidak boleh kosong!").notEmpty(),
  check("username", "Username tidak boleh kosong!")
    .notEmpty()
    .isLowercase()
    .withMessage("Username harus huruf kecil!"),
  check("password", "Password tidak boleh kosong!")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password minimal 8 karakter!"),
];

export const validationLogin = [
  check("username", "Username tidak boleh kosong!").notEmpty(),
  check("password", "Password tidak boleh kosong!").notEmpty(),
];

export const validationResetPassword = [
  check("password", "Password tidak boleh kosong!")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password minimal 8 karakter!"),
];

export const validationUpdate = [
  check("nama", "Nama tidak boleh kosong!").notEmpty(),
  check("tanggal_lahir", "Tanggal lahir tidak boleh kosong!").notEmpty(),
  check("jurusan", "Jurusan tidak boleh kosong!").notEmpty(),
  check("angkatan", "Angkatan tidak boleh kosong!").notEmpty(),
  check("email", "Email tidak boleh kosong!")
    .notEmpty()
    .isEmail()
    .withMessage("Email harus valid!"),
  check("nomor_WA", "Nomor WA tidak boleh kosong!").notEmpty(),
];

export const validationKuliah = [
  check("nama_universitas", "Nama Universitas tidak boleh kosong!").notEmpty(),
  check("prodi", "Program Studi tidak boleh kosong!").notEmpty(),
  check("jenjang", "Jenjang tidak boleh kosong!").notEmpty(),
];

export const validationKerja = [
  check(
    "pendidikan_terakhir",
    "Pendidikan Terakhir tidak boleh kosong!"
  ).notEmpty(),
  check("nama_perusahaan", "Nama Perusahaan tidak boleh kosong!").notEmpty(),
  check("tahun_kerja", "Tahun Kerja tidak boleh kosong!").notEmpty(),
];

export const validationKuliahKerja = [
  check("nama_perusahaan", "Nama Perusahaan tidak boleh kosong!").notEmpty(),
  check("tahun_kerja", "Tahun Kerja tidak boleh kosong!").notEmpty(),
  check("nama_universitas", "Nama universitas tidak boleh kosong!").notEmpty(),
  check("prodi", "Program Studi tidak boleh kosong!").notEmpty(),
  check("jenjang", "Jenjang tidak boleh kosong!").notEmpty(),
];

export const validationUserPass = [
  check("newPassword", "Pasword baru tidak boleh kosong!")
    .isLength({ min: 8 })
    .withMessage("Password minimal 8 karakter!"),
];

export const validationMencariKerja = [
  check(
    "pendidikan_akhir",
    "Pendidikan terakhir tidak boleh kosong"
  ).notEmpty(),
  check("alamat", "Alamat tidak boleh kosong").notEmpty(),
  check("alasan", "Alasan tidak boleh kosong").notEmpty(),
  check("email", "Email tidak boleh kosong")
    .notEmpty()
    .isEmail()
    .withMessage("Email harus valid!"),
];

export const validationUsaha = [
  check(
    "pendidikan_akhir",
    "Pendidikan terakhir tidak boleh kosong"
  ).notEmpty(),
  check("jenis_usaha", "Jenis usaha tidak boleh kosong").notEmpty(),
  check("alamat_usaha", "Alamat usaha tidak boleh kosong").notEmpty(),
  check("tahun_usaha", "Tahun usaha tidak boleh kosong").notEmpty(),
];
