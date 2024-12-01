import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Staff from "./pages/Staff";
import Revenue from "./pages/Revenue";
import StaffPerformance from "./pages/StaffPerformance";
import Login from "./pages/Login"; // Import the Login component
import "./styles.css";
import CustomerMenu from "./pages/CustomerMenu";
import CustomerReservations from "./pages/CustomerReservation"; // New customer reservations page

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [isAdmin, setIsAdmin] = useState(null); // Admin state
  const [customerID, setCustomerID] = useState(null); // Store customer ID after login

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setIsAdmin(null); // Reset admin state
    setCustomerID(null); // Clear customer ID
  };

  return (
    <Router>
      <div>
        {isLoggedIn && isAdmin && (
          <header>
            {/* Navigation */}
            <nav>
              <ul>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                  <Link to="/staff">Staff</Link>
                </li>
                <li>
                  <Link to="/revenue">Revenue</Link>
                </li>
                <li>
                  <Link to="/staff-performance">Staff Performance</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        )}

        {isLoggedIn && !isAdmin && (
          <header>
            {/* Navigation */}
            <nav>
              <ul>
                <li>
                  <Link to="/CustomerMenu">Menu</Link>
                </li>
                <li>
                  <Link to="/CustomerReservations">My Reservations</Link>
                </li>
                <li>
                  <Link to="/">Order</Link>
                </li>

                <li>
                  <Link to="/" onClick={handleLogout}>
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
                setCustomerID={setCustomerID} // Pass the setter for customer ID
              />
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/staff-performance" element={<StaffPerformance />} />
          <Route path="/CustomerMenu" element={<CustomerMenu />} />
          <Route
            path="/CustomerReservations"
            element={<CustomerReservations customerID={customerID} />} // Pass customer ID
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
