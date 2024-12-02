import axios from 'axios';

const API_URL = 'http://localhost:4000/api/expenses';

export const getExpenses = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addExpense = async (expense) => {
    console.log("Expense Data Sent to Backend:", expense); // Debugging
    const response = await axios.post(API_URL, expense);
    return response.data;
};


export const getMonthlyExpenses = async () => {
    const response = await axios.get(`${API_URL}/monthly`);
    return response.data;
};
