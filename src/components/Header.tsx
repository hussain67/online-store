import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
function Header() {
	const navigate = useNavigate();
	const [user, setUser] = useState<string | null>("Shahid");
	function handleLogout() {
		setUser(null);
		navigate("/");
	}
	return (
		<div className="align-element bg-slate-300 ">
			{user && (
				<div className="flex justify-center items-center sm:justify-end  gap-3 h-20">
					<p>Hello {user}</p>
					<Button onClick={handleLogout}>Logout</Button>
				</div>
			)}
			{!user && (
				<div className="flex items-center justify-center sm:justify-end bg-slate-300 gap-3 h-20">
					{" "}
					<Link to="/login">Sign In </Link>
					<Link to="/register"> Register</Link>
				</div>
			)}
		</div>
	);
}

export default Header;
