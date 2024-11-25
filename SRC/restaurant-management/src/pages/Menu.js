import React, { useEffect, useState } from 'react';
import { getMenuItems } from '../services/menuService';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const data = await getMenuItems();
            setMenuItems(data);
        };
        fetchMenuItems();
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <table>
                <thead>
                    <tr>
                        <th>Menu ID</th>
                        <th>Name</th>
                        <th>Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item) => (
                        <tr key={item.menuID}>
                            <td>{item.menuID}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Menu;
