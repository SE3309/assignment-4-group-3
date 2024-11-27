import React, { useEffect, useState } from 'react';
import { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } from '../services/menuService';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [formData, setFormData] = useState({ name: '', price: '' });
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const data = await getMenuItems();
            setMenuItems(data);
        };
        fetchMenuItems();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editData) {
            setEditData({ ...editData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleAddItem = async (e) => {
        e.preventDefault();
        const newItem = await addMenuItem(formData);
        setMenuItems([...menuItems, newItem]);
        setFormData({ name: '', price: '' });
    };

    const handleEditItem = async (e) => {
        e.preventDefault();
        await updateMenuItem(editData.menuID, editData);
        setMenuItems(menuItems.map(item => item.menuID === editData.menuID ? editData : item));
        setEditData(null);
    };

    const handleDeleteItem = async (id) => {
        console.log('Deleting menu item with ID:', id); // Add this line
        await deleteMenuItem(id);
        setMenuItems(menuItems.filter(item => item.menuID !== id));
    };
    

    return (
        <div>
            <h1>Menu Management</h1>

            {/* Add or Edit Form */}
            <form onSubmit={editData ? handleEditItem : handleAddItem}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={editData ? editData.name : formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    step="0.01"
                    name="price"
                    placeholder="Price"
                    value={editData ? editData.price : formData.price}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{editData ? 'Update Item' : 'Add Item'}</button>
                {editData && <button onClick={() => setEditData(null)}>Cancel</button>}
            </form>

            {/* Menu Items Table */}
            <table>
                <thead>
                    <tr>
                        <th>Menu ID</th>
                        <th>Name</th>
                        <th>Price ($)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item) => (
                        <tr key={item.menuID}>
                            <td>{item.menuID}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => setEditData(item)}>Edit</button>
                                <button onClick={() => handleDeleteItem(item.menuID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Menu;
