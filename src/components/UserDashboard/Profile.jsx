import React, { useState } from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Virat Kohli",
    email: "virat18@gmail.com",
    phone: "+91 9876543210",
    addresses: [
      {
        id: 1,
        type: "Home",
        street: "B-404, Sunshine Apartments",
        area: "Andheri West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400053"
      },
      {
        id: 2,
        type: "Office",
        street: "CDAC,Kharghar",
        area: "Bharti Vidyapeeth",
        city: "Kharghar",
        state: "Maharashtra",
        pincode: "400064"
      }
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, you would save the changes to the backend here
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <User className="w-8 h-8 text-blue-500 mr-3" />
        <h2 className="text-3xl font-bold">My Profile</h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{profile.name}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <h3 className="text-xl font-semibold">Saved Addresses</h3>
        </div>
        <div className="space-y-4">
          {profile.addresses.map((address) => (
            <div key={address.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-2 py-1 text-sm bg-gray-100 rounded-md mb-2">
                    {address.type}
                  </span>
                  <p className="font-medium">{address.street}</p>
                  <p className="text-gray-600">{address.area}</p>
                  <p className="text-gray-600">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
                <button className="text-blue-500 hover:text-blue-600">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;