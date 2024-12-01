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

  const query = `
  SELECT customerID, name, email, isAdmin FROM (
    SELECT NULL AS customerID, name, email, TRUE AS isAdmin FROM Admin WHERE email = ?
    UNION
    SELECT customerID, name, email, FALSE AS isAdmin FROM Customer WHERE email = ?
  ) AS UserCheck LIMIT 1;
`;
  db.query(query, [email, email], (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res.status(500).json({ message: "Internal server error" });
    }

    console.log("Query executed. Results:", results);

    if (results.length > 0) {
      const user = results[0];

      if (!user.isAdmin) {
        res.status(200).json({
          message: "Login successful",
          isAdmin: user.isAdmin,
          user: {
            customerID: user.customerID, // Include customerID for customers
            name: user.name,
            email: user.email,
          },
        });
      } else {
        res.status(200).json({
          message: "Login successful",
          isAdmin: user.isAdmin,
          user: {
            name: user.name,
            email: user.email,
          },
        });
      }
    } else {
      // Email not found
      console.warn("Email not found:", email);
      res.status(404).json({ message: "Email not found" });
    }
  });
});

module.exports = router;
