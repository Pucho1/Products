import React, { useState } from 'react';

import { Menu, X, ShoppingBag, User } from 'lucide-react';

import { useAuthStore } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const authStore = useAuthStore();

  const logOut = () => { authStore.logout() };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">ShopName</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Products</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Categories</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
            <button 
              className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              onClick={() => logOut() }
            >
              <User size={20} />
              <span>LogOut</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Categories</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">About</a>
            <button className="w-full mt-2 flex items-center justify-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              <User size={20} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;