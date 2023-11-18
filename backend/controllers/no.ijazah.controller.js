import noIjazahModels from "../models/no.ijazah.models.js";

export const inputNoIjazah = async (req, res) => {
  const { nomor_ijazah, nama } = req.body;

  const noijazahmodels = new noIjazahModels({
    nama: nama,
    nomor_ijazah: nomor_ijazah,
  });

  const cekIjazah = await noIjazahModels.findOne({
    nomor_ijazah: nomor_ijazah,
  });

  if (cekIjazah) {
    return res.status(404).json({
      message: "nomor ijazah sudah ada",
    });
  }

  noijazahmodels.save();

  return res.status(201).json({
    message: "data berhasil ditambahkan",
  });
};

export const readAllIjazah = async (req, res) => {
  try {
    const ijazah = await noIjazahModels.find();
    return res.status(201).json({
      status: true,
      data: ijazah,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "terdapat kesalahan pada query",
    });
  }
};

export const readSingleIjazah = async (req, res) => {
  try {
    const id = req.params.id;
    const ijazah = await noIjazahModels.findOne({ _id: id });
    if (!ijazah) {
      return res.status(404).json({
        status: false,
        message: "Ijazah tidak ditemukan",
      });
    }
    return res.status(201).json({
      status: true,
      data: ijazah,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Kesalahan pada query",
      data: error,
    });
  }
};

export const updateIjazah = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama, nomor_ijazah } = req.body;
    const ijazah = await noIjazahModels.findOneAndUpdate(
      { _id: id },
      { nama, nomor_ijazah },
      { new: true }
    );

    return res.status(201).json({
      status: true,
      message: "Data berhasil diupdate",
      data: ijazah,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Kesalahan pada query",
      data: error,
    });
  }
};

export const deleteIjazah = async (req, res) => {
  try {
    const id = req.params.id;
    const ijazah = await noIjazahModels.deleteOne({ _id: id });

    return res.status(201).json({
      status: true,
      message: "Data berhasil di hapus",
      data: ijazah,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "error pada query",
      data: error,
    });
  }
};
