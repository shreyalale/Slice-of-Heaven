import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt="Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Delicious Pizza Delivered To Your Doorstep
        </h1>
        <p className="text-xl text-white mb-8">
          Fresh, hot and made with love. Order now and get exclusive deals!
        </p>
        <Link
          to="/menu"
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;