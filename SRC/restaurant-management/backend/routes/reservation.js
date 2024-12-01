const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all reservations
router.get("/", (req, res) => {
  const query = "SELECT * FROM Reservation";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Add a new reservation
router.post("/", (req, res) => {
  const { customerID, headCount, date } = req.body;
  const query =
    "INSERT INTO Reservation (customerID, headCount, date) VALUES (?, ?, ?)";
  db.query(query, [customerID, headCount, date], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, customerID, headCount, date });
  });
});

router.delete("/old", (req, res) => {
  const query = `
        DELETE FROM Reservation
        WHERE date < CURDATE()
          AND customerID NOT IN (
              SELECT DISTINCT customerID FROM CustomerOrder
          )
    `;
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: `${results.affectedRows} reservations deleted` });
  });
});

router.get("/customer/:customerID", async (req, res) => {
  const { customerID } = req.params;
  try {
    const [results] = await db
      .promise()
      .query(
        "SELECT * FROM Reservation WHERE customerID = ? AND date >= CURDATE()",
        [customerID]
      );
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reservations" });
  }
});

module.exports = router;
