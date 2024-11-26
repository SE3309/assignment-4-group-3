const express = require('express');
const cors = require('cors');
const app = express();
const reservationRoutes = require('./routes/reservation');
const staffRoutes = require('./routes/staff');

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const menuRoutes = require('./routes/menu');

// Use routes
app.use('/api/menu', menuRoutes); // Pass the router as middleware

app.use('/api/reservation', reservationRoutes);

app.use('/api/staff', staffRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
