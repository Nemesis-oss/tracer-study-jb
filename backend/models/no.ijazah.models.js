import mongoose from "mongoose";

const NoIjazahSchema = new mongoose.Schema({
  nama: {
    type: String,
    required:true,
  },
  nomor_ijazah: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Ijazah", NoIjazahSchema);
