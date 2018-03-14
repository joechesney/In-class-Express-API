
const { getAll, getOne } = require("../models/DirectorModel");

module.exports.getAllDirectors = (req, res, next) =>{
  getAll()
  .then((direx)=>{
    res.status(200).json(direx);
  })
  .catch((error)=>next(error));
};

module.exports.getDirector = (req, res, next) =>{
  console.log('req:',req.params.movieid);
  getOne(req.params.dir_id)
  .then((movie)=>{
    res.status(200).json(movie);
  })
  .catch(error=>{
    next(error);
  });
};