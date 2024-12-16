export type CartItem = {
	cartID: string;
	productID: number;
	image: string;
	title: string;
	price: string;
	amount: number;
	productColor: string;
	company: string;
};

export type CartState = {
	cartItems: CartItem[];
	numItemsInCart: number;
	cartTotal: number;
	shipping: number;
	tax: number;
	orderTotal: number;
};
export type Checkout = {
	name: string;
	address: string;
	chargeTotal: number;
	orderTotal: string;
	cartItems: CartItem[];
	numItemsInCart: number;
};
