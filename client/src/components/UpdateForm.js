import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import User from '../models/User'; // Import the User class

const UpdateForm = () => {
    const { mail } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(new User('', '', '')); // Ensure userData is a User instance

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`http://localhost:3002/users/${mail}`);
            const data = await response.json();
            setUserData(User.fromObject(data)); // Use User.fromObject to ensure consistency
        };
        fetchUserData();
    }, [mail]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => {
            const updatedData = { ...prevData.toObject(), [name]: value }; // Update only the specific field
            return User.fromObject(updatedData); // Ensure consistency with User instance
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:3002/users/${mail}`, { // Corrected API endpoint
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData.toObject()), // Serialize User instance
        });
        navigate('/'); // Navigate to home after successful update
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateForm;
