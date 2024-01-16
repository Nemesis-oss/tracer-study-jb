import express from "express";
import { readAllUniv } from "../controllers/univeristas.controller.js";

const router = express();

router.get("/univ", readAllUniv);

export default router;
