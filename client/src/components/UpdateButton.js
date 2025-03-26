import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const UpdateButton = ({ user }) => {

    const navigate = useNavigate();
    const updateUser = () => {
        navigate(`/update/${user.email}`, { state: { user } }); // Pass user details via state
    };

    return (
        <button onClick={updateUser}>
            update user
        </button>
    );
};

export default UpdateButton;