const path = require("path");
const configViewEngine = (app) => {
  //config template engine this two elements
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
};

module.exports = configViewEngine;
