import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building, Trash2 } from 'lucide-react';

function Addresses() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    },
    {
      id: 2,
      type: 'Office',
      street: '456 Business Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10002'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
    setNewAddress({ type: '', street: '', city: '', state: '', zipCode: '' });
    setShowAddForm(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSelectAddress = (address) => {
    // In a real app, you would save the selected address
    navigate('/payment');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Select Delivery Address</h2>
      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                {address.type === 'Home' ? (
                  <Home className="h-5 w-5 text-blue-600" />
                ) : (
                  <Building className="h-5 w-5 text-blue-600" />
                )}
                <h3 className="font-semibold text-lg">{address.type}</h3>
              </div>
              <button
                onClick={() => handleDeleteAddress(address.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">{address.street}</p>
              <p className="text-gray-600">{`${address.city}, ${address.state} ${address.zipCode}`}</p>
            </div>
            <button
              onClick={() => handleSelectAddress(address)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Deliver Here
            </button>
          </div>
        ))}
      </div>
      
      {showAddForm ? (
        <form onSubmit={handleAddAddress} className="mt-6 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Address Type</label>
              <input
                type="text"
                value={newAddress.type}
                onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Street</label>
              <input
                type="text"
                value={newAddress.street}
                onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                value={newAddress.city}
                onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                value={newAddress.state}
                onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
              <input
                type="text"
                value={newAddress.zipCode}
                onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowAddForm(true)}
          className="mt-6 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto"
        >
          <Plus className="h-5 w-5" />
          Add New Address
        </button>
      )}
    </div>
  );
}

export default Addresses;