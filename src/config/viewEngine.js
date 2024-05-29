const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  //config template engine this two elements
  //console.log("<<CHECK __DIRNAME__=" + __dirname);
  app.set("views", path.join("./src/", "views"));
  app.set("view engine", "ejs");
  app.use(express.static(path.join("./src/", "public"))); // đoạn này khai báo
  //hơi khác so với document là bỏ ' static ' đi & public nghĩa là tên file public đó
};

module.exports = configViewEngine;
