const connection = require("../config/database");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../services/CURDservice");
const getHomepage = async (req, res) => {
  // // xuat thong tin user
  // let user = [];
  // //simple query
  // connection.query("SELECT * FROM Users ", function (err, results, fields) {
  //   user = results;
  //   res.send(JSON.stringify(user));
  //   console.log("<< check results: ", results); // results contains rows returned by server
  //   // console.log(fields); // fields contains extra meta data about results, if available
  // });

  let results = await getAllUsers();
  //console.log("<< check results: ", results); // results contains rows returned by server
  return res.render("home.ejs", { listUsers: results }); // res.render(EJS PAGE, {params: Object}); How to pass data from express to ejs
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
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  // console.log(userId);
  let user = await getUserById(userId);

  res.render("edit.ejs", { userEdit: user }); // x <---y :ten bien muon Gan : value
};

const postCreateUser = async (req, res) => {
  let name = req.body.myname;
  let email = req.body.email;
  let city = req.body.city;
  // let {email, name, city} = req.body; // second way to create
  // Using placeholders
  //check ket qua truoc khi render
  //console.log("<<<check results", name, email, city);
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
const postUpdateUser = async (req, res) => {
  let name = req.body.myname;
  let email = req.body.email;
  let city = req.body.city;
  console.log("<<check show right here");

  // update by get data userId by tag name & method req.body in .ejs
  let userId = req.body.userId;
  await updateUserById(name, email, city, userId);
  // METHOD moi de redirect to home page
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  // console.log(userId);
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });

  // const userId = req.params.id;
  // console.log(userId);
  // const [results, fields] = await connection.query(` DELETE FROM Users WHERE id = ?`, [userId]);
  // res.redirect("/");
};
const postHandleRemoveUser = async (req, res) => {
  let id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getAbc,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
