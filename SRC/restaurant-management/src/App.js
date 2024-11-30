import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Staff from "./pages/Staff";
import Revenue from "./pages/Revenue";
import StaffPerformance from "./pages/StaffPerformance";
import Login from "./pages/Login"; // Import the Login component
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Menu</Link>
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
              <Link to="/login">Login</Link> {/* Add link to the login page */}
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/staff-performance" element={<StaffPerformance />} />
          <Route path="/login" element={<Login />} />{" "}
          {/* Add route for the login page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
