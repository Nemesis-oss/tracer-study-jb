import mongoose from "mongoose";

const kuliahSchema = new mongoose.Schema({
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
    enum: ["Kuliah"],
    required: true,
  },
});

export default mongoose.model("Kuliah", kuliahSchema);
