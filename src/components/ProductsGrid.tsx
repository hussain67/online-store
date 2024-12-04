import { Link, useLoaderData } from "react-router-dom";
import { Product, ProductResponse } from "../types/productTypes";
import Card from "./Card";

function ProductsGrid() {
	const { data: products } = useLoaderData() as ProductResponse;
	// console.log(data);
	return (
		<section className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product: Product) => (
				<Link to={`/products/${product.id}`}>
					<Card
						key={product.id}
						product={product}
					/>
				</Link>
			))}
		</section>
	);
}

export default ProductsGrid;
