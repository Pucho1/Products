import { AxiosResponse } from "axios";
import axs from "../api/axiosCustom";
import { Product } from "../interfaces/product";

const ProductService = () => {

  const getProductsList = (): Promise<AxiosResponse<Product[]>> => {
    return axs.get<Product[]>(`/products`);
  };

  return { getProductsList };
};

export default ProductService;
