import { AxiosResponse } from "axios";
import axs from "../api/axiosCustom";
import { ProductListResponse } from "../interfaces/product";

const ProductService = () => {

  const getProductsList = (): Promise<AxiosResponse<ProductListResponse>> => {
    return axs.get<ProductListResponse>(`/products`);
  };

  return { getProductsList };
};

export default ProductService;
