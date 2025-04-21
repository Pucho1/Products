import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../interfaces/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {


  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mt-1">{product.category}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="flex items-center text-blue-600 hover:text-blue-800"
            onClick={onClick}
          >
            Ver más <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};