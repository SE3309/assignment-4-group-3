import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/loginService";

const Login = ({ setIsLoggedIn, setIsAdmin, setCustomerID }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email);

      if (!response || !response.user || typeof response.isAdmin === "undefined") {
        throw new Error("Invalid response from server");
      }

      setMessage(`Welcome, ${response.user.name}`);
      setIsLoggedIn(true);
      setIsAdmin(response.isAdmin);

      if (!response.isAdmin) {
        setCustomerID(response.user.customerID);
        sessionStorage.setItem("customerID", response.user.customerID); // Persist customerID
        navigate("/CustomerReservations");
      } else {
        sessionStorage.setItem("adminID", response.user.adminID); // Persist adminID
        navigate("/menu");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Login failed");
      } else {
        console.error("Login error:", error);
        setMessage("Error logging in");
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
