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
      setMessage(`Welcome, ${response.user.name}`);
      setIsLoggedIn(true);
      setIsAdmin(response.isAdmin);

      if (!response.isAdmin) {
        setCustomerID(response.user.customerID);
        navigate("/CustomerReservations"); // Redirect customers to their reservations page
      } else {
        navigate("/menu"); // Redirect admins to the admin menu page
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        console.log(error.response);
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
