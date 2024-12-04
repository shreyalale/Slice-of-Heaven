import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const paymentMethods = [
  { id: 'upi', name: 'UPI', icon: '📱' },
  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
];

const Checkout = () => {
  const { state } = useCart();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    upi: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    bank: '',
  });

  const total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
    alert('Payment processing would happen here!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`p-4 border rounded-lg cursor-pointer ${
                  selectedMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{method.icon}</span>
                  <span className="font-medium">{method.name}</span>
                </div>
              </div>
            ))}
          </div>

          {selectedMethod && (
            <form onSubmit={handlePaymentSubmit} className="mt-6 space-y-4">
              {selectedMethod === 'upi' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">UPI ID</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="username@upi"
                    value={paymentDetails.upi}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, upi: e.target.value })}
                  />
                </div>
              )}

              {selectedMethod === 'card' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="1234 5678 9012 3456"
                      value={paymentDetails.cardNumber}
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="MM/YY"
                        value={paymentDetails.cardExpiry}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cardExpiry: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="123"
                        value={paymentDetails.cardCvv}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cardCvv: e.target.value })}
                      />
                    </div>
                  </div>
                </>
              )}

              {selectedMethod === 'netbanking' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Bank</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={paymentDetails.bank}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, bank: e.target.value })}
                  >
                    <option value="">Select a bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Pay ₹{total}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Rewards</h2>
            <p className="text-orange-500">
              You'll earn {state.items.reduce((sum, item) => sum + (item.points * item.quantity), 0)} points with this order!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;