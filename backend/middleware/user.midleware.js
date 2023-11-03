import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();

export default async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      message: "tidak ada token",
    });
  }

  const decode = jsonwebtoken.verify(token, process.env.JWT_SECRET);
  req.id = decode.id;
  next();
};
