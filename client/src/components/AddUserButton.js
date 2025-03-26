import React from 'react';
import { useNavigate } from 'react-router-dom'; 
const AddUserButton = () => {
    const navigate = useNavigate();
    const addUser = () => {
        navigate(`/addUser`); 
    };
    return (
        <div>
            <button onClick={addUser}>
                Add User
            </button>
        </div>
    );
}
export default AddUserButton;