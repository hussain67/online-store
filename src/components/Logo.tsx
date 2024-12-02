import { Link } from "react-router-dom";
import { ArmchairIcon } from "lucide-react";
function Logo() {
	return (
		<Link
			to="/"
			className="hidden lg:flex bg-primary text-white p-2 rounded-lg justify-center items-center"
		>
			<ArmchairIcon className="w-8 h-8 " />
		</Link>
	);
}
export default Logo;
