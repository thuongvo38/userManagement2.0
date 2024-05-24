const getHomepage = (reg, res) => {
  res.send("Hello World! chao ban cung voi nodemon");
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
