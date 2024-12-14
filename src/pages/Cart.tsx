import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { Button } from "../components/ui/button";
import CartList from "../features/cart/CartList";
import CartTotal from "../features/cart/CartTotal";
import { useAppSelector } from "../hook";

function Cart() {
	const user = useAppSelector(state => state.userState.user);
	const numCartItems = useAppSelector(state => state.cartState.numItemsInCart);
	if (!numCartItems) {
		return <SectionTitle text="Empty Cart" />;
	}
	return (
		<>
			<SectionTitle text="Cart Items" />
			<section className="grid lg:grid-cols-12 mt-8">
				<div className="lg:col-span-8">
					<CartList />
				</div>
				<div className="lg:col-span-4">
					<CartTotal />
					{user && (
						<Button
							asChild
							className="mt-8 w-full"
						>
							<Link to="/checkout">Proceed to checkout</Link>
						</Button>
					)}
					{!user && (
						<Button className="mt-8 w-full">
							<Link to="/login">Please login</Link>
						</Button>
					)}
				</div>
			</section>
		</>
	);
}

export default Cart;
