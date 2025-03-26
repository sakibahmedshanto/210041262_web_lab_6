import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateForm = () => {
    const { mail } = useParams(); 
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ name: '', email: '', age: '' }); // Include age

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`/api/users/${mail}`); 
            const data = await response.json();
            setUserData(data);
        };
        fetchUserData();
    }, [mail]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value }); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await fetch(`/api/users/${mail}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        navigate('/');
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
