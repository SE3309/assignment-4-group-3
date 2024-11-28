const express = require('express');
const router = express.Router();
const db = require('../db');


// Get all Customers
router.get('/', (req, res) => {
    const query = 'SELECT * FROM Customers';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.post('/api/login', async (req, res) => {
    const { email } = req.body;

    //Validate input
    if (!email) {
        return res.ststaus(400).jaon({ erorr: 'Email and password required' });
    }

    //Search by email
    const user = await Customer.findOne({ email });
    console.log(user);
    if (!user) {
        return res.status(401).json({ error: 'Invalid Email' });
    }


    res.status(200).json({message: 'Login Succesfull' });

});