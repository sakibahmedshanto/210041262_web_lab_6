import React from 'react';

const DeleteButton = ({ mail, onDelete }) => {
    function DeleteUser(mail) {
        fetch(`http://localhost:3002/users/${mail}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                alert('User deleted successfully');
                if (onDelete) onDelete(); // Invoke the callback to refresh the table
            } else {
                alert('Failed to delete user');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while deleting the user');
        });
    }

    return (
        <div>
            <button 
                onClick={() => DeleteUser(mail)}
            >
                Delete User
            </button>
        </div>
    );
};

export default DeleteButton;