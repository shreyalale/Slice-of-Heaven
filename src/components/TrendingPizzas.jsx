import React from 'react';
 
const pizzas = [
  {
    id: 1,
    name: 'Margherita Supreme',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    description: 'Fresh tomatoes, mozzarella, basil, and our special sauce',
  },
  {
    id: 2,
    name: 'Pepperoni Feast',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
    description: 'Loaded with pepperoni and extra cheese',
  },
  {
    id: 3,
    name: 'Veggie Paradise',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    description: 'Bell peppers, mushrooms, onions, and black olives',
  },
  {
    id: 4,
    name: 'BBQ Chicken',
    image: 'https://www.shutterstock.com/image-photo/view-bbq-chicken-pizza-600nw-2529042203.jpg', // Updated URL
    description: 'BBQ chicken, onions, and special tangy sauce',
  },
];
 
const TrendingPizzas = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Pizzas</h2>
        <div className="relative overflow-hidden">
          {/* Duplicating content for seamless scrolling */}
          <div className="flex items-center space-x-8 animate-slide">
            {[...pizzas, ...pizzas].map((pizza, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex-shrink-0 w-80"
              >
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                  <p className="text-gray-600">{pizza.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Styles */}
      <style jsx="true">{`
        .animate-slide {
          display: flex;
          animation: slide 15s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
 
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};
 
export default TrendingPizzas;