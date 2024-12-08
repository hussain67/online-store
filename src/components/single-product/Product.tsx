import { useLoaderData } from "react-router-dom";
import { formatAsPound } from "../../utils/formatAsPound";
import { SingleProductResponse } from "../../types/productTypes";
import SelectProductColor from "./SelectProductColor";
import { useState } from "react";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";

function ProductInfo() {
	const { data: product } = useLoaderData() as SingleProductResponse;
	const { image, title, price, description, colors, company } = product.attributes;
	const poundAmount = formatAsPound(price);
	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	return (
		<section className="grid sm:grid-cols-2 gap-x-10 mt-4">
			<img
				className="h-72 w-full rounded-md"
				src={image}
			/>
			<div>
				<h1 className="capitalize text-3xl font-bold">{title}</h1>
				<h3 className="text-xl mt-2">{company}</h3>
				<p className="mt-3 text-sm bg-muted rounded-sm inline-block p-2">{poundAmount}</p>
				<p>{description}</p>
				<SelectProductColor
					colors={colors}
					productColor={productColor}
					setProductColor={setProductColor}
				/>
				<SelectProductAmount
					mode={Mode.SingleProduct}
					amount={amount}
					setAmount={setAmount}
				/>
			</div>
		</section>
	);
}

export default ProductInfo;
