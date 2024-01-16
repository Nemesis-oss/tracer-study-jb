import Kuliah from "../models/kuliah.model.js";
import User from "../models/user.models.js";
import fs from "fs";

// Membuat data kuliah baru
export const createKuliah = async (req, res) => {
  try {
    const userId = req.params.userId; // Ambil ID pengguna dari parameter rute
    const { nama_universitas, prodi, jenjang } = req.body;

    // Langkah 1: Periksa apakah ID pengguna ada dalam koleksi "User"
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "ID pengguna tidak ditemukan." });
    }

    // Langkah 2: Buat data "kuliah" berdasarkan ID pengguna yang ada dan nama dari pengguna
    const kuliah = new Kuliah({
      user: userId,
      nama: user.nama, // Isi field "nama" dengan nama dari pengguna
      angkatan: user.angkatan,
      nama_universitas,
      prodi,
      jenjang,
      jenis: "Kuliah",
      gambar: req.file ? req.file.path : null,
      urlGambar: req.file
        ? `${req.protocol}://${req.get("host")}/${req.file.path}`
        : null,
    });

    const cekKuliah = await Kuliah.findOne({ user: user });
    if (cekKuliah) {
      return res.status(404).json({
        message: "Anda sudah pernah memasukan data kuliah",
      });
    }

    const result = await kuliah.save();
    res.status(201).json({
      data: result,
      message: "Data berhasil ditambahkan",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mendapatkan data kuliah berdasarkan token pengguna
export const getKuliahByToken = async (req, res) => {
  const kuliah = await Kuliah.findOne({ user: req.id });
  return res.status(200).json({
    message: "berhasil di panggil",
    data: kuliah,
  });
};

export const getAll = async (req, res) => {
  try {
    const kuliah = await Kuliah.find();
    return res.status(201).json({
      status: true,
      message: "Data berhasil dipanggil semua",
      data: kuliah,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Error pada sistem",
    });
  }
};

export const readKuliahByAdmin = async (req, res) => {
  try {
    const userId = req.params.userId;
    const kuliah = await Kuliah.findOne({ user: userId });
    return res.status(201).json({
      status: true,
      data: kuliah,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

// Memperbarui data kuliah
export const updateKuliah = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { nama, angkatan, nama_universitas, prodi, jenjang } = req.body;

    // Temukan data kuliah berdasarkan ID pengguna
    let kuliah = await Kuliah.findOneAndUpdate(
      { user: userId },
      { nama, angkatan, nama_universitas, prodi, jenjang },
      { new: true }
    );
    // Periksa apakah data kuliah ditemukan
    if (!kuliah) {
      return res.status(404).json({ error: "Data kuliah tidak ditemukan." });
    }

    if (req.file && kuliah.gambar) {
      fs.unlinkSync(kuliah.gambar);
    }

    // Jika ada file gambar yang diupload, perbarui juga field gambar dan urlGambar
    if (req.file) {
      kuliah.gambar = req.file.path;
      kuliah.urlGambar = `${req.protocol}://${req.get("host")}/${
        req.file.path
      }`;
    }

    // Simpan perubahan
    kuliah = await kuliah.save();

    // Kirim data kuliah yang diperbarui sebagai respons
    res.status(200).json(kuliah);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Menghapus data kuliah
export const deleteKuliah = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Langkah 1: Cari dokumen yang akan dihapus
    const kuliah = await Kuliah.findOne({ user: userId });
    if (!kuliah) {
      return res.status(404).json({ error: "Data kuliah tidak ditemukan." });
    }

    // Langkah 2: Hapus gambar fisik jika ada
    if (kuliah.gambar) {
      fs.unlinkSync(kuliah.gambar);
    }

    // Langkah 3: Hapus dokumen dari basis data
    const result = await Kuliah.deleteOne({ user: userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Data kuliah tidak ditemukan." });
    }

    res.status(200).json({
      message: "Data kuliah berhasil dihapus",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
