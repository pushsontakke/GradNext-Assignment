import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/form/users');
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    const updateUserStatus = async (userId, status) => {
        try {
            await axios.put(`http://localhost:5000/api/form/user/${userId}/status`, { status });
            fetchUsers(); // Refresh the list
        } catch (error) {
            console.error('Error updating user status:', error);
        }
    };

    const getStatusBadge = (user) => {
        if (user.paymentComplete) return 'Paid';
        if (user.clickedLink) return 'Clicked Link';
        if (user.emailOpened) return 'Email Opened';
        return 'New';
    };

    const getStatusClass = (user) => {
        if (user.paymentComplete) return 'status-paid';
        if (user.clickedLink) return 'status-clicked';
        if (user.emailOpened) return 'status-opened';
        return 'status-new';
    };

    if (loading) {
        return <div className="dashboard-container">Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            <h2>User Journey Dashboard</h2>
            <div className="users-table">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Follow-ups</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                  <span className={`status-badge ${getStatusClass(user)}`}>
                    {getStatusBadge(user)}
                  </span>
                            </td>
                            <td>{user.followUpCount}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td>
                                {!user.emailOpened && (
                                    <button
                                        onClick={() => updateUserStatus(user._id, 'opened')}
                                        className="action-btn"
                                    >
                                        Mark Opened
                                    </button>
                                )}
                                {!user.clickedLink && (
                                    <button
                                        onClick={() => updateUserStatus(user._id, 'clicked')}
                                        className="action-btn"
                                    >
                                        Mark Clicked
                                    </button>
                                )}
                                {!user.paymentComplete && (
                                    <button
                                        onClick={() => updateUserStatus(user._id, 'paid')}
                                        className="action-btn"
                                    >
                                        Mark Paid
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;