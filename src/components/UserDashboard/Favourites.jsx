import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const pizzas = [
  {
    id: 1,
    name: 'Margherita Supreme',
    description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
    price: 149,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
  },
  {
    id: 2,
    name: 'Pepperoni Feast',
    description: 'Double pepperoni, extra cheese, and Italian herbs',
    price: 169,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e'
  },
  {
    id: 3,
    name: 'Vegetarian Delight',
    description: 'Bell peppers, mushrooms, onions, olives, and corn',
    price: 159,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
  }
];

function Favourites() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (pizza) => {
    const existingItem = cart.find(item => item.id === pizza.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === pizza.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter(item => item.id !== pizzaId));
  };

  const updateQuantity = (pizzaId, change) => {
    setCart(cart.map(item => {
      if (item.id === pizzaId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const proceedToCheckout = () => {
    navigate('/payment'); // Change to navigate to the payment page
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Favorite Pizzas</h1>
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {getTotalItems()}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => {
          const cartItem = cart.find(item => item.id === pizza.id);
          return (
            <div key={pizza.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">₹{pizza.price}</span>
                  {!cartItem ? (
                    <button
                      onClick={() => addToCart(pizza)}
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      <Plus className="h-4 w-4" />
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(pizza.id, -1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-semibold">{cartItem.quantity}</span>
                      <button
                        onClick={() => updateQuantity(pizza.id, 1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
          <div className="container mx-auto">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg">Total Items: {getTotalItems()}</p>
                <p className="text-xl font-bold">Total Amount: ₹{getTotalAmount()}</p>
              </div>
              <button
                onClick={proceedToCheckout}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favourites;
