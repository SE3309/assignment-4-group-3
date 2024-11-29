import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../Styles/StartPage.css";
import { GetCustomers, Login } from '../services/loginService';

const StartPage = () => {
  const [email, setEmail] = useState("");
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [Customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {

      // Call the Login function from the loginService module
      const response = await axios.post('http://localhost:4000/api/login', { email });
  
      // If login is successful
      alert(response.message);
      setLoginModalOpen(false);
      navigate("/menu"); // Redirect to the menu page

    } catch (error) {
      console.error("Error logging in:", error);
  
      // Handle specific error scenarios
      if (error.response) {

        // Server responded with an error status
        alert(`Error: ${error.response.data.error || "An error occurred while logging in."}`);

      } else if (error.request) {
        // No response received from server
        alert("No response received from the server. Please try again.");
      } else {
        // Other errors
        alert("An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <div className="start-page">
      <h1>Welcome to Our Restaurant</h1>
      <button onClick={() => setLoginModalOpen(true)} className="login-button">
        Login
      </button>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal-overlay" onClick={() => setLoginModalOpen(false)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
          >
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Login</button>
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartPage;