function CartRow({ children }: { children: JSX.Element }) {
	return <div className="flex justify-between py-3">{children}</div>;
}

export default CartRow;
