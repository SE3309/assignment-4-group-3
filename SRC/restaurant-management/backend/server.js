const express = require("express");
const cors = require("cors");
const app = express();
const reservationRoutes = require("./routes/reservation");
const staffRoutes = require("./routes/staff");
const customerRoutes = require("./routes/Customer");
const menuRoutes = require("./routes/menu");
const expenseRoutes = require("./routes/Expenses"); // Import the expenses route

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
app.use("/api/customer", customerRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/expenses", expenseRoutes); // Mount the expenses route

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
