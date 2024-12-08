import { LoaderFunction } from "react-router-dom";
// import ProductList from "../components/products/ProductList";x
import ProductsContainer from "../components/products/ProductsContainer";
import { ProductResponseWithParams } from "../types/productTypes";
import { customFetch } from "../utils/customFetch";
import Filters from "../components/products/Filters";

const url = "/products";
export const loader: LoaderFunction = async ({ request }): Promise<ProductResponseWithParams> => {
	const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
	const response = await customFetch<ProductResponseWithParams>(url, { params });
	console.log(params);
	return { ...response.data, params };
};

function Products() {
	return (
		<>
			<Filters />
			<ProductsContainer />
		</>
	);
}

export default Products;
