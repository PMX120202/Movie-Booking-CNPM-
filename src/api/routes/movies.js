const express = require("express");
const {
	createMovie,
	deleteMovie,
	updateMovie,
	getMovie,
	getAllMovies,
} = require("../controllers/movies.js");

const { verifyAdmin } = require("../utils/verify.js");

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

module.exports = router;