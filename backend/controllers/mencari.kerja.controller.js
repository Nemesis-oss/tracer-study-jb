import MencariKerja from "../models/mencari.kerja.model.js";
import User from "../models/user.models.js";

export const createMencariKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { pendidikan_akhir, alamat, alasan, email } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Data user tidak ditemukan",
      });
    } 

    const mencariKerja = new MencariKerja({
      user: userId,
      nama: user.nama,
      angkatan: user.angkatan,
      pendidikan_akhir: pendidikan_akhir,
      email: email,
      alamat: alamat,
      alasan: alasan,
      jenis: "Mencari Kerja",
    });

    const cekData = await MencariKerja.findOne({ user: user });
    if (cekData) {
      return res.status(402).json({
        status: false,
        message: "Anda sudah pernah memasukan data mencari data",
      });
    }

    mencariKerja.save();

    return res.status(201).json({
      status: true,
      message: "Data berhasil ditambahkan",
      data: mencariKerja,
    });
  } catch (error) {
    return res.status(403).json({
      status: false,
      message: "kesalahan pada query",
    });
  }
};

export const readAllMencariKerja = async (req, res) => {
  try {
    const mencariKerja = await MencariKerja.find();
    return res.status(201).json({
      status: true,
      data: mencariKerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

export const readSingleMencariKerja = async (req, res) => {
  try {
    const mencariKerja = await MencariKerja.findOne({ user: req.id });
    return res.status(201).json({
      status: true,
      data: mencariKerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

export const readMencariKerjaByAdmin = async (req, res) => {
  try {
    const userId = req.params.userId;
    const mencariKerja = await MencariKerja.findOne({ user: userId });
    return res.status(201).json({
      status: true,
      data: mencariKerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

export const updateMencariKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { nama, angkatan, pendidikan_akhir, alamat, alasan, email } =
      req.body;
    const mencariKerja = await MencariKerja.findOneAndUpdate(
      { user: userId },
      { nama, angkatan, pendidikan_akhir, alamat, alasan, email },
      { new: true }
    );
    return res.status(201).json({
      status: true,
      message: "Data berhasil diupdate",
      data: mencariKerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: error,
    });
  }
};

export const deleteMencariKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const mencariKerja = await MencariKerja.deleteOne({ user: userId });
    return res.status(202).json({
      status: true,
      message: "Data berhasil di hapus",
      data: mencariKerja,
    });
  } catch (error) {
    return res.status(402).json({
      status: false,
      message: error,
    });
  }
};
