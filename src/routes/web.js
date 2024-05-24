const express = require("express");
const { getHomepage, getAbc, getHoiDanIT } = require("../controllers/homeController");
const router = express.Router();

// router.METHOD('route',handler)
//khai báo routes
router.get("/", getHomepage);

router.get("/abc", getAbc);

router.get("/hoidanit", getHoiDanIT);

module.exports = router;
