import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function CartButton() {
	const numOfCartItems = 5;
	return (
		<Button
			// asChild
			variant={"outline"}
			className="flex justify-center items-center relative "
		>
			<Link to="/cart">
				<ShoppingCart className="text-primary " />
				<span className="absolute -top-3 -right-3 text-white bg-primary h-6 w-6 rounded-full flex justify-center items-center text-xs">{numOfCartItems}</span>
			</Link>
		</Button>
	);
}
