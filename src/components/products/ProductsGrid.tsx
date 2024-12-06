import { useLoaderData } from "react-router-dom";
import { ProductResponse } from "../../types/productTypes";
import GridItem from "./GridItem";

function ProductGrid() {
	const result = useLoaderData() as ProductResponse;
	const products = result.data;

	// console.log(products);
	return (
		<section className="grid sm:grid-cols-2 lg:grid-cols-3">
			{products.map(product => {
				return (
					<GridItem
						product={product}
						key={product.id}
					/>
				);
			})}
		</section>
	);
}

export default ProductGrid;
