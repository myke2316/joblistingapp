import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  protect,
  getProfile,
} from "../controllers/authenticationController.js";
import { checkAuthMiddleware } from "../middleware/checkAuthMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login",checkAuthMiddleware, loginUser);
router.post("/logout", logoutUser);

router.get("/profile", protect, getProfile);

export {router as authenticationRouter}
