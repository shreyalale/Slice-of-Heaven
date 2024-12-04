import React from 'react';
import { useCart } from '../context/CartContext';

const pizzas = [
  {
    id: 1,
    name: 'Margherita Supreme',
    price: 299,
    points: 30,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    description: 'Fresh tomatoes, mozzarella, basil, and our special sauce'
  },
  {
    id: 2,
    name: 'Pepperoni Feast',
    price: 399,
    points: 40,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
    description: 'Loaded with pepperoni and extra cheese'
  },
  {
    id: 3,
    name: 'Veggie Paradise',
    price: 349,
    points: 35,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    description: 'Bell peppers, mushrooms, onions, and black olives'
  }
];

const TrendingPizzas = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (pizza) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: pizza
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Pizzas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-600">₹{pizza.price}</span>
                  <button 
                    onClick={() => handleAddToCart(pizza)}
                    className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPizzas;