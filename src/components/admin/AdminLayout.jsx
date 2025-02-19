import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FaPizzaSlice, FaUsers, FaSignOutAlt, FaGifts } from 'react-icons/fa';
import { MdDashboard, MdInventory } from 'react-icons/md';
 
const AdminLayout = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    navigate('/login');
  };
 
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">👨🏻‍💼Admin👨🏻‍💼</h1>
        </div>
        <nav className="mt-4">
          <Link to="/admin" className="block px-4 py-2 hover:bg-gray-700">
            <MdDashboard className="inline mr-2" /> Dashboard
          </Link>
          <Link to="/admin/inventory" className="block px-4 py-2 hover:bg-gray-700">
            <MdInventory className="inline mr-2" /> Pizza Inventory
          </Link>
          <Link to="/admin/toppings" className="block px-4 py-2 hover:bg-gray-700">
            <FaPizzaSlice className="inline mr-2" /> Toppings
          </Link>
          <Link to="/admin/rewards" className="block px-4 py-2 hover:bg-gray-700">
            <FaGifts className="inline mr-2" /> Rewards
          </Link>
          <Link to="/admin/users" className="block px-4 py-2 hover:bg-gray-700">
            <FaUsers className="inline mr-2" /> Users
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            <FaSignOutAlt className="inline mr-2" /> Logout
          </button>
        </nav>
      </div>
 
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
 
export default AdminLayout;