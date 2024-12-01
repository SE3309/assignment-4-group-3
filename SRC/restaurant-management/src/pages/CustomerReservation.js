import React, { useEffect, useState } from "react";
import {
  addReservation,
  getCustomerReservations, // New API function for customer reservations
} from "../services/reservationService";

const CustomerReservations = ({ customerID }) => {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    headCount: "",
    date: "",
  });

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getCustomerReservations(customerID); // Fetch reservations for this customer
      setReservations(data);
    };
    fetchReservations();
  }, [customerID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReservation = await addReservation({ ...formData, customerID });
    setReservations([...reservations, newReservation]);
    setFormData({ headCount: "", date: "" });
  };

  return (
    <div className="centerText">
      <h1>My Reservations</h1>
      <form onSubmit={handleSubmit} className="bg-light p-3 rounded mb-4">
        <h4 className="mb-3">Make a Reservation</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="number"
              name="headCount"
              placeholder="Head Count"
              value={formData.headCount}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Reserve
        </button>
      </form>

      <p className="centerText">Upcoming Reservations</p>
      <table className="table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Head Count</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.reservationID}>
              <td>{reservation.reservationID}</td>
              <td>{reservation.headCount}</td>
              <td>{reservation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerReservations;
