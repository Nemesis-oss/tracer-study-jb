import express from "express";
import { UserRegister, UserLogin } from "../controllers/user.controller.js";

const router = express();

router.post("/daftar", UserRegister);
router.post("/login", UserLogin);

export default router;
