import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function PageLinks() {
	return (
		<div className="flex ">
			<Button
				asChild
				variant="link"
				size="sm"
				className="border-r border-solid"
			>
				<Link to="/">Home</Link>
			</Button>
			<Button
				asChild
				variant="link"
				size="sm"
			>
				<Link to="/products">Products</Link>
			</Button>
		</div>
	);
}

export default PageLinks;
