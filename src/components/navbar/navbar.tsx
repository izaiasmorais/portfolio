import { NavbarItem } from "./navbar-item";

export function Navbar() {
	return (
		<nav>
			<ul className="flex items-center gap-8">
				<NavbarItem href="/">Home</NavbarItem>
				<NavbarItem href="/sobre">Sobre</NavbarItem>
				<NavbarItem href="/projetos">Projetos</NavbarItem>
				<NavbarItem href="/contato">Contato</NavbarItem>
			</ul>
		</nav>
	);
}
