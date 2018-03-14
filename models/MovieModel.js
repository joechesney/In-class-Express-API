const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");

module.exports.getAll = () =>{
  return new Promise ((resolve, reject)=>{
    db.all(`SELECT movies.*, directors.name AS director 
    FROM movies
    JOIN directors ON director_id = directors.dir_id`, 
    (error, movies)=>{
      if(error) reject(error);
      resolve(movies);
    });
  });
};

module.exports.getOne = (id) =>{
  return new Promise ((resolve, reject)=>{
    db.all(`SELECT movies.*, directors.name AS director
    FROM movies
    JOIN directors ON director_id = directors.dir_id
    WHERE movie_id = ${id}`, 
    (error, movies)=>{
      if(error) reject(error);
      resolve(movies);
    });
  });
};

// SELECT movies.*, directors.name AS director 
//     FROM movies
//     JOIN directors ON director_id = directors.dir_id
//     WHERE name = ${name}