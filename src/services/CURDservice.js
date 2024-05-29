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
const updateUserById = async (email, name, city, userId) => {
  const [results, fields] = await connection.query(
    `UPDATE Users 
  SET email= ?,name = ?, city= ?
  WHERE id = ?`,
    [email, name, city, userId]
  );
};
const deleteUserById = async (id) => {
  const [results, fields] = await connection.query(` DELETE FROM Users WHERE id = ?`, [id]);
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
