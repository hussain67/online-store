export type Link = {
	label: string;
	href: string;
};

export const links: Link[] = [
	{ href: "/", label: "home" },
	{ href: "/about", label: "about" },
	{ href: "/products", label: "products" },
	{ href: "/cart", label: "cart" },
	{ href: "checkout", label: "checkout" },
	{ href: "orders", label: "orders" }
];
