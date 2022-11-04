import express from "express";
import { login, register, logout } from "../controllers/auth.js";

const router = express.Router();

// Register new account
router.post("/register", register);

// Login to an account
router.post("/login", login);

// Logout from account
router.post("/logout", logout);

export default router