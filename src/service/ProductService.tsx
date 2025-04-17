import { AxiosResponse } from "axios";
import axs from "../api/axiosCustom";
import { Product } from "../interfaces/product";

const ProductService = () => {

	const getProductsList = (): Promise<AxiosResponse<Product[]>> => {
		return axs.get<Product[]>(`/products`);
	};

	// const getProductById = async (id: number) => {
	// 		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
	// 		return response.json();
	// };
	

  return { 
		getProductsList,
	};
};

export default ProductService;
