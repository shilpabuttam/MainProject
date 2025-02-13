import { Router } from "express";
import {forgotPassword, Login, Logout, validateEmail} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const authRoutes = new Router();

authRoutes.route("/login").post(Login)
authRoutes.route("/validate-email").post(validateEmail)
authRoutes.route("/forgot-password").post(forgotPassword)
authRoutes.route("/logout").post(Logout)

export default authRoutes