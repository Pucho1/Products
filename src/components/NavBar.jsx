import React, { useState } from 'react';

import { Menu, X, LogOut, User, ShoppingCart } from 'lucide-react';

import { useAuthStore } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const authStore = useAuthStore();

  const logOut = () => { authStore.logout() };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-600">TechStore</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/productos" className="text-gray-600 hover:text-gray-900">Productos</a>
            <a href="/ofertas" className="text-gray-600 hover:text-gray-900">Ofertas</a>
            <a href="/contacto" className="text-gray-600 hover:text-gray-900">Contacto</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Salir</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
