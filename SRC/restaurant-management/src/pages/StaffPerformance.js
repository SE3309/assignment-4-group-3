import React, { useEffect, useState } from 'react';
import { getStaffPerformance } from '../services/staffService';

const StaffPerformance = () => {
    const [performanceData, setPerformanceData] = useState([]);

    useEffect(() => {
        const fetchPerformanceData = async () => {
            const data = await getStaffPerformance();
            setPerformanceData(data);
        };
        fetchPerformanceData();
    }, []);

    return (
        <div>
            <h1>Staff Performance</h1>
            <table>
                <thead>
                    <tr>
                        <th>Staff ID</th>
                        <th>Staff Name</th>
                        <th>Job Title</th>
                        <th>Total Orders Handled</th>
                        <th>Total Revenue ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {performanceData.map((staff) => (
                        <tr key={staff.staffID}>
                            <td>{staff.staffID}</td>
                            <td>{staff.StaffName}</td>
                            <td>{staff.jobTitle}</td>
                            <td>{staff.TotalOrdersHandled}</td>
                            <td>{Number(staff.TotalRevenue).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffPerformance;
