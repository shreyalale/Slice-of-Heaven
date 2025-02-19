import React, { useState } from 'react';
import { CreditCard, Smartphone, Building2 } from 'lucide-react';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setShowSuccess(true);
      setLoading(false);
    }, 2000); // simulate 2 seconds payment processing
  };

  const validateCard = () => {
    return (
      cardDetails.number.length === 16 &&
      cardDetails.name.length > 0 &&
      cardDetails.expiry.length === 5 &&
      cardDetails.cvv.length === 3
    );
  };

  const validateUpi = () => {
    return upiId.includes('@');
  };

  const resetForm = () => {
    setCardDetails({
      number: '',
      name: '',
      expiry: '',
      cvv: ''
    });
    setUpiId('');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Payment</h2>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex gap-4 mb-8">
          <button
            className={`flex-1 py-3 rounded-md flex items-center justify-center gap-2 ${
              paymentMethod === 'card' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => {
              setPaymentMethod('card');
              resetForm();
            }}
          >
            <CreditCard className="h-5 w-5" />
            Card
          </button>
          <button
            className={`flex-1 py-3 rounded-md flex items-center justify-center gap-2 ${
              paymentMethod === 'upi' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => {
              setPaymentMethod('upi');
              resetForm();
            }}
          >
            <Smartphone className="h-5 w-5" />
            UPI
          </button>
          <button
            className={`flex-1 py-3 rounded-md flex items-center justify-center gap-2 ${
              paymentMethod === 'netbanking' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => {
              setPaymentMethod('netbanking');
              resetForm();
            }}
          >
            <Building2 className="h-5 w-5" />
            Net Banking
          </button>
        </div>

        {paymentMethod === 'card' && (
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                maxLength="16"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234 5678 9012 3456"
                required
              />
              {cardDetails.number && cardDetails.number.length !== 16 && (
                <p className="text-xs text-red-500">Card number must be 16 digits.</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
              <input
                type="text"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  maxLength="5"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="password"
                  maxLength="3"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </form>
        )}

        {paymentMethod === 'upi' && (
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@upi"
                required
              />
              {upiId && !upiId.includes('@') && (
                <p className="text-xs text-red-500">Please enter a valid UPI ID.</p>
              )}
            </div>
          </form>
        )}

        {paymentMethod === 'netbanking' && (
          <div>
            <p className="text-sm text-gray-600">Net Banking is under development.</p>
          </div>
        )}

        <button
          type="submit"
          onClick={handlePayment}
          className={`mt-6 w-full py-3 rounded-md text-white ${
            (paymentMethod === 'card' && validateCard()) || (paymentMethod === 'upi' && validateUpi())
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!(paymentMethod === 'card' && validateCard()) && !(paymentMethod === 'upi' && validateUpi())}
        >
          {loading ? (
            <span className="loader">Processing...</span>
          ) : (
            showSuccess ? 'Payment Successful!' : 'Pay Now'
          )}
        </button>
      </div>
    </div>
  );
}

export default Payment;
