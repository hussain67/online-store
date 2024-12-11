import { useAppSelector } from "../../hook";
import CartListItem from "./CartListItem";

function CartItemsList() {
	const cartItems = useAppSelector(state => state.cartState.cartItems);
	// console.log(cartItems);
	return (
		<section>
			{cartItems.map(item => {
				return (
					<CartListItem
						key={item.cartID}
						item={item}
					/>
				);
			})}
		</section>
	);
}

export default CartItemsList;
