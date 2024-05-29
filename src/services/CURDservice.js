const connection = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connection.query(`SELECT * FROM Users `);
  return results;
};

const getUserById = async (userId) => {
  const [results, fields] = await connection.query(` SELECT * FROM Users  WHERE id= ? `, [userId]);
  // console.log("<<check results: ", results);
  let user = results && results.length ? results[0] : {};
  return user;
};
module.exports = {
  getAllUsers,
  getUserById,
};
