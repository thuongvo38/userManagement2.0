const express = require("express"); //import express from express
const path = require("path"); // import path from express for app.set("views", path.join(__dirname, "views"));
require("dotenv").config(); // config file .env
console.log(process.env); // remove this after you've confirmed it is working

const app = express(); // tao express application
const port = process.env.PORT || 8080; // init port vs env
const hostname = process.env.HOST_NAME;

//config template engine this two elements
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static files
app.use(express.static(path.join(__dirname, "public"))); // đoạn này khai báo hơi khác so với document là bỏ ' static ' đi & public nghĩa là tên file public đó

//khai báo routes
app.get("/", (req, res) => {
  res.send("Hello World! chao ban cung voi nodemon");
});

app.get("/abc", (req, res) => {
  res.send("day la trang theo duong dan abc");
});

app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
//testing update
//testing push secondtime
