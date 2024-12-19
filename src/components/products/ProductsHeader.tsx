import { Grid, List } from "lucide-react";
import { Button } from "../ui/button";
import { useLoaderData } from "react-router-dom";
import { ProductResponse } from "../../types/productTypes";

type PropsType = {
	layout: "grid" | "list";
	setLayout: React.Dispatch<React.SetStateAction<"grid" | "list">>;
};
function ProductsHeader({ layout, setLayout }: PropsType) {
	const result = useLoaderData() as ProductResponse;
	const totalItems: number = result.meta.pagination.total;
	// console.log();
	return (
		<section className="flex justify-between border-solid border-b-2 pb-3 mb-4">
			<h3>Total items: {totalItems}</h3>
			<div className="flex gap-3">
				<Button
					size="icon"
					variant={layout === "grid" ? "default" : "ghost"}
					onClick={() => setLayout("grid")}
				>
					<Grid />
				</Button>
				<Button
					size="icon"
					variant={layout === "list" ? "default" : "ghost"}
					onClick={() => setLayout("list")}
				>
					<List />
				</Button>
			</div>
		</section>
	);
}

export default ProductsHeader;
