import axios from 'axios';

const API_URL = 'http://localhost:4000/api/staff';

export const getStaff = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateStaffWage = async (id, wage) => {
    const response = await axios.put(`${API_URL}/${id}`, { wage });
    return response.data;
};
