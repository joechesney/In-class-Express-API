const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");



module.exports.getAll = () =>{
  return new Promise((resolve, reject)=>{
    db.all(`SELECT * FROM directors`, (error, direx)=>{
      if(error) reject(error);
      resolve(direx);
    });
  });
};

module.exports.getOne = (id) =>{
  return new Promise((resolve, reject)=>{
    db.all(`SELECT * 
    FROM directors
    WHERE dir_id = ${id}`, (error, direx)=>{
      if(error) reject(error);
      resolve(direx);
    });
  });
};