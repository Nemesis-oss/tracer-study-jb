import User from "../models/user.models.js";
import noIjazahModels from "../models/no.ijazah.models.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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
  });

  // mengecek apakah nomor ijazah ada di db
  const nomorIjazahDB = await noIjazahModels.findOne({
    nomor_ijazah: nomor_ijazah,
  });
  if (!nomorIjazahDB) {
    return res.status(400).json({
      messege: "nomor ijazah anda tidak ditemukan",
    });
  }

  // mengecek apakah nomor ijazah sudah pernah terdaftar atau belum
  const cekNoIjazah = await User.findOne({ nomor_ijazah: nomor_ijazah });
  if (cekNoIjazah) {
    return res.status(404).json({
      messege: "Nomor Ijazah sudah terdaftar",
    });
  }

  // mengecek apakah username sudah pernah terdaftar belum
  const cekUsername = await User.findOne({ username: username });
  if (cekUsername) {
    return res.status(401).json({
      messege: "Username sudah ada",
    });
  }

  // mengecek apakah email sudah terdaftar atau belum
  const cekEmail = await User.findOne({ email: email });
  if (cekEmail) {
    return res.status(402).json({
      messege: "email sudah terdaftar",
    });
  }

  user.save();

  return res.status(201).json({
    message: "data berhasil ditambahkan",
  });
};

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
        message: "data ditemuka!",
        dataUser: dataUser,
        token: token,
      });
    }
  } else {
    return res.status(404).json({
      message: "data tidak ditemukan",
    });
  }
};
