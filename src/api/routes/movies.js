import express from "express";
import {
	// countByCity,
	// countByType,
	// getHotel,
	// getHotelRooms,
	// getHotels,
    createMovie,
    deleteMovie,
    updateMovie,
    getMovie,
    getAllMovies,
} from "../controllers/movies.js";

// import Movie from "../models/Movie.js";
import {verifyAdmin, verifyUser} from "../utils/verify.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createMovie);

//UPDATE
router.put("/:id", verifyAdmin, updateMovie);

//DELETE
router.delete("/:id", verifyAdmin, deleteMovie);

//GET
router.get("/find/:id", getMovie);

//GET ALL
router.get("/", getAllMovies);

// // // router.get("/countByCity", countByCity);
// // // router.get("/countByType", countByType);
// // // router.get("/room/:id", getHotelRooms);

export default router;
