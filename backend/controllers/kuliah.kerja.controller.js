import KuliahKerja from "../models/kuliah.kerja.model.js";
import User from "../models/user.models.js";

export const createKuliahKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const {
      nama_perusahaan,
      jabatan,
      tahun_kerja,
      nama_universitas,
      prodi,
      jenjang,
    } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    const kuliahKerja = new KuliahKerja({
      user: userId,
      nama: user.nama,
      angkatan: user.angkatan,
      nama_perusahaan: nama_perusahaan,
      jabatan: jabatan,
      tahun_kerja: tahun_kerja,
      nama_universitas: nama_universitas,
      prodi: prodi,
      jenjang: jenjang,
      jenis: "Kuliah & Kerja",
    });

    const cekData = await KuliahKerja.findOne({ user: user });
    if (cekData) {
      return res.status(402).json({
        status: false,
        message: "Anda sudah pernah memasukan data Kuliah & kerja",
      });
    }

    kuliahKerja.save();

    return res.status(201).json({
      status: true,
      message: "Data berhasil ditambahkan",
      data: kuliahKerja,
    });
  } catch (error) {
    return res.status(403).json({
      status: false,
      message: "Error pada query",
    });
  }
};
 
export const readAllKuliahKerja = async (req, res) => {
  try {
    const kuliahKerja = await KuliahKerja.find();
    return res.status(201).json({
      status: true,
      message: "Data berhasil dipanggil semua",
      data: kuliahKerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Erro pada query",
    });
  }
};

export const readSingleKuliahKerja = async (req, res) => {
  try {
    const kuliahKerja = await KuliahKerja.findOne({ user: req.id });
    return res.status(201).json({
      status: true,
      data: kuliahKerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "kesalahan pada query",
    });
  }
};

export const readKuliahKerjaByAdmin = async (req, res) => {
  try {
    const userId = req.params.userId;
    const kuliahKerja = await KuliahKerja.findOne({ user: userId });
    return res.status(201).json({
      status: true,
      data: kuliahKerja,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      data: error,
    });
  }
};

export const updateKuliahKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const {
      nama,
      angkatan,
      nama_perusahaan,
      jabatan,
      tahun_kerja,
      nama_universitas,
      prodi,
      jenjang,
    } = req.body;

    const kuliahKerja = await KuliahKerja.findOneAndUpdate(
      { user: userId },
      {
        nama,
        angkatan,
        nama_perusahaan,
        nama_universitas,
        jabatan,
        tahun_kerja,
        prodi,
        jenjang,
      },
      { new: true }
    );
    if (!kuliahKerja) {
      return res.status(401).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }
    return res.status(201).json({
      status: true,
      message: "Data berhasil di update",
      data: kuliahKerja,
    });
  } catch (error) {
    return res.status(403).json({
      status: false,
      message: "error pada query",
    });
  }
};

export const deleteKuliahKerja = async (req, res) => {
  try {
    const userId = req.params.userId;
    const kuliahKerja = await KuliahKerja.deleteOne({ user: userId });
    return res.status(202).json({
      status: true,
      message: "Data berhasil di hapus",
      data: kuliahKerja,
    });
  } catch (error) {
    return res.status(402).json({
      status: false,
      message: "error pada query",
    });
  }
};
