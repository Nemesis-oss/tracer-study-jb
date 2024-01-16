import Universitas from "../models/universitas.models.js";

export const readAllUniv = async (req, res) => {
  try {
    const univ = await Universitas.find();

    return res.status(201).json({
      status: true,
      data: univ,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: error,
    });
  }
};
