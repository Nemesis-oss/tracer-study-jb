import Usaha from "../models/usaha.model.js";
import User from "../models/user.models.js";

export const createUsaha = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { pendidikan_akhir, jenis_usaha, alamat_usaha, tahun_usaha } =
      req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Data user tidak ditemukan",
      });
    }

    const usaha = new Usaha({
      user: userId,
      nama: user.nama,
      angkatan: user.angkatan,
      pendidikan_akhir: pendidikan_akhir,
      alamat_usaha: alamat_usaha,
      jenis_usaha: jenis_usaha,
      tahun_usaha: tahun_usaha,
      jenis: "Usaha",
    });

    const cekData = await Usaha.findOne({ user: user });
    if (cekData) {
      return res.status(402).json({
        status: false,
        message: "Anda sudah pernah memasukan data usaha",
      });
    }

    usaha.save();

    return res.status(201).json({
      status: true,
      message: "Data berhasil ditambahkan",
      data: usaha,
    });
  } catch (error) {
    return res.status(403).json({
      status: false,
      message: "kesalahan pada query",
    });
  }
};

export const readAllUsaha = async (req, res) => {
  try {
    const usaha = await Usaha.find();
    return res.status(201).json({
      status: true,
      data: usaha,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

export const readSingleUsaha = async (req, res) => {
  try {
    const usaha = await Usaha.findOne({ user: req.id });
    return res.status(201).json({
      status: true,
      data: usaha,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

export const updateUsaha = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { pendidikan_akhir, jenis_usaha, alamat_usaha, tahun_usaha } =
      req.body;
    const usaha = await Usaha.findOneAndUpdate(
      { user: userId },
      { pendidikan_akhir, jenis_usaha, alamat_usaha, tahun_usaha },
      { new: true }
    );
    return res.status(201).json({
      status: true,
      message: "Data berhasil diupdate",
      data: usaha,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: error,
    });
  }
};

export const deleteUsaha = async (req, res) => {
  try {
    const userId = req.params.userId;
    const usaha = await Usaha.deleteOne({ user: userId });
    return res.status(202).json({
      status: true,
      message: "Data berhasil di hapus",
      data: usaha,
    });
  } catch (error) {
    return res.status(402).json({
      status: false,
      message: error,
    });
  }
};
