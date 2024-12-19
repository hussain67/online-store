import { NavLink } from "react-router-dom";
import { links } from "../../utils/Links";
import { useAppSelector } from "../../hook";

function NavLinks() {
	const user = useAppSelector(state => state.userState.user);
	return (
		<div className=" gap-4 capitalize hidden lg:flex ">
			{links.map(link => {
				const restrictedRoute = link.href === "orders" || link.href === "checkout";

				if (restrictedRoute && !user) return null;
				return (
					<NavLink
						to={link.href}
						key={link.label}
						className={({ isActive }) => {
							return `capitalize w-full ${isActive ? "text-primary" : ""}`;
						}}
					>
						{link.label}
					</NavLink>
				);
			})}
		</div>
	);
}

export default NavLinks;
