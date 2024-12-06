import { useState } from "react";
import ProductGrid from "./ProductsGrid";
import ProductsHeader from "./ProductsHeader";
import ProductList from "./ProductsList";
function ProductsContainer() {
	const [layout, setLayout] = useState<"grid" | "list">("grid");
	return (
		<>
			<ProductsHeader
				layout={layout}
				setLayout={setLayout}
			/>
			{layout === "grid" && <ProductGrid />}
			{layout === "list" && <ProductList />}
		</>
	);
}

export default ProductsContainer;
