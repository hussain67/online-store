import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function HeroInfo() {
	return (
		<section className="lg:p-6">
			<h1 className="text-4xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing</h1>
			<p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio repellendus odit soluta, excepturi quae est voluptatum corporis ad nesciunt consequuntur recusandae ipsa quidem id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eos.</p>
			<Button
				asChild
				className="text-white"
			>
				<Link to="/products">Our Products</Link>
			</Button>
		</section>
	);
}

export default HeroInfo;
