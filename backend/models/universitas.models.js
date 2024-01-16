import mongoose from "mongoose";

const NamaUniversitasSchema = new mongoose.Schema({
  nama_universitas: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Nama_Universitas", NamaUniversitasSchema);
