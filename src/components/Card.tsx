import { Product } from "../types/productTypes";
import { formatAsPound } from "../utils/formatAsPound";

function Card({ product }: { product: Product }) {
	console.log(product);
	const { image, title, price } = product.attributes;
	const poundAmount = formatAsPound(price);
	return (
		<section>
			<div className="p-6 pt-0">
				<img
					src={image}
					alt={title}
					className="h-64 w-full object-cover"
				/>
				<div className="text-center mt-4">
					<h2 className="capitalize">{title}</h2>
					<p>{poundAmount}</p>
				</div>
			</div>
		</section>
	);
}

export default Card;
