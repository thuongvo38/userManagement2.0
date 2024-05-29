const express = require("express");
const {
  getHomepage,
  getAbc,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

// router.METHOD('route',handler)
//khai báo routes
router.get("/", getHomepage);

router.get("/abc", getAbc);

router.get("/hoidanit", getHoiDanIT);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/update-user", postUpdateUser);
router.post("/create-user", postCreateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user/", postHandleRemoveUser);

module.exports = router;
