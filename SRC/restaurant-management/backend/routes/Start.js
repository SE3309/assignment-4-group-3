const express = require('express');
const router = express.Router();
const db = require('../db');

 router.get('/api/start', (req, res) => {
        // Start page content
        const startPageContent = {
            appName: "Restaraunt Management System",
            about: "Welcome Loyal Customers.",
            loginLink: "/api/open/login", 
            //SignupLink: "/api/open/signup"
        };
    
        // Send the start page content as a JSON response
        res.status(200).json(startPageContent);
    });


module.exports = router;
    