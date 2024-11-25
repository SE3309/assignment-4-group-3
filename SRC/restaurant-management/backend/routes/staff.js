const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all staff members
router.get('/', (req, res) => {
    const query = 'SELECT * FROM Staff';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Update staff wage
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { wage } = req.body;
    const query = 'UPDATE Staff SET wage = ? WHERE staffID = ?';
    db.query(query, [wage, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Staff member not found' });
        }
        res.json({ message: 'Wage updated successfully' });
    });
});

module.exports = router;
