const express = require("express"); //import express from express
const path = require("path"); // import path from express for app.set("views", path.join(__dirname, "views"));
require("dotenv").config(); // config file .env
console.log(process.env); // remove this after you've confirmed it is working

const app = express(); // tao express application
const port = process.env.PORT || 8080; // init port vs env
const hostname = process.env.HOST_NAME;
//Connect database
const connection = require("./config/database");
// for simple access data from a form  -- config reg.body

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine this two elements
const configViewEngine = require("./config/viewEngine");
configViewEngine(app);

//config static files

//khai báo routes
const webRoutes = require("./routes/web");
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

// Get the client

// Create the connection to database

//simple query

//testing update
//testing push secondtime
