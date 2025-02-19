import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Slice of Heaven</h3>
            <p className="text-gray-300">
              Delivering happiness with every slice since ages.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <ul className="text-gray-300 space-y-2">
              <li>📞 Phone: +91 9766993930</li>
              <li>✉️ Email: info@sliceofheaven.co.in</li>
              <li>📍 Address: Near CDAC Kharghar, Mumbai, India</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sliceofheaven_project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Slice of Heaven India. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacy" className="hover:text-yellow-400 transition-all duration-300">
              Privacy Policy
            </Link>
            {' | '}
            <Link to="/terms" className="hover:text-yellow-400 transition-all duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;