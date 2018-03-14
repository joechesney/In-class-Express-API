const { Router } = require("express");
const dirRouter = Router();
const { getAllDirectors, getDirector } = require("../controllers/directorCtrl");

dirRouter.get("/directors", getAllDirectors);
dirRouter.get("/directors/:dir_id", getDirector);


module.exports = dirRouter;