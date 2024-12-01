import React, { useEffect, useState } from "react";
import {
  getReservations,
  addReservation,
  deleteOldReservations,
} from "../services/reservationService";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [formData, setFormData] = useState({
    customerID: "",
    headCount: "",
    date: "",
  });
  const [filterDate, setFilterDate] = useState(""); // State for filtering reservations

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getReservations();
      setReservations(data);
      setFilteredReservations(data); // Initialize filtered reservations
    };
    fetchReservations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReservation = await addReservation(formData);
    setReservations([...reservations, newReservation]);
    setFilteredReservations([...reservations, newReservation]); // Update filtered reservations
    setFormData({ customerID: "", headCount: "", date: "" });
  };

  const handleDeleteOldReservations = async () => {
    try {
      const response = await deleteOldReservations();
      alert(response.message);
      // Re-fetch reservations to update the list
      const updatedReservations = await getReservations();
      setReservations(updatedReservations);
      setFilteredReservations(updatedReservations);
    } catch (error) {
      alert("Error deleting old reservations");
    }
  };

  const handleFilterChange = (e) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);

    if (selectedDate) {
      const filtered = reservations.filter((reservation) => {
        // Convert reservation.date to a YYYY-MM-DD format if it's not already
        const reservationDate = new Date(reservation.date)
          .toISOString()
          .split("T")[0];
        return reservationDate === selectedDate;
      });
      setFilteredReservations(filtered);
    } else {
      // If no date is selected, show all reservations
      setFilteredReservations(reservations);
    }
  };
  return (
    <div>
      <h1>Reservations</h1>
      <button onClick={handleDeleteOldReservations}>
        Delete Old Reservations
      </button>

      {/* Filter by date */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="form-group d-flex align-items-center">
          <label htmlFor="filterDate" className="form-label me-3">
            Filter by Date:
          </label>
          <input
            type="date"
            id="filterDate"
            className="form-control"
            value={filterDate}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="customerID"
          placeholder="Customer ID"
          value={formData.customerID}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="headCount"
          placeholder="Head Count"
          value={formData.headCount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Reservation</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Customer ID</th>
            <th>Head Count</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.map((reservation) => (
            <tr key={reservation.reservationID}>
              <td>{reservation.reservationID}</td>
              <td>{reservation.customerID}</td>
              <td>{reservation.headCount}</td>
              <td>{reservation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
