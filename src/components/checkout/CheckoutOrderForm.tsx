import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Form } from "react-router-dom";
function CheckoutOrderForm() {
	return (
		<div className="sm:w-96">
			<h2 className="text-xl tracking-widest mb-10">Shipping information</h2>
			<Form
				className="mb-8"
				method="post"
			>
				<Label htmlFor="firstname">First Name</Label>
				<Input
					type="text"
					name="firstname"
					id="firstname"
					className="w-full flex-1 mb-10"
				/>
				<Label>Address</Label>
				<Input
					type="text"
					name="address"
					id="address"
				/>
				<Button
					className="mt-6"
					type="submit"
				>
					Place your order
				</Button>
			</Form>
		</div>
	);
}

export default CheckoutOrderForm;
