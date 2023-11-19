import express from "express";
import {
  deleteIjazah,
  inputNoIjazah,
  readAllIjazah,
  readSingleIjazah,
  updateIjazah,
} from "../controllers/no.ijazah.controller.js";
// import midleware from "../middleware/user.midleware.js"
import {
  validationIjazah,
  runValidation,
} from "../validation/user.validation.js";
const router = express();

router.post("/ijazah", validationIjazah, runValidation, inputNoIjazah);
router.get("/ijazah/all", readAllIjazah);
router.get("/ijazah/:id", readSingleIjazah);
router.put("/ijazah/:id", validationIjazah, runValidation, updateIjazah);
router.delete("/ijazah/:id", deleteIjazah);

export default router;
