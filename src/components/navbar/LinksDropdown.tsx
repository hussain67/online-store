import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "../ui/button";

import { NavLink } from "react-router-dom";
import { links } from "../../utils/Links";
import { useAppDispatch, useAppSelector } from "../../hook";
// import { Links } from "../utils/Links";

function LinksDropdown() {
	const user = useAppSelector(state => state.userState.user);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className="lg:hidden"
			>
				<Button
					variant="outline"
					size="icon"
				>
					<AlignLeft />
					<span className="sr-only">Toggle Links</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-52 lg:hidden"
				align="start"
				sideOffset={25}
			>
				{links.map(link => {
					const restrictedRoute = link.href === "checkout" || link.href === "orders";
					if (restrictedRoute && !user) return;

					return (
						<DropdownMenuItem key={link.label}>
							<NavLink
								to={link.href}
								className={({ isActive }) => {
									return `capitalize w-full ${isActive ? "text-primary" : ""}`;
								}}
							>
								{link.label}
							</NavLink>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LinksDropdown;
