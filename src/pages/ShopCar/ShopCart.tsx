import React from 'react';
import { Store } from 'lucide-react';

import useStore from '../../store/useZTanDStore';
import CarProductShopCar from '../../components/CardProductShopCar';
import { Product } from '../../interfaces/product';
import { useNavigate } from 'react-router';

const CarShop: React.FC = () => {
  const { productCarShop, deleteProductByID } = useStore();

  const navigate  = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Store size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">
              Selected Products
            </h1>
          </div>
        </div>
      </header>

      {productCarShop.length === 0
        ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Store size={48} className="text-slate-300 mb-4" />
            <h3 className="text-xl font-medium text-slate-700 mb-2">No products selected</h3>
            <p className="text-slate-500 max-w-md">
              You haven't added any products to your selection yet.
            </p>
            <button 
              onClick={ () => navigate('/')}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <Store size={20} />
              Browse Products
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {productCarShop.map((car: Product) => (
              <div key={car.id} className="animate-fadeIn">
                <CarProductShopCar
                  product={car}
                  onRemove={deleteProductByID}
                />
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default CarShop;