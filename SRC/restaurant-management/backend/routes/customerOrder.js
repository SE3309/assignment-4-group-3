const express = require("express");
const router = express.Router();
const db = require("../db"); // Import your database connection pool

// Create a new customer order
router.post("/", (req, res) => {
  const { customerID, staffID, date, orderDetails } = req.body;

  // Validate input
  if (!customerID || !staffID || !date || !orderDetails || orderDetails.length === 0) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  // Insert the customer order into the database
  const orderQuery = `
    INSERT INTO CustomerOrder (customerID, staffID, date) VALUES (?, ?, ?)
  `;
  db.query(orderQuery, [customerID, staffID, date], (err, orderResult) => {
    if (err) {
      console.error("Error inserting order:", err.message, err.stack);
      return res.status(500).json({ message: "Failed to place order" });
    }

    const customerOrderID = orderResult.insertId; // Retrieve the new order's ID

    // Prepare and execute the order detail inserts
    const orderDetailQueries = orderDetails.map(({ menuID, quantity }) => {
      return new Promise((resolve, reject) => {
        const detailQuery = `
          INSERT INTO OrderDetail (customerOrderID, menuID, quantity) VALUES (?, ?, ?)
        `;
        db.query(detailQuery, [customerOrderID, menuID, quantity], (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    });

    // Execute all detail queries
    Promise.all(orderDetailQueries)
      .then(() => {
        res.status(201).json({ message: "Order placed successfully", customerOrderID });
      })
      .catch((detailError) => {
        console.error("Error inserting order details:", detailError.message, detailError.stack);
        res.status(500).json({ message: "Failed to place order details" });
      });
  });
});


// Get all orders
router.get("/", (req, res) => {
    const ordersQuery = `
      SELECT co.customerOrderID, co.customerID, co.staffID, co.date, 
             od.menuID, od.quantity, m.name AS menuItemName
      FROM CustomerOrder co
      JOIN OrderDetail od ON co.customerOrderID = od.customerOrderID
      JOIN Menu m ON od.menuID = m.menuID
    `;
  
    db.query(ordersQuery, (error, results) => {
      if (error) {
        console.error("Error fetching orders:", error.message, error.stack);
        return res.status(500).json({ message: "Failed to fetch orders" });
      }
  
      res.json(results);
    });
  });
  
  

module.exports = router;
