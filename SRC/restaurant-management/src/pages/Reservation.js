import React, { useEffect, useState } from 'react';
import { getReservations, addReservation, deleteOldReservations} from '../services/reservationService';

const Reservation = () => {
    const [reservations, setReservations] = useState([]);
    const [formData, setFormData] = useState({
        customerID: '',
        headCount: '',
        date: '',
    });

    useEffect(() => {
        const fetchReservations = async () => {
            const data = await getReservations();
            setReservations(data);
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
        setFormData({ customerID: '', headCount: '', date: '' });
    };

    const handleDeleteOldReservations = async () => {
        try {
            const response = await deleteOldReservations();
            alert(response.message);
            // Re-fetch reservations to update the list
            const updatedReservations = await getReservations();
            setReservations(updatedReservations);
        } catch (error) {
            alert('Error deleting old reservations');
        }
    };

    return (
        <div>
            <h1>Reservations</h1>
            <button onClick={handleDeleteOldReservations}>Delete Old Reservations</button>
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

            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.reservationID}>
                        {`Customer ${reservation.customerID} - Headcount: ${reservation.headCount} on ${reservation.date}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default Reservation;
