import React, { useEffect, useState } from "react";
import { getMenuItems } from "../services/menuService";

const CustomerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const data = await getMenuItems();
      // Limit to 20 items
      setMenuItems(data.slice(0, 20));
    };
    fetchMenuItems();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <p className="centerText">Welcome! Here's a list of our menu items:</p>
      {/* Menu Items Table */}
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

export default CustomerMenu;
