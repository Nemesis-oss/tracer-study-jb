import express from "express";
import KerjaModel from "../models/kerja.model.js";
import KuliahModel from "../models/kuliah.model.js";
import kuliahKerjaModel from "../models/kuliah.kerja.model.js";
import mencariKerjaModel from "../models/mencari.kerja.model.js";
import usahaModel from "../models/usaha.model.js";
import UserModels from "../models/user.models.js";

const router = express.Router();

router.get("/grafik-pengguna", async (req, res) => {
  try {
    const counts = [
      { jenis: "Kerja", count: await KerjaModel.countDocuments() },
      { jenis: "Kuliah", count: await KuliahModel.countDocuments() },
      {
        jenis: "Kuliah dan Kerja",
        count: await kuliahKerjaModel.countDocuments(),
      },
      {
        jenis: "Mencari Kerja",
        count: await mencariKerjaModel.countDocuments(),
      },
      {
        jenis: "Usaha",
        count: await usahaModel.countDocuments(),
      },
    ];
    res.json(counts);
  } catch (error) {
    console.error("Error fetching data counts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/grafik-angkatan", async (req, res) => {
  try {
    const angkatanData = await UserModels.aggregate([
      {
        $group: {
          _id: "$angkatan",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(angkatanData);
  } catch (error) {
    console.error("Error fetching angkatan data:", error);
    res.status(501).json({ error: "Internal Server Error" });
  }
});

router.get("/grafik-universitas", async (req, res) => {
  try {
    const universitas = await KuliahModel.aggregate([
      {
        $group: {
          _id: "$nama_universitas",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(universitas);
  } catch (error) {
    console.error("Error fetching angkatan data:", error);
    res.status(503).json({ error: "Internal Server Error" });
  }
});

router.get("/grafik-pekerjaan", async (req, res) => {
  try {
    const kerja = await KerjaModel.aggregate([
      {
        $group: {
          _id: "$nama_perusahaan",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(kerja);
  } catch (error) {
    console.error("Error fetching angkatan data:", error);
    res.status(503).json({ error: "Internal Server Error" });
  }
});

export default router;
