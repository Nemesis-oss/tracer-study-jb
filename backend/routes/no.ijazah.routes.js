import express from "express";
import { inputNoIjazah } from "../controllers/no.ijazah.controller.js";

const router = express();

router.post("/ijazah", inputNoIjazah);

export default router