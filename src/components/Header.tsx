import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "../hook";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

// Header Component

function Header() {
	const navigate = useNavigate();
	const user = useAppSelector(state => state.userState.user);
	const dispatch = useAppDispatch();
	// const [user, setUser] = useState<string | null>(userName);
	function handleLogout() {
		// setUser(null);
		dispatch(logoutUser());
		dispatch(clearCart());
		navigate("/");
	}
	return (
		<div className="align-element  ">
			{user && (
				<div className="flex justify-center items-center sm:justify-end  gap-3 py-2">
					<p>Hello {user.userName}</p>
					<Button
						variant="link"
						size="sm"
						onClick={handleLogout}
					>
						Logout
					</Button>
				</div>
			)}
			{!user && (
				<div className="flex items-center justify-center sm:justify-end  gap-3 h-20">
					{" "}
					<Link to="/login">Sign In </Link>
					<Link to="/register"> Register</Link>
				</div>
			)}
		</div>
	);
}

export default Header;
