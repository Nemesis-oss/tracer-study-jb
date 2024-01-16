import mongoose from "mongoose";

const kerjaSchema = new mongoose.Schema({
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
  pendidikan_terakhir: {
    type: String,
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
  gambar: {
    type: String,
    required: true,
  },
  urlGambar: {
    type: String,
    required: false,
  },
  jenis: {
    type: String,
    enum: ["Kerja"],
    required: true,
  },
});

export default mongoose.model("Kerja", kerjaSchema);
