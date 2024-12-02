const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all expenses
router.get('/', (req, res) => {
    const query = `
        SELECT Expense.*, Admin.name AS adminName
        FROM Expense
        JOIN Admin ON Expense.adminID = Admin.adminID
        ORDER BY date DESC
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching expenses:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results.map(expense => ({
            ...expense,
            expenseAmount: parseFloat(expense.expenseAmount), // Ensure numeric type
        })));
    });
});

// Add a new expense
router.post('/', (req, res) => {
    const { adminID, expenseAmount, date, type, description } = req.body;

    // Debugging: Log the received payload
    console.log("Received payload:", req.body);

    // Validate incoming data
    if (!adminID) {
        return res.status(400).json({ error: "Missing adminID" });
    }
    if (!expenseAmount) {
        return res.status(400).json({ error: "Missing expenseAmount" });
    }
    if (!date) {
        return res.status(400).json({ error: "Missing date" });
    }
    if (!type) {
        return res.status(400).json({ error: "Missing type" });
    }
    if (!description) {
        return res.status(400).json({ error: "Missing description" });
    }

    const query = `
        INSERT INTO Expense (adminID, expenseAmount, date, type, description) 
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [adminID, parseFloat(expenseAmount), date, type, description], (err, results) => {
        if (err) {
            console.error("Error adding expense:", err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            id: results.insertId,
            adminID,
            expenseAmount: parseFloat(expenseAmount),
            date,
            type,
            description,
        });
    });
});


// Get monthly expenses
router.get('/monthly', (req, res) => {
    const query = `
        SELECT 
            DATE_FORMAT(date, '%Y-%m') AS month,
            COALESCE(SUM(expenseAmount), 0) AS totalAmount
        FROM Expense
        GROUP BY month
        ORDER BY month DESC
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching monthly expenses:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results.map(item => ({
            month: item.month,
            totalAmount: parseFloat(item.totalAmount), // Ensure it's a number
        })));
    });
});


module.exports = router;
