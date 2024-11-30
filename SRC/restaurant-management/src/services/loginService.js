import axios from "axios";

const API_URL = "http://localhost:4000/api/customer";

// Login function
export const login = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

  try {
    const response = await axios.post(`${API_URL}/login`, { email });
    return response.data;
  } catch (error) {
    console.error("Login service error:", error.response || error.message);
    throw error.response?.data?.message || "An error occurred during login";
  }
};
