import { useEffect, useState } from "react";
import { CartItem } from "../../types/cartTypes";
import { formatAsPound } from "../../utils/formatAsPound";
import SelectProductAmount, { Mode } from "../../components/single-product/SelectProductAmount";
import { useAppDispatch } from "../../hook";
import { editItem, removeItem } from "./cartSlice";
import { Button } from "../../components/ui/button";

function CartListItem({ item }: { item: CartItem }) {
	const { cartID, title, image, company, price, productColor, amount } = item;
	const [productAmount, setProductAmount] = useState(amount);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(editItem({ cartID, amount: productAmount }));
	}, [cartID, productAmount, dispatch]);

	function handleRemove() {
		dispatch(removeItem(cartID));
	}
	return (
		<section className="grid sm:grid-cols-4 gap-5 p-3 ">
			<img
				src={image}
				alt={title}
				className="h-40 w-full mx-auto  bg-cover rounded-sm "
			/>
			<div className="">
				<p className="capitalize mb-2">{title}</p>
				<h4 className="mb-2">{company}</h4>
				<h4 className="flex items-center">
					Color:
					<p
						className="w-4 h-4 rounded-full inline-block ml-2"
						style={{ backgroundColor: `${productColor}` }}
					></p>
				</h4>
			</div>

			<div>
				{
					<SelectProductAmount
						amount={productAmount}
						setAmount={setProductAmount}
						mode={Mode.CartItem}
					/>
				}
				<Button
					variant="link"
					onClick={handleRemove}
				>
					Remove
				</Button>
			</div>
			<div>{formatAsPound(price)}</div>
		</section>
	);
}

export default CartListItem;
