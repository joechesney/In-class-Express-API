const { Router } = require("express");
const movieRouter = Router();
const { getAllMovies, getMovie } = require("../controllers/movieCtrl");

movieRouter.get("/movies", getAllMovies);
movieRouter.get("/movies/:movieid", getMovie);

module.exports = movieRouter;