import ComplexPaginationContainer from "../components/ComplexPaginationContainer";
import OrdersList from "../components/orders/OrdersList";
import SectionTitle from "../components/SectionTitle";
import { toast } from "../hooks/use-toast";
import store from "../store";
import { OrderResponse } from "../types/cartTypes";
import { customFetch } from "../utils/customFetch";

export const loader = async ({ request }): Promise<OrderResponse | Response | null> => {
	const user = store.getState().userState.user;
	const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
	try {
		const response = await customFetch.get<OrderResponse>("/orders", {
			params,
			headers: {
				Authorization: `Bearer ${user?.jwt}`
			}
		});

		// console.log(response);
		return { ...response.data };
	} catch (error) {
		console.log(error);
		toast({ description: "Failed to fetch orders" });
	}
	return null;
};

export default function Orders() {
	return (
		<>
			<SectionTitle text="Your orders" />
			<OrdersList />
			<ComplexPaginationContainer />
		</>
	);
}
