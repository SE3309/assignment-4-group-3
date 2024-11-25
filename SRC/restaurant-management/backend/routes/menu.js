const express = require('express');
const router = express.Router();
const db = require('../db');

// Define routes for menu
router.get('/', (req, res) => {
    const query = 'SELECT * FROM Menu';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { name, price } = req.body;
    const query = 'INSERT INTO Menu (name, price) VALUES (?, ?)';
    db.query(query, [name, price], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, price });
    });
});

// Get revenue for each menu item
router.get('/revenue', (req, res) => {
    const query = `
        SELECT 
            Menu.name AS MenuItem,
            SUM(OrderDetail.quantity * Menu.price) AS TotalRevenue
        FROM OrderDetail
        JOIN Menu ON OrderDetail.menuID = Menu.menuID
        GROUP BY Menu.name
        ORDER BY TotalRevenue DESC
    `;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router; // Ensure you are exporting only the router
