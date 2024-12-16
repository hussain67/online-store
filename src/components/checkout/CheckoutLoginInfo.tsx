import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function CheckoutLoginInfo() {
	const [showMessage, setShowMessage] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowMessage(false);
		}, 2000);
	}, []);

	if (showMessage) {
		return (
			<div className="grid h-screen place-content-center">
				<h1 className="text-3xl">You need to login to checkout</h1>
			</div>
		);
	}

	return <Navigate to="/login" />;
}

export default CheckoutLoginInfo;
