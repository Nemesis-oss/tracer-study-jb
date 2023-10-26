import User from "../models/user.models.js";
import noIjazahModels from "../models/no.ijazah.models.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// mengatur tentang daftar
export const UserRegister = async (req, res) => {
  const {
    nama,
    tanggal_lahir,
    nomor_ijazah,
    jurusan,
    angkatan,
    email,
    nomor_WA,
    username,
    password,
  } = req.body;

  const hashPassword = await bcryptjs.hash(password, 10);

  const user = new User({
    nama: nama,
    tanggal_lahir: tanggal_lahir,
    nomor_ijazah: nomor_ijazah,
    jurusan: jurusan,
    angkatan: angkatan,
    email: email,
    nomor_WA: nomor_WA,
    username: username,
    password: hashPassword,
    role:"user"
  });

  // mengecek apakah nomor ijazah ada di db
  const nomorIjazahDB = await noIjazahModels.findOne({
    nomor_ijazah: nomor_ijazah,
  });
  if (!nomorIjazahDB) {
    return res.status(400).json({
      message: "Nomor ijazah anda tidak ditemukan",
    });
  }

  // mengecek apakah nomor ijazah sudah pernah terdaftar atau belum
  const cekNoIjazah = await User.findOne({ nomor_ijazah: nomor_ijazah });
  if (cekNoIjazah) {
    return res.status(404).json({
      message: "Nomor Ijazah sudah terdaftar",
    });
  }

  // mengecek apakah username sudah pernah terdaftar belum
  const cekUsername = await User.findOne({ username: username });
  if (cekUsername) {
    return res.status(401).json({
      message: "Username sudah terdaftar",
    });
  }

  // mengecek apakah email sudah terdaftar atau belum
  const cekEmail = await User.findOne({ email: email });
  if (cekEmail) {
    return res.status(402).json({
      message: "Email sudah terdaftar",
    });
  }

  user.save();

  return res.status(201).json({
    message: "Akun berhasil dibuat!",
  });
};

// mengatur tentang login
export const UserLogin = async (req, res) => {
  const { username, password } = req.body;

  const dataUser = await User.findOne({
    $or: [{ username: username }, { email: username }],
  });

  if (dataUser) {
    const passworduser = await bcryptjs.compare(password, dataUser.password);

    if (passworduser) {
      const data = {
        id: dataUser._id,
      };
      const token = await jsonwebtoken.sign(data, process.env.JWT_SECRET);

      return res.status(200).json({
        message: "Akun berhasil login!",
        dataUser: dataUser,
        token: token,
      });
    } else {
      return res.status(403).json({
        message: "Password tidak ditemukan",
      });
    }
  } else {
    return res.status(403).json({
      message: "Username atau email tidak ditemukan",
    });
  }
};

export const getSingleUser = async (req, res) => {
  console.log(req.id);
  const user = await User.findOne({ _id: req.id });
  return res.status(200).json({
    message: "Berhasil di panggil",
    data: user,
  });
};
