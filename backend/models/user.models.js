import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  tanggal_lahir: {
    type: Date,
    required: true,
  },
  nomor_ijazah: {
    type: String,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  angkatan: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nomor_WA: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordLink: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
  },
});

export default mongoose.model("User", userSchema);
