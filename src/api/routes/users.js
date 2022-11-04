import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/users.js";
import { verifyAdmin, verifyUser } from "../utils/verify.js";

const router = express.Router();

// Update user information
router.put("/:id", verifyAdmin, updateUser);

// Delete user information
router.delete("/:id", verifyAdmin, deleteUser);

// Get a user by id
router.get("/:id", verifyUser, getUser);

// Get all user
router.get("/", verifyAdmin, getAllUsers);

export default router;
