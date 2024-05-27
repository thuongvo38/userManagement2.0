// require("dotenv").config(); // config file .env
// // Get the client
// const mysql = require("mysql2");

// // Create the connection to database
// // const connection = mysql.createConnection({
// //   host: process.env.DB_HOST,
// //   port: process.env.DB_PORT,
// //   user: process.env.DB_USER,
// //   database: process.env.DB_NAME,
// //   password: process.env.DB_PASSWORD,
// // });

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   waitForConnections: true,
//   connectionLimit: 10,
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
// });

// module.exports = connection;
