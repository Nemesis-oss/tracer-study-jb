import mongoose from "mongoose";

const kuliahKerjaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  nama: {
    type: String,
    required: true,
  },
  angkatan: {
    type: Number,
    required: true,
  },
  nama_perusahaan: {
    type: String,
    required: true,
  },
  jabatan: {
    type: String,
    default: "-",
    required: false,
  },
  tahun_kerja: {
    type: Number,
    required: true,
  },
  nama_universitas: {
    type: String,
    required: true,
  },
  prodi: {
    type: String,
    required: true,
  },
  jenjang: {
    type: String,
    required: true,
  },
  jenis: {
    type: String,
    enum: ["Kuliah & Kerja"],
    required: true,
  },
});

export default mongoose.model("KuliahKerja", kuliahKerjaSchema);
