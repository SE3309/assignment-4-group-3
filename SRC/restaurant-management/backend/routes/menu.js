const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all menu items
router.get('/', (req, res) => {
    const query = 'SELECT * FROM Menu';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Add a new menu item
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

// Update a menu item
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const query = 'UPDATE Menu SET name = ?, price = ? WHERE menuID = ?';
    db.query(query, [name, price, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        res.json({ message: 'Menu item updated successfully' });
    });
});

// Delete a menu item
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Menu WHERE menuID = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error in DELETE /:id:', err); // Log the error
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        res.json({ message: 'Menu item deleted successfully' });
    });
});

module.exports = router;
