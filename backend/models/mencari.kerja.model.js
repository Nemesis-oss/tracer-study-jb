import mongoose from "mongoose";

const mencariKerjaSchema = new mongoose.Schema({
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
  pendidikan_akhir: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  alasan: {
    type: String,
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
    enum: ["Mencari Kerja"],
    required: true,
  },
});

export default mongoose.model("Mencari_Kerja", mencariKerjaSchema);
