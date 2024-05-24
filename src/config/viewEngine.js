const path = require("path");
const express = require("express");
const app = express();

const viewEngine = (app) => {
  //config template engine this two elements
  console.log(__dirname);
  app.set("views", path.join("./src", "views")); // views first la name, views sau la value -> noi dan link
  app.set("view engine", "ejs");
  app.use(express.static(path.join("./src", "public"))); // đoạn này khai báo hơi khác so với document là bỏ ' static ' đi & public nghĩa là tên file public đó
};

module.exports = viewEngine;
