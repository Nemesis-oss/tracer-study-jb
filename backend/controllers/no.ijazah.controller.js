import noIjazahModels from "../models/no.ijazah.models.js";

export const inputNoIjazah = async (req, res) => {
  const { nomor_ijazah } = req.body;

  const noijazahmodels = new noIjazahModels({
    nomor_ijazah: nomor_ijazah,
  });

  const cekIjazah = await noIjazahModels.findOne({
    nomor_ijazah: nomor_ijazah,
  });
  if (cekIjazah) {
    return res.status(404).json({
      messege: "nomor ijazah sudah ada",
    });
  }

  noijazahmodels.save();

  return res.status(201).json({
    messege: "data berhasil ditambahkan",
  });
};
