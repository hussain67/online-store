import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hook";

export default function CartButton() {
	const user = useAppSelector(state => state.userState.user);
	const numOfCartItems = useAppSelector(state => state.cartState.numItemsInCart);
	return (
		<Button
			// asChild
			variant={"outline"}
			className="flex justify-center items-center relative "
		>
			<Link to={user ? "/cart" : "/login"}>
				<ShoppingCart className="text-primary " />
				<span className="absolute -top-3 -right-3 text-white bg-primary h-6 w-6 rounded-full flex justify-center items-center text-xs">{numOfCartItems}</span>
			</Link>
		</Button>
	);
}
