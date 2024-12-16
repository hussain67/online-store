import { useAppSelector } from "../../hook";
import { formatAsPound } from "../../utils/formatAsPound";
import CartRow from "./CartRow";

function CartTotal() {
	const { cartTotal, shipping, tax, orderTotal } = useAppSelector(state => state.cartState);
	return (
		<div className="bg-muted px-4 divide-y-2 min-w-56">
			<CartRow>
				<>
					<span>Subtotal</span> <span>{formatAsPound(cartTotal)}</span>
				</>
			</CartRow>
			<CartRow>
				<>
					<span>Shipping</span> <span>{formatAsPound(shipping)}</span>
				</>
			</CartRow>
			<CartRow>
				<>
					<span>Tax</span> <span>{formatAsPound(tax)}</span>
				</>
			</CartRow>
			<CartRow>
				<>
					<span>Order Total </span> <span>{formatAsPound(orderTotal)}</span>
				</>
			</CartRow>
		</div>
	);
}

export default CartTotal;
