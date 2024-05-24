const express = require("express");
const router = express.Router();

//khai báo routes
router.get("/", (req, res) => {
  res.send("Hello World! chao ban cung voi nodemon");
});

router.get("/abc", (req, res) => {
  res.send("day la trang theo duong dan abc");
});

router.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
