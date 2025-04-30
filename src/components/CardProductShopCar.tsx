
import React from 'react';
import { Trash2, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router';

import useStore from '../store/useZTanDStore';
import { CarCardProps } from '../interfaces/shopCar';


const CardShopCar: React.FC<CarCardProps> = ({product, onRemove, }) => {
  const navigate  = useNavigate();
  const { changeQuantity } = useStore();

  
  const onViewDetails = () => { 
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const totalPrice = (): number => product.price * ( product.quantity ?? 1 );
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg w-full">
      {/* Mobile First Layout (stacked) */}
      <div className="flex flex-col sm:flex-row">
        {/* Product Image with Price Overlay */}
        <div className="relative w-full sm:w-50 h-58 sm:h-32 flex-shrink-0">
          <img
            src={product.images[0]}
            alt={`${product.title}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-slate-800 text-white px-2 py-1 text-xs font-medium rounded-full">
            ${product.price.toFixed(2)}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          {/* Title and Price */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
              {product.brand && <p className="text-sm text-gray-600">{product.brand}</p>}
            </div>
            <p className="text-blue-600 font-bold mt-1 sm:mt-0">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Quantity Controls and Total */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Quantity:</span>
              <div className="flex items-center overflow-hidden">
                <button
                  onClick={() => changeQuantity(product.id)}
                  className="bg-blue-500 rounded-md hover:bg-blue-600 text-gray-700 p-1 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <ChevronDown size={18} />
                </button>
                
                <span className="px-3 py-1 font-medium text-sm">
                  {product.quantity || 1}
                </span>
                
                <button
                  onClick={() => changeQuantity(product.id, 'increase')}
                  className="bg-blue-500 hover:bg-blue-600 rounded-md text-gray-700 p-1 transition-colors"
                  aria-label="Increase quantity"
                >
                  <ChevronUp size={18} />
                </button>
              </div>
            </div>
            
            <p className="text-blue-600 font-bold mt-2 sm:mt-0">
              Total: ${totalPrice().toFixed(2)}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-row justify-end gap-2 mt-4 lg:items-end">
            <button 
              onClick={() => onRemove(product.id)}
              className="flex items-center justify-center gap-1 text-red-500 hover:text-red-700 transition-colors px-3 py-2 rounded-md hover:bg-red-50 border border-red-200 w-30 lg:w-50"
              aria-label="Remove from cart"
            >
              <Trash2 size={18} />
              <span className="text-sm font-medium">Remove</span>
            </button>
            
            <button
              onClick={onViewDetails}
              className="flex items-center justify-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors w-30 lg:w-50"
              aria-label="View details"
            >
              <Info size={18} />
              <span className="text-sm font-medium">Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopCar;
