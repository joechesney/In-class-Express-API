
const express = require("express");
require("dotenv").config();
const app = express();
console.log('HELLO from express');
const routes = require("./routes/");

//middleware starts here
app.use("/api/v1/", routes);


// TODO: add error handler


const port = process.env.PORT || 3000;



app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});