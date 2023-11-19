import mongoose from "mongoose";

const usahaSchema = new mongoose.Schema({
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
  jenis_usaha: {
    type: String,
    required: true,
  },
  alamat_usaha: {
    type: String,
    required: true,
  },
  tahun_usaha: {
    type: Number,
    required: true,
  },
  jenis: {
    type: String,
    enum: ["Usaha"],
    required: true,
  },
});

export default mongoose.model("Usaha", usahaSchema);
