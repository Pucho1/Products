import { Product } from "./product";

export interface carShopState {
    productCarShop: Product[],
    addProoduct: (newProduct: Product) => void;
    deleteProductByID: (id: number) => void;
   }