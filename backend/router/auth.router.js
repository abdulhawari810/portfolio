import express from "express";
import {
  Login,
  Register,
  Me,
  verifyEmail,
  resendEmail,
  deleteUsers,
  updateUsers,
} from "../controllers/auth.controllers.js";
import { verifyToken } from "../middleware/token.js";

const AuthRouter = express.Router();

AuthRouter.post("/login", Login);
AuthRouter.post("/register", Register);
AuthRouter.post("/verify/email", verifyEmail);
AuthRouter.post("/resend", resendEmail);
AuthRouter.get("/me", verifyToken, Me);
AuthRouter.delete("/delete", verifyToken, deleteUsers);
AuthRouter.patch("/update", verifyToken, updateUsers);

export default AuthRouter;
