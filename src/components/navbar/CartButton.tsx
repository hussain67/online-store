import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hook";
import CheckoutLoginInfo from "../checkout/CheckoutLoginInfo";

export default function CartButton() {
	const user = useAppSelector(state => state.userState.user);
	const numOfCartItems = useAppSelector(state => state.cartState.numItemsInCart);
	const navigate = useNavigate();
	function handleClick() {
		if (user) {
			navigate("/checkout");
		} else {
			navigate("/checkoutinfo");
		}
	}
	return (
		<Button
			// asChild
			variant={"outline"}
			className="flex justify-center items-center relative "
			onClick={handleClick}
		>
			<div>
				<ShoppingCart className="text-primary " />
				<span className="absolute -top-3 -right-3 text-white bg-primary h-6 w-6 rounded-full flex justify-center items-center text-xs">{numOfCartItems}</span>
			</div>
		</Button>
	);
}
