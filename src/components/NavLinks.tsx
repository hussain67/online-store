import { NavLink } from "react-router-dom";
import { links } from "../utils/Links";

function NavLinks() {
	return (
		<div className=" gap-4 capitalize hidden lg:flex ">
			{links.map(link => (
				<NavLink
					to={link.href}
					key={link.label}
				>
					{link.label}
				</NavLink>
			))}
		</div>
	);
}

export default NavLinks;
