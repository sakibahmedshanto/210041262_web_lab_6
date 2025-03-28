import React, { useState, useEffect } from 'react';
import User from '../models/UserModel';
import DeleteButton from './DeleteButton'; // Import DeleteButton
import UpdateButton from './UpdateButton';
import AddUserButton from './AddUserButton';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3002/users/');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = (email) => {
    setUsers(users.filter(user => user.email !== email));
  };

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <DeleteButton mail={user.email} onDelete={handleDelete} /> 
              </td>
              <td>
                <UpdateButton user={user} /> {/* Pass user to UpdateButton */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddUserButton />
    </div>
  );
};

export default Users;
