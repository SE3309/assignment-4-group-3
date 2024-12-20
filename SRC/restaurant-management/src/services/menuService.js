import axios from 'axios';

const API_URL = 'http://localhost:4000/api/menu';

export const getMenuItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addMenuItem = async (menuItem) => {
    const response = await axios.post(API_URL, menuItem);
    return response.data;
};

export const getMenuRevenue = async () => {
    const response = await axios.get(`${API_URL}/revenue`);
    return response.data;
};

export const updateMenuItem = async (id, menuItem) => {
    const response = await axios.put(`${API_URL}/${id}`, menuItem);
    return response.data;
};

export const deleteMenuItem = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};