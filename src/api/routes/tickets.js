import express from "express";
import {
	createTicket,
	updateTicket,
	deleteTicket,
	getTicket,
	getAllTicketsOfAnUser,
	getAllTicketsOfAMovie
} from "../controllers/tickets.js";
import { verifyAdmin, verifyUser } from "../utils/verify.js";

const router = express.Router();

//CREATE
router.post("/:movie_id", verifyAdmin, createTicket);

//UPDATE
router.put("/:id", verifyAdmin, updateTicket);

//DELETE
router.delete("/:id/:movie_id", verifyAdmin, deleteTicket);

// GET A TICKET
router.get("/:id", verifyAdmin, getTicket);

// GET TICKETS OF USER
router.get("/user/:user_id", verifyUser, getAllTicketsOfAnUser);

// GET TICKETS OF MOVIE
router.get("/movie/:movie_id", verifyAdmin, getAllTicketsOfAMovie);

export default router;
