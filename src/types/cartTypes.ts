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

export type Pagination = {
	page: number;
	pageCount: number;
	pageSize: number;
	total: number;
};

export type Order = {
	id: number;
	attributes: {
		address: string;
		cartItems: CartItem[];
		createdAt: string;
		name: string;
		numItemsInCart: number;
		orderTotal: string;
		publishedAt: string;
		updatedAt: string;
	};
};

export type OrdersMeta = {
	pagination: Pagination;
};

export type OrderResponse = {
	data: Order[];
	meta: OrdersMeta;
};
