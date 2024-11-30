import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { login } from "../services/loginService";

const Login = ( { setIsLoggedIn } ) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email);
      setMessage(`Welcome, ${response.customer.name}`);
      setIsLoggedIn(true);
      navigate('/menu')
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        console.log(error.response);
        setMessage("Error logging in");
      }
    }
  };
  return (
    <div>
      <h1>Customer Login</h1>
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
