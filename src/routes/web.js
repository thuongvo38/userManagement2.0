const express = require("express");
const { getHomepage, getAbc, getHoiDanIT, postCreateUser, getCreatePage } = require("../controllers/homeController");
const router = express.Router();

// router.METHOD('route',handler)
//khai báo routes
router.get("/", getHomepage);

router.get("/abc", getAbc);

router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
