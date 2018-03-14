
const { getAll, getOne } = require("../models/MovieModel");

module.exports.getAllMovies = (req, res, next) =>{
  getAll()
  .then((movies)=>{
    
    res.status(200).json(movies);
  })
  .catch(error=>{
    next(error);
  });
};

module.exports.getMovie = (req, res, next) =>{
  console.log('req:',req.params.movieid);
  getOne(req.params.movieid)
  .then((movie)=>{
    res.status(200).json(movie);
  })
  .catch(error=>{
    next(error);
  });
};