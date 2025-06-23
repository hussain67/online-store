import { Link } from "react-router-dom";
// import { ArmchairIcon } from "lucide-react";
import logo from "../../assets/logo.png";
function Logo() {
	return (
		<Link
			to="/"
			className="hidden lg:flex bg-primary text-white p-1 rounded-md justify-center items-center"
		>
			{/* <ArmchairIcon  /> */}
			<img
				src={logo}
				alt="logo"
				className="w-10 h-10 "
			/>
		</Link>
	);
}
export default Logo;
