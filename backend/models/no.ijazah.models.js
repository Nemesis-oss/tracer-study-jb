import mongoose from "mongoose";

const NoIjazahSchema = new mongoose.Schema({
  nomor_ijazah: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Ijazah", NoIjazahSchema);
