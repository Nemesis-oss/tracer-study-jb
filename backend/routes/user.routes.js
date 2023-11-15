import express from "express";
import {
  UserRegister,
  UserLogin,
  forgetPassword,
  resetPassword,
  getUsers,
  // saveUser,
  getSingleUsers,
  updateUser,
  deleteUser,
  changePassword,
} from "../controllers/user.controller.js";
import {
  runValidation,
  validationDaftar,
  validationLogin,
  validationResetPassword,
  validationUpdate,
  validationUserPass,
} from "../validation/user.validation.js";
import midleware from "../middleware/user.midleware.js";

const router = express();

router.post("/daftar", validationDaftar, runValidation, UserRegister);
router.post("/login", validationLogin, runValidation, UserLogin);
router.put("/forgetpassword", forgetPassword);
router.put(
  "/resetpassword",
  validationResetPassword,
  runValidation,
  resetPassword
);

router.patch(
  "/ganti-password",
  midleware,
  validationUserPass,
  runValidation,
  changePassword
);

router.get("/users", getUsers); // memanggil semua data user

router.get("/singleuser", midleware, getSingleUsers); // memanggil 1 data user berdasarkan id

router.patch("/updateuser/", validationUpdate, runValidation, updateUser); //berfungsi untuk mengupdate data user

router.delete("/users/", deleteUser); //berfungsi untuk menghapus data user

export default router;
