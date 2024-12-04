import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();

  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-red-600 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Slice of Heaven</Link>
        <div className="flex items-center space-x-6">
          <Link to="/menu" className="hover:text-red-200">Menu</Link>
          <Link to="/rewards" className="hover:text-red-200">Rewards</Link>
          <Link to="/Login" className="hover:text-red-200">Login</Link>
          
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="h-6 w-6 hover:text-red-200" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;