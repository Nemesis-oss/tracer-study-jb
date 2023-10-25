import express from "express";
import { UserRegister, UserLogin } from "../controllers/user.controller.js";
import {
  runValidation,
  validationDaftar,
  validationLogin,
} from "../validation/user.validation.js";

const router = express();

router.post("/daftar", validationDaftar, runValidation, UserRegister);
router.post("/login", validationLogin, runValidation, UserLogin);

export default router;
