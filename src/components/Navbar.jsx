import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';
 
const Navbar = () => {
  const location = useLocation();
  const { state } = useCart();
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);
 
  // Define routes where the navbar should be hidden
  const hideNavbarRoutes = [
    '/dashboard',
    '/dashboard/menu',
    '/dashboard/cart',
    '/dashboard/orders',
    '/dashboard/addresses',
    '/dashboard/rewards',
    '/dashboard/profile',
    '/dashboard/admin', 
    '/payment'
  ];
 
  // If the current route matches any in hideNavbarRoutes, don't render the navbar
  if (hideNavbarRoutes.some((route) => location.pathname.startsWith(route))) {
    return null;
  }
 
  return (
    <nav className="bg-red-600 text-white py-3 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <Link to="/" className="text-xl font-bold">Slice of Heaven</Link>
        </div>
 
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* <Link to="/menu" className="hover:text-red-200">Menu</Link> */}
          <Link to="/rewards" className="hover:text-red-200">Rewards</Link>
          <Link to="/login" className="hover:text-red-200">Login</Link>
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="h-6 w-6 hover:text-red-200" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
 
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700 py-3 px-6 absolute w-full left-0 top-full">
          <Link to="/menu" className="block py-2 hover:text-red-200" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/rewards" className="block py-2 hover:text-red-200" onClick={() => setIsOpen(false)}>Rewards</Link>
          <Link to="/login" className="block py-2 hover:text-red-200" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/cart" className="block py-2 hover:text-red-200 relative" onClick={() => setIsOpen(false)}>
            <ShoppingCartIcon className="h-6 w-6 inline-block" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};
 
export default Navbar;