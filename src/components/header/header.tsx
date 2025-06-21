import { Navbar } from "../navbar/navbar";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "./theme-swticher";


export function Header() {
	return (
		<header className="w-full py-4 flex justify-between">
			<strong>izaiasmorais</strong>

			<Navbar />

			<div className="space-x-4 flex items-center">
				<ThemeSwitcher />

				<Button variant="outline">Baixar Currículo</Button>
			</div>
		</header>
	);
}
