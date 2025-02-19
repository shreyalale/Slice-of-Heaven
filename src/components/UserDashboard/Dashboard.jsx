import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaHistory, FaMapMarkerAlt, FaGift, FaSignOutAlt, FaPizzaSlice, FaSquare, FaBars, FaTimes } from 'react-icons/fa';
 
function Dashboard() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname.split('/').pop() || 'menu');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    window.location.href = '/login';
  };
 
  const menuItems = [
    { id: 'dashboard', icon: FaSquare, label: 'Dashboard', path: '/dashboard' },
    { id: 'menu', icon: FaPizzaSlice, label: 'Menu', path: '/dashboard/menu' },
    {id: 'favorite', icon: FaSquare, label: 'Favorite', path: '/dashboard/favorite'},
    { id: 'cart', icon: FaShoppingCart, label: 'Cart', path: '/dashboard/cart' },
    { id: 'orders', icon: FaHistory, label: 'Orders', path: '/dashboard/orders' },
    { id: 'addresses', icon: FaMapMarkerAlt, label: 'Addresses', path: '/dashboard/addresses' },
    { id: 'rewards', icon: FaGift, label: 'Rewards', path: '/dashboard/rewards' },
    { id: 'profile', icon: FaUser, label: 'Profile', path: '/dashboard/profile' },
  ];
 
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hamburger Icon for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 text-red-600 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
 
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white shadow-xl transition-transform duration-300 z-40 md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 bg-gradient-to-r from-red-600 to-orange-600">
          <h1 className="text-white text-lg font-bold">🍕 Slice of Heaven</h1>
        </div>
        <nav className="mt-6 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false); // Close sidebar on mobile after selection
              }}
              className={`w-full flex items-center p-4 my-2 transition-all duration-200 rounded-lg ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:bg-orange-50 hover:scale-102'
              }`}
            >
              <item.icon className={`mr-3 ${activeTab === item.id ? 'text-white' : 'text-orange-600'}`} />
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center p-4 my-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200 hover:scale-102"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </nav>
      </div>
 
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto md:ml-72">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
 
export default Dashboard;