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
  try {
    const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.id = decodedToken.id;
    next();
  } catch (error) {
    console.error("Error verifying JWT token:", error.message);
    return res.status(401).json({
      message: "Token tidak valid",
    });
  }
};
