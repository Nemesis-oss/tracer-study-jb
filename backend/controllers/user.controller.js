import User from "../models/user.models.js";
import noIjazahModels from "../models/no.ijazah.models.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { kirimEmail } from "../helpers/index.js";

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
    role: "user",
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

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Email tidak ditemukan!",
    });
  }

  const token = jsonwebtoken.sign(
    {
      iduser: user._id,
    },
    process.env.JWT_SECRET
  );

  await user.updateOne({ resetPasswordLink: token });

  const tamplateEmail = {
    from: "De Britto Kolose",
    to: email,
    subject: "Link reset password",
    html: `<p>silahkan klik link dibawah untuk reset password anda!</p> <a href="${process.env.CLIENT_URL}/reset-password/${token}"><button">Reset Password</button></a>`,
  };

  if (isValidToken(token)) {
    kirimEmail(tamplateEmail);
    return res.status(200).json({
      status: true,
      message: "Link reset password berhasil terkirim",
      // data: user,
    });
  } else {
    return res.status(401).json({
      status: false,
      message: "Gagal mengirim link reset password",
    });
  }
};
const isValidToken = (token) => {
  try {
    jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (error) {
    return false;
  }
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  const user = await User.findOne({ resetPasswordLink: token });

  if (user) {
    const hashPassword = await bcryptjs.hash(password, 10);
    user.password = hashPassword;
    await user.save();
    return res.status(201).json({
      status: true,
      message: "Password berhasil diganti",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json({
      data: user,
      message: "Berhasil dipanggil semua",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

export const getSingleUsers = async (req, res) => {
  const user = await User.findOne({ _id: req.id });
  return res.status(200).json({
    message: "berhasil di panggil",
    data: user,
  });
};

export const updateUser = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Token tidak ditemukan" });
    }
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    if (req.body.password) {
      req.body.password = await bcryptjs.hash(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(decoded.id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: `User dengan id ${decoded.id} tidak ditemukan` });
    }
    res.status(200).json({
      message: "Profile data berhasil diupdate",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({
      message: "Data berhasil di hapus",
      data: deleteUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
