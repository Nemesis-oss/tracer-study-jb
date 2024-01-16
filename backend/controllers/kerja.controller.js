import Kerja from "../models/kerja.model.js";
import User from "../models/user.models.js";
import fs from "fs";

export const createKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { pendidikan_terakhir, nama_perusahaan, jabatan, tahun_kerja } =
      req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "Id user tidak ditemukan",
      });
    }

    const kerja = new Kerja({
      user: userId,
      nama: user.nama,
      angkatan: user.angkatan,
      pendidikan_terakhir: pendidikan_terakhir,
      nama_perusahaan: nama_perusahaan,
      jabatan: jabatan,
      tahun_kerja: tahun_kerja,
      jenis: "Kerja",
      gambar: req.file ? req.file.path : null,
      urlGambar: req.file
        ? `${req.protocol}://${req.get("host")}/${req.file.path}`
        : null,
    });

    const cekKerja = await Kerja.findOne({ user: user });
    if (cekKerja) {
      return res.status(403).json({
        message: "Anda sudah pernah memasukan data kerja",
      });
    }

    const result = await kerja.save();
    return res.status(201).json({
      status: true,
      message: "Data berhasil ditambahkan",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "error pada sistem",
    });
  }
};

export const readAllKerja = async (req, res) => {
  try {
    const kerja = await Kerja.find();
    return res.status(201).json({
      status: true,
      message: "Data berhasil dipanggil semua",
      data: kerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "error pada sistem",
    });
  }
};

export const readKerjaByToken = async (req, res) => {
  const kerja = await Kerja.findOne({ user: req.id });
  return res.status(200).json({
    status: false,
    message: "berhasil di panggil",
    data: kerja,
  });
};

export const readKerjaByAdmin = async (req, res) => {
  try {
    const userId = req.params.userId;
    const kerja = await Kerja.findOne({ user: userId });
    return res.status(201).json({
      status: true,
      data: kerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

export const updateKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const {
      nama,
      angkatan,
      pendidikan_terakhir,
      nama_perusahaan,
      jabatan,
      tahun_kerja,
    } = req.body;

    let kerja = await Kerja.findOneAndUpdate(
      { user: userId },
      {
        nama,
        angkatan,
        pendidikan_terakhir,
        nama_perusahaan,
        jabatan,
        tahun_kerja,
      },
      { new: true }
    );

    if (!kerja) {
      return res.status(401).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    if (req.file && kerja.gambar) {
      fs.unlinkSync(kerja.gambar);
    }

    // Jika ada file gambar yang diupload, perbarui juga field gambar dan urlGambar
    if (req.file) {
      kerja.gambar = req.file.path;
      kerja.urlGambar = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    kerja = await kerja.save();

    return res.status(201).json({
      status: true,
      message: "Data berhasil diupdate",
      data: kerja,
    });
  } catch (error) {
    return res.status(402).json({
      status: false,
      message: "error pada sistem, data tidak dapat diupdate",
    });
  }
};

export const deleteKerja = async (req, res) => {
  try {
    const userId = req.params.userId;

    const kerja = await Kerja.findOne({ user: userId });

    if (!kerja) {
      return res.status(401).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    // Langkah 2: Hapus gambar fisik jika ada
    if (kerja.gambar) {
      fs.unlinkSync(kerja.gambar);
    }

    // Langkah 3: Hapus dokumen dari basis data
    const result = await Kerja.deleteOne({ user: userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Data kerja tidak ditemukan." });
    }

    return res.status(201).json({
      status: true,
      message: "Data berhasil di hapus",
      data: kerja,
    });
  } catch (error) {
    return res.status(404).json({
      status: false,
      message: "Data tidak ditemukan",
    });
  }
};
