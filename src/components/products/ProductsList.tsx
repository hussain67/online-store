import { useLoaderData } from "react-router-dom";
import { ProductResponse } from "../../types/productTypes";
import ProductItem from "./ListtItem";

export default function ProductList() {
	const result = useLoaderData() as ProductResponse;
	const products = result.data;

	// console.log(products);
	return (
		<section>
			{products.map(product => {
				return (
					<ProductItem
						key={product.id}
						product={product}
					/>
				);
			})}
		</section>
	);
}
