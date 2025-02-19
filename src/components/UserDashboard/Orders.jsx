import React from 'react';
import { Package, Clock, MapPin } from 'lucide-react';

function Orders() {
  const orders = [
    {
      id: "OD123456",
      date: "February 10, 2025",
      total: 1247,
      status: "Delivered",
      items: [
        { name: "Tandoori Paneer Pizza", quantity: 1, price: 449 },
        { name: "Chicken Tikka Pizza", quantity: 2, price: 399 }
      ],
      deliveryAddress: "B-404, Sunshine Apartments, Andheri West, Mumbai"
    },
    {
      id: "OD123455",
      date: "February 09, 2025",
      total: 898,
      status: "Delivered",
      items: [
        { name: "Maharaja Special Pizza", quantity: 1, price: 599 },
        { name: "Garlic Breadsticks", quantity: 1, price: 299 }
      ],
      deliveryAddress: "WeWork, Mindspace Business Park, Malad West, Mumbai"
    },
    {
      id: "OD123454",
      date: "March 5, 2024",
      total: 1547,
      status: "Delivered",
      items: [
        { name: "Family Feast Combo", quantity: 1, price: 1299 },
        { name: "Chocolate Mousse", quantity: 2, price: 124 }
      ],
      deliveryAddress: "B-404, Sunshine Apartments, Andheri West, Mumbai"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Package className="w-8 h-8 text-blue-500 mr-3" />
        <h2 className="text-3xl font-bold">My Orders</h2>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600">Order #{order.id}</p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-gray-400 mr-1" />
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {order.status}
                </span>
              </div>

              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{order.deliveryAddress}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <p className="text-gray-600">Order Total:</p>
                <p className="text-xl font-bold">₹{order.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;