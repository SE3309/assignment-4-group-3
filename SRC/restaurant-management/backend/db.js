require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: process.env.DBPASSWORD, // Replace with your MySQL password
  database: "restaurant_schema", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

module.exports = db;