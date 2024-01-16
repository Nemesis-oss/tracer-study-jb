import MencariKerja from "../models/mencari.kerja.model.js";
import User from "../models/user.models.js";
import fs from "fs";
 
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
      gambar: req.file ? req.file.path : null,
      urlGambar: req.file
        ? `${req.protocol}://${req.get("host")}/${req.file.path}`
        : null,
    });

    const cekData = await MencariKerja.findOne({ user: user });
    if (cekData) {
      return res.status(402).json({
        status: false,
        message: "Anda sudah pernah memasukan data mencari data",
      });
    }

    const result = mencariKerja.save();
    return res.status(201).json({
      status: true,
      message: "Data berhasil ditambahkan",
      data: result,
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

    let mencariKerja = await MencariKerja.findOneAndUpdate(
      { user: userId },
      { nama, angkatan, pendidikan_akhir, alamat, alasan, email },
      { new: true }
    );

    if (!mencariKerja) {
      return res.status(401).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    if (req.file && mencariKerja.gambar) {
      fs.unlinkSync(mencariKerja.gambar);
    }

    // Jika ada file gambar yang diupload, perbarui juga field gambar dan urlGambar
    if (req.file) {
      mencariKerja.gambar = req.file.path;
      mencariKerja.urlGambar = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }

    mencariKerja = await mencariKerja.save();


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

    const mencariKerja = await MencariKerja.findOne({ user: userId });

    if (!mencariKerja) {
      return res.status(401).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

     // Langkah 2: Hapus gambar fisik jika ada
     if (mencariKerja.gambar) {
      fs.unlinkSync(mencariKerja.gambar);
    }

    const result = await MencariKerja.deleteOne({ user: userId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Data kerja tidak ditemukan." });
    }

    return res.status(202).json({
      status: true,
      message: "Data berhasil di hapus",
      data: result,
    });
  } catch (error) {
    return res.status(402).json({
      status: false,
      message: error,
    });
  }
};
