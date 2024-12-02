import React, { useEffect, useState } from "react";
import { getExpenses, getMonthlyExpenses, addExpense } from "../services/expenseService";

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [monthlyExpenses, setMonthlyExpenses] = useState([]);
    const [formData, setFormData] = useState({
        adminID: "",
        expenseAmount: "",
        date: "",
        type: "",
        description: "",
    });

    // Fetch all expenses
    const fetchExpenses = async () => {
        try {
            const data = await getExpenses();
            setExpenses(data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    // Fetch monthly expenses
    const fetchMonthlyExpenses = async () => {
        try {
            const data = await getMonthlyExpenses();
            setMonthlyExpenses(data);
        } catch (error) {
            console.error("Error fetching monthly expenses:", error);
        }
    };

    useEffect(() => {
        fetchExpenses();
        fetchMonthlyExpenses();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission to add a new expense
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addExpense(formData);
            setFormData({
                adminID: "",
                expenseAmount: "",
                date: "",
                type: "",
                description: "",
            });

            // Dynamically update monthly expenses and all expenses without refreshing
            fetchMonthlyExpenses();
            fetchExpenses();
        } catch (error) {
            console.error("Error adding expense:", error);
            alert(error.response?.data?.error || "Failed to add expense");
        }
    };

    return (
        <div>
            <h1>Expense Management</h1>

            {/* Monthly Expenses Dashboard */}
            <h2>Monthly Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Total Expenses ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {monthlyExpenses.map((item) => (
                        <tr key={item.month}>
                            <td>{item.month}</td>
                            <td>{item.totalAmount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add Expense Form */}
            <h2>Add New Expense</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="adminID"
                    placeholder="Admin ID"
                    value={formData.adminID}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="expenseAmount"
                    placeholder="Expense Amount"
                    value={formData.expenseAmount}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Expense Type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Expense</button>
            </form>

            {/* Expense List */}
            <h2>All Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Admin</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount ($)</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.expenseID}>
                            <td>{expense.adminName}</td>
                            <td>{expense.type}</td>
                            <td>{expense.description}</td>
                            <td>{Number(expense.expenseAmount).toFixed(2)}</td>
                            <td>{new Date(expense.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Expenses;
