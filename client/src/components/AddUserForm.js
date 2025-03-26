import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import User from '../models/User';
const AddUserForm = () => {
   const [userData, setUserData] = useState(new User('', '', ''));
   const navigate = useNavigate();
    const handleChange = (e) => {
         const { name, value } = e.target;
         setUserData({ ...userData, [name]: value });
        };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInstance = new User(userData.name, userData.email, userData.age); // Create User instance
        await fetch(`http://localhost:3002/users/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInstance.toObject()), // Serialize User instance
        });
        navigate('/');
    }
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
            <button type="submit">Add User</button>
       </form>
    );
}

export default AddUserForm;