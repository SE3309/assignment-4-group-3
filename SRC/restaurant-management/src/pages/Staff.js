import React, { useEffect, useState } from 'react';
import { getStaff, updateStaffWage } from '../services/staffService';

const Staff = () => {
    const [staff, setStaff] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        wage: '',
    });

    useEffect(() => {
        const fetchStaff = async () => {
            const data = await getStaff();
            setStaff(data);
        };
        fetchStaff();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, wage } = formData;
        try {
            const response = await updateStaffWage(id, wage);
            alert(response.message);
            const updatedStaff = staff.map((member) =>
                member.staffID === parseInt(id) ? { ...member, wage: parseFloat(wage) } : member
            );
            setStaff(updatedStaff);
            setFormData({ id: '', wage: '' });
        } catch (error) {
            alert(error.response.data.message || 'Error updating wage');
        }
    };

    return (
        <div>
            <h1>Staff</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id"
                    placeholder="Staff ID"
                    value={formData.id}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    step="0.01"
                    name="wage"
                    placeholder="New Wage"
                    value={formData.wage}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Update Wage</button>
            </form>

            <ul>
                {staff.map((member) => (
                    <li key={member.staffID}>
                        {`${member.name} (${member.jobTitle}) - $${member.wage}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Staff;
