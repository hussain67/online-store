import { LoaderFunction } from "react-router-dom";
// import ProductList from "../components/products/ProductList";x
import ProductsContainer from "../components/products/ProductsContainer";
import { ProductResponse } from "../types/productTypes";
import { customFetch } from "../utils/customFetch";

const url = "/products";
export const loader: LoaderFunction = async (): Promise<ProductResponse> => {
	const response = await customFetch<ProductResponse>(url);
	return { ...response.data };
};

function Products() {
	return <ProductsContainer />;
}

export default Products;
