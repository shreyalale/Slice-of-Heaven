import React from 'react';
import { FaPizzaSlice, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
function DashboardWelcome({ userName }) {
  const currentTime = new Date();
  const hour = currentTime.getHours();
 
  const getGreeting = () => {
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };
 
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="mt-12">
        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-5xl text-orange-600" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {getGreeting()}, {userName}
            </h2>
            <p className="text-gray-600 mt-2 flex items-center">
              <FaPizzaSlice className="mr-2 text-red-500" />
              Welcome to Slice of Heaven Dashboard
            </p>
          </div>
        </div>
      </div>
 
      <div className="mt-6 bg-orange-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/dashboard/menu" className="bg-white p-4 rounded-lg shadow text-center hover:bg-orange-100 transition">
            <FaPizzaSlice className="mx-auto text-2xl text-red-600 mb-2" />
            <span>Order Pizza</span>
          </Link>
          <Link to="/dashboard/profile" className="bg-white p-4 rounded-lg shadow text-center hover:bg-orange-100 transition">
            <FaUserCircle className="mx-auto text-2xl text-blue-600 mb-2" />
            <span>Update Profile</span>
          </Link>
          <Link to="/dashboard/rewards" className="bg-white p-4 rounded-lg shadow text-center hover:bg-orange-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>Rewards</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default DashboardWelcome;