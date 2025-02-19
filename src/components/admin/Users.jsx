import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserData, setEditUserData] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsEditing(false);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
    setEditUserData(user);
  };

  const handleDelete = async (userId) => {
    try {
      await api.delete(`/users/${userId}`);
      alert('User deleted successfully!');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/users/${editUserData.id}`, editUserData);
      alert('User updated successfully!');
      setIsEditing(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({ ...editUserData, [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      {selectedUser ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">
              {isEditing ? 'Edit User' : 'User Details'}
            </h3>
            <button
              onClick={() => {
                setSelectedUser(null);
                setIsEditing(false);
              }}
              className="text-blue-500"
            >
              Back to Users
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Personal Information</h4>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="username"
                      value={editUserData.username || ''}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editUserData.email || ''}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Reward Points</label>
                    <input
                      type="number"
                      name="rewardPoints"
                      value={editUserData.rewardPoints || 0}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Personal Information</h4>
                <p><strong>Name:</strong> {selectedUser.username}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Joined:</strong> {selectedUser.createdAt}</p>
                <p><strong>Reward Points:</strong> {selectedUser.rewardPoints}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Reward Points</th>
                <th className="text-left py-2">Joined</th>
                <th className="text-right py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-2">{user.username}</td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">{user.rewardPoints}</td>
                  <td className="py-2">{user.createdAt}</td>
                  <td className="py-2 text-right">
                    <button
                      onClick={() => handleViewDetails(user)}
                      className="text-blue-500 mr-2"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-green-500 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
 
export default Users;