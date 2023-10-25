import express from "express";
import {
  UserRegister,
  UserLogin,
  getSingleUser,
} from "../controllers/user.controller.js";
import {
  runValidation,
  validationDaftar,
  validationLogin,
} from "../validation/user.validation.js";
import midleware from "../middleware/user.midleware.js";

const router = express();

router.post("/daftar", validationDaftar, runValidation, UserRegister);
router.post("/login", validationLogin, runValidation, UserLogin);
router.get("/user", midleware, getSingleUser);

export default router;
