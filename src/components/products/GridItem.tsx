import { Link } from "react-router-dom";
import { Product } from "../../types/productTypes";
import { formatAsPound } from "../../utils/formatAsPound";

function GridItem({ product }: { product: Product }) {
	// console.log(product);
	const { title, image, price, company } = product.attributes;
	const poundAmount = formatAsPound(price);

	return (
		<Link
			to={`/products/${product.id}`}
			className="p-6 m-3  border-solid border-2"
		>
			<img
				src={image}
				alt={title}
				className="h-64 w-full object-cover sm:h-48"
			/>
			<div className="flex mt-2">
				<div className=" sm:mt-0">
					<h2 className="capitalize">{title}</h2>
					<h4>{company}</h4>
				</div>
				<p className="ml-auto">{poundAmount}</p>
			</div>
		</Link>
	);
}

export default GridItem;
