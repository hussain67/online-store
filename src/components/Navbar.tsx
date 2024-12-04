import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import NavLinks from "./NavLinks";

function Navbar() {
	return (
		<nav>
			<div className="bg-muted align-element flex justify-between items-center mt-2  py-3">
				<Logo />
				<LinksDropdown />
				<NavLinks />
				<div className="flex justify-center items-center gap-x-4">
					<ModeToggle />
					<CartButton />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
