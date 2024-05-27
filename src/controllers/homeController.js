const connection = require("../config/database");
const getHomepage = (reg, res) => {
  // // xuat thong tin user
  // let user = [];
  // //simple query
  // connection.query("SELECT * FROM Users ", function (err, results, fields) {
  //   user = results;
  //   res.send(JSON.stringify(user));
  //   console.log("<< check results: ", results); // results contains rows returned by server
  //   // console.log(fields); // fields contains extra meta data about results, if available
  // });

  return res.render("home");
};

const getAbc = (req, res) => {
  res.send("day la trang theo duong dan abc");
};
const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let name = req.body.myname;
  let email = req.body.email;
  let city = req.body.city;
  // let {email, name, city} = req.body; // second way to create
  // Using placeholders
  console.log("<<<check results", name, email, city);
  //console.log("<<<check results", results);

  // cach lam viet bang ham call back
  // connection.query(
  //   `INSERT INTO Users (name,email,city)
  //   VALUES ( ?, ?, ?)`,
  //   [name, email, city],
  //   function (err, results) {
  //     res.send("created successfully !");
  //   }
  // );

  // cach viet bang promise
  const [results, fields] = await connection.query(`INSERT INTO Users (name,email,city)  VALUES ( ?, ?, ?)`, [
    name,
    email,
    city,
  ]);
  res.send("created successfully !");
};
module.exports = {
  getHomepage,
  getAbc,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
};
