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
            <ul>
                {menuItems.map((item) => (
                    <li key={item.menuID}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
