import { create } from 'zustand'
import { Product } from '../interfaces/product';
import { carShopState } from '../interfaces/store';

const useStore = create<carShopState>((set) => ({

	productCarShop: [],

  addProoduct: (newProduct: Product) => set((state: carShopState) => (
    { productCarShop: [...state.productCarShop, newProduct] }
  )),

  deleteProductByID: (id: number) => set((state: carShopState) => (
    { productCarShop: state.productCarShop.filter((product) => product.id !== id) }
  )),

}));

export default useStore;