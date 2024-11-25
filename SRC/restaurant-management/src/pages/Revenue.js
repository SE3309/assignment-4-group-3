import React, { useEffect, useState } from 'react';
import { getMenuRevenue } from '../services/menuService';

const Revenue = () => {
    const [revenueData, setRevenueData] = useState([]);

    useEffect(() => {
        const fetchRevenueData = async () => {
            const data = await getMenuRevenue();
            setRevenueData(data);
        };
        fetchRevenueData();
    }, []);

    return (
        <div>
            <h1>Revenue by Menu Item</h1>
            <table>
                <thead>
                    <tr>
                        <th>Menu Item</th>
                        <th>Total Revenue ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {revenueData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.MenuItem}</td>
                            <td>{Number(item.TotalRevenue).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Revenue;
