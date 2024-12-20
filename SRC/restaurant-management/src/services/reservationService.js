import axios from "axios";

const API_URL = "http://localhost:4000/api/reservation";

export const getReservations = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addReservation = async (reservation) => {
  const response = await axios.post(API_URL, reservation);
  return response.data;
};

export const deleteOldReservations = async () => {
  const response = await axios.delete(`${API_URL}/old`);
  return response.data;
};

// Fetch reservations for a specific customer
export const getCustomerReservations = async (customerID) => {
  const response = await axios.get(`${API_URL}/customer/${customerID}`);
  return response.data;
};
