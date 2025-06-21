import Link from "next/link";
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

				<Button variant="outline" asChild>
					<Link
						href="https://drive.google.com/file/d/1ENRXKhuiOMcPe57UWZtoB80y2h3TuDf-/view?usp=sharing"
						target="_blank"
					>
						Currículo
					</Link>
				</Button>
			</div>
		</header>
	);
}
