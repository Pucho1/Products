
import React from 'react';
import { Trash2, Info } from 'lucide-react';
import { Product } from '../interfaces/product';
import { useNavigate } from 'react-router';

interface CarCardProps {
  product: Product;
  onRemove: (id: number) => void;
}

const CardShopCar: React.FC<CarCardProps> = ({product, onRemove, }) => {
  const navigate  = useNavigate();
  
  const onViewDetails = () => { 
    navigate(`/product/${product.id}`, { state: { product } });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex">
      
      {/* Image and Marca u otra cosa por definir */}
      <div className="relative w-48 h-32 flex-shrink-0">
        <img 
          src={product.images[0]}
          alt={`${product.price} ${product.title}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-slate-800 text-white px-2 py-1 text-xs rounded-full">
          {/* alo ahi por ahora el recio */}
          {product.price}
        </div>
      </div>
      
      {/* DETAILS AND ACTIONS */}
      <div className="p-4 flex-grow flex flex-col justify-between">

        {/* TITLE AND PRICE */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            {/* <p className="text-sm text-gray-600">{product.brand}</p> */}
          </div>
          <p className="text-blue-600 font-bold">${product.price.toLocaleString()}</p>
        </div>
        
        <div className="flex justify-end gap-3 mt-2">
          
          <button 
            onClick={() => onRemove(product.id)}
            className="flex items-center justify-center gap-1 text-red-500 hover:text-red-700 transition-colors px-3 py-1 rounded-md hover:bg-red-50"
            aria-label="Remove from selected"
          >
            <Trash2 size={18} />
            <span className="text-sm">Remove</span>
          </button>
          
          <button
            onClick={() => onViewDetails()}
            className="flex items-center justify-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
            aria-label="View details"
          >
            <Info size={18} />
            <span className="text-sm">Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardShopCar;