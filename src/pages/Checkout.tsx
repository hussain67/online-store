import SectionTitle from "../components/SectionTitle";
import { useAppSelector } from "../hook";
import CartTotal from "../features/cart/CartTotal";
import CheckoutOrderForm from "../components/checkout/CheckoutOrderForm";
import { ActionFunction, redirect } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { toast } from "../hooks/use-toast";
import store from "../store";
import { Checkout } from "../types/cartTypes";
import { formatAsPound } from "../utils/formatAsPound";
import { customFetch } from "../utils/customFetch";
import { clearCart } from "../features/cart/cartSlice";

function CheckoutPage() {
	const cartItems = useAppSelector(state => state.cartState.numItemsInCart);
	const user = useAppSelector(state => state.userState.user);

	if (!user) {
		return <Navigate to="/checkoutinfo" />;
	}

	return (
		<article>
			<>
				{!cartItems && (
					<section>
						<SectionTitle text="Your cart is empty please select items" />
					</section>
				)}
			</>
			<>
				{cartItems && (
					<section>
						<SectionTitle text="Place your order" />
						<div className="sm:flex gap-4 justify-center">
							<CheckoutOrderForm />
							<div className="self-start">
								<CartTotal />
							</div>
						</div>
					</section>
				)}
			</>
		</article>
	);
}

export default CheckoutPage;

export const action: ActionFunction = async ({ request }): Promise<null | Response> => {
	const formData = await request.formData();
	// const data = Object.fromEntries(formData);
	const name = formData.get("firstname") as string;
	const address = formData.get("address") as string;
	if (!name || !address) {
		toast({ description: "Please fill required field" });
	}
	const user = store.getState().userState.user;
	if (!user) {
		toast({ description: "Please login to checkout" });
	}
	const { numItemsInCart, orderTotal, cartItems } = store.getState().cartState;

	const info: Checkout = {
		name,
		address,
		chargeTotal: orderTotal,
		orderTotal: formatAsPound(orderTotal),
		cartItems,
		numItemsInCart
	};

	try {
		const result = await customFetch.post(
			"./orders",
			{ data: info },
			{
				headers: {
					Authorization: `Bearer ${user?.jwt}`
				}
			}
		);
		console.log(result);
		store.dispatch(clearCart());
		toast({ description: "Order Placed" });
		return redirect("/orders");
	} catch (error) {
		toast({ description: "Order failed" });
		console.log(error);
	}
	return null;
};
