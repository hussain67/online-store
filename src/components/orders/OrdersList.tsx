import { useLoaderData } from "react-router-dom";
import { OrderResponse } from "../../types/cartTypes";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function OrdersList() {
	const { data: orders, meta } = useLoaderData() as OrderResponse;

	return (
		<div className="w-full">
			<h4>Total Orders: {meta.pagination.total}</h4>
			<Table>
				<TableCaption>Your recent orders</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Address</TableHead>
						<TableHead>Products</TableHead>
						<TableHead>Cost</TableHead>
						<TableHead>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map(order => {
						const { name, address, orderTotal, createdAt, numItemsInCart } = order.attributes;
						return (
							<TableRow key={order.id}>
								<TableCell>{name}</TableCell>
								<TableCell>{address}</TableCell>
								<TableCell>{numItemsInCart}</TableCell>
								<TableCell>{orderTotal}</TableCell>
								<TableCell>{new Date(createdAt).toDateString()}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}

export default OrdersList;
