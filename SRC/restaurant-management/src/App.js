import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Staff from "./pages/Staff";
import Revenue from "./pages/Revenue";
import StaffPerformance from "./pages/StaffPerformance";
import Expenses from "./pages/Expenses"; // Import the Expenses page
import Login from "./pages/Login";
import "./styles.css";
import CustomerMenu from "./pages/CustomerMenu";
import PlaceOrder from "./pages/PlaceOrder";
import CustomerReservations from "./pages/CustomerReservation";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [isAdmin, setIsAdmin] = useState(null); // Boolean: true for admin, false for customer
  const [customerID, setCustomerID] = useState(null); // Store logged-in customer ID

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(null);
    setCustomerID(null);
  };

  return (
    <Router>
      <div>
        {/* Admin Navigation */}
        {isLoggedIn && isAdmin && (
          <header>
            <nav style={{ backgroundColor: "#333", padding: "10px" }}>
              <ul style={{ display: "flex", listStyle: "none", gap: "15px", color: "white" }}>
                <li>
                  <Link to="/menu" style={{ color: "white", textDecoration: "none" }}>Menu</Link>
                </li>
                <li>
                  <Link to="/reservations" style={{ color: "white", textDecoration: "none" }}>Reservations</Link>
                </li>
                <li>
                  <Link to="/staff" style={{ color: "white", textDecoration: "none" }}>Staff</Link>
                </li>
                <li>
                  <Link to="/revenue" style={{ color: "white", textDecoration: "none" }}>Revenue</Link>
                </li>
                <li>
                  <Link to="/staff-performance" style={{ color: "white", textDecoration: "none" }}>Staff Performance</Link>
                </li>
                <li>
                  <Link to="/expenses" style={{ color: "white", textDecoration: "none" }}>Expenses</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout} style={{ color: "white", textDecoration: "none" }}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        )}

        {/* Customer Navigation */}
        {isLoggedIn && !isAdmin && (
          <header>
            <nav style={{ backgroundColor: "#333", padding: "10px" }}>
              <ul style={{ display: "flex", listStyle: "none", gap: "15px", color: "white" }}>
                <li>
                  <Link to="/CustomerMenu" style={{ color: "white", textDecoration: "none" }}>Menu</Link>
                </li>
                <li>
                  <Link to="/CustomerReservations" style={{ color: "white", textDecoration: "none" }}>My Reservations</Link>
                </li>
                <li>
                  <Link to="/PlaceOrder" style={{ color: "white", textDecoration: "none" }}>Place Order</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout} style={{ color: "white", textDecoration: "none" }}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        )}

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setIsAdmin={setIsAdmin}
                setCustomerID={setCustomerID}
              />
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/staff-performance" element={<StaffPerformance />} />
          <Route path="/expenses" element={<Expenses loggedInAdminID={isAdmin} />} />
          <Route path="/CustomerMenu" element={<CustomerMenu />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route
            path="/CustomerReservations"
            element={<CustomerReservations customerID={customerID} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
