import { LoaderFunction } from "react-router-dom";

import { type SingleProductResponse } from "../types/productTypes";
import { customFetch } from "../utils/customFetch";

import PageLinks from "../components/single-product/PageLinks";
import Product from "../components/single-product/Product";

export const loader: LoaderFunction = async ({ params }): Promise<SingleProductResponse> => {
	const response = await customFetch<SingleProductResponse>(`/products/${params.id}`);
	return { ...response.data };
};

function SingleProduct() {
	return (
		<section>
			<PageLinks />
			<Product />
		</section>
	);
}

export default SingleProduct;
