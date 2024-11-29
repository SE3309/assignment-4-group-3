const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all Customers
router.get('/', (req, res) => {
    const query = 'SELECT * FROM Customer';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

router.post('/', (req, res) => {

    console.log("1");
    
    const { email } = req.body;

    console.log('Login request body:', req.body);

    //Validate input
    if (!email) {
        return res.status(400).json({ error: 'Email required' });
    }

    //Search by email
    const user =  Customer.findOne({email});
    console.log(user);
    if (!user) {
        return res.status(401).json({ error: 'Invalid Email' });
    }

    return res.status(200).json({message: 'Login succesful' } );

});

module.exports = router;