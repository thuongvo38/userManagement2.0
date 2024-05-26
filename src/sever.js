const express = require("express"); //import express from express
const path = require("path"); // import path from express for app.set("views", path.join(__dirname, "views"));
require("dotenv").config(); // config file .env
console.log(process.env); // remove this after you've confirmed it is working

const app = express(); // tao express application
const port = process.env.PORT || 8080; // init port vs env
const hostname = process.env.HOST_NAME;

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
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  database: "hoidanit",
  password: "123456",
});

//simple query
connection.query("SELECT * FROM Users ", function (err, results, fields) {
  console.log("<< check results: ", results); // results contains rows returned by server
  // console.log(fields); // fields contains extra meta data about results, if available
});

//testing update
//testing push secondtime
