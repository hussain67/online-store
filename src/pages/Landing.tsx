import { type LoaderFunction } from "react-router-dom";
import FeaturedProducts from "../components/featured-products/FeaturedProducts";
import Hero from "../components/hero/Hero";
import { ProductResponse } from "../types/productTypes";
import { customFetch } from "../utils/customFetch";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductResponse> => {
	const response = await customFetch<ProductResponse>(url);
	return { ...response.data };
};
function Landing() {
	// const result = useLoaderData();
	// console.log(result);
	return (
		<div>
			<Hero />
			<FeaturedProducts />
		</div>
	);
}

export default Landing;
