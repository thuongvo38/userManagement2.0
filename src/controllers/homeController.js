const connection = require("../config/database");
const getHomepage = (reg, res) => {
  // xuat thong tin user
  let user = [];
  //simple query
  connection.query("SELECT * FROM Users ", function (err, results, fields) {
    user = results;
    res.send(JSON.stringify(user));
    console.log("<< check results: ", results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  });
};

const getAbc = (req, res) => {
  res.send("day la trang theo duong dan abc");
};
const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getAbc,
  getHoiDanIT,
};
