import { useState } from "react";
import { useNavigate } from "react-router";

import useProducts from "./useproducts";
import { ProductCard } from "../../components/ProductCard";
import { Product } from "../../interfaces/product";

const Products = () => {

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const [productList, setProductList] = useState<Product[]>([]);
	const navigate = useNavigate();

	useProducts(setProductList);

	const goDetail = (product: Product) => {
		// setSelectedProduct(product);
		// window.location.href = `/products-list/${product.id}`;
		// navegate(`/products-list/${product.id}`);
		console.log('product',product);

		navigate(`/products-list/${product.id}`, { state: { product } });

		// navigate("/products-list/:id", { state: { product } });
		// navigate("/products-list/:id", { state: { product } });
		// console.log(product);
		// console.log(productList);
		// console.log(selectedProduct);
		// console.log(productList.find((p) => p.id === product.id));
	};
 
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{productList.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					onClick={() => goDetail(product)}
				/>
			))}
		</div>
	);
};

export default Products;
