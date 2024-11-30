const express = require("express");
const router = express.Router();
const db = require("../db");

// Login route
router.post("/login", (req, res) => {
  const { email } = req.body;

  // Validate email input
  if (!email) {
    console.error("Email is missing in the request body");
    return res.status(400).json({ message: "Email is required" });
  }

  console.log("Received email for login:", email);

  const query = "SELECT * FROM Customer WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res.status(500).json({ message: "Internal server error" });
    }

    console.log("Query executed. Results:", results);

    if (results.length > 0) {
      // Successfully found the email
      console.log("Login successful for email:", email);
      res.status(200).json({
        message: "Login successful",
        customer: results[0],
      });
    } else {
      // Email not found
      console.warn("Email not found:", email);
      res.status(404).json({ message: "Email not found" });
    }
  });
});

module.exports = router;
